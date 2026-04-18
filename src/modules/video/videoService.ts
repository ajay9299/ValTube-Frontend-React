import api from '../../services/api'

export async function getMultiPartUploadKey(payload: {fileName: string, mimeType: string}) {
  const res = await api.post('/video/upload-key', payload)
  return res.data
}

export async function getSignedUploadUrl(payload: {key: string, uploadId: string, partNumber: number}) {
  const res = await api.post('/video/upload-part-url', payload)
  return res.data
}

export async function completeMultiPartUpload(payload: {key: string, uploadId: string, parts: Array<{ETag: string | null, PartNumber: number}>}) {
  const res = await api.post('/video/upload-complete', payload)
  return res.data
}

export async function uploadVideoFile(file: File): Promise<void> {
  console.log("Selected file:", file);

  try {
    const data = await getMultiPartUploadKey({
      fileName: file.name,
      mimeType: file.type,
    });

    console.log("Received upload key data:", data);

    const chunkSize = 5 * 1024 * 1024;
    const totalChunks = Math.ceil(file.size / chunkSize);
    console.log("Total chunks:", totalChunks);

    const parts: Array<{ ETag: string | null; PartNumber: number }> = [];

    for (let i = 0; i < totalChunks; i++) {
      const partNumber = i + 1;
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      console.log(`Uploading chunk ${partNumber}/${totalChunks}...`);

      const signedUrlRes = await getSignedUploadUrl({
        key: data.key,
        uploadId: data.uploadId,
        partNumber,
      });

      console.log(`Signed URL response for chunk ${partNumber}:`, signedUrlRes);

      const uploadRes = await fetch(signedUrlRes, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: chunk,
      });

      console.log(`Upload response for chunk ${partNumber}:`, uploadRes);

      if (!uploadRes.ok) {
        throw new Error(`Failed to upload chunk ${partNumber}`);
      }

      const etag = uploadRes.headers.get("ETag");
      console.log(`ETag for chunk ${partNumber}:`, etag);

      parts.push({
        ETag: etag,
        PartNumber: partNumber,
      });
    }

    const allPartsUploaded = await completeMultiPartUpload({
      key: data.key,
      uploadId: data.uploadId,
      parts,
    });

    console.log("All parts uploaded, completing upload:", allPartsUploaded);
  } catch (error) {
    console.error("Upload handler error:", error);
    throw error; // Re-throw so the caller can handle it
  }
}
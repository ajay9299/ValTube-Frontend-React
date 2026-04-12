import api from '../../services/api'

export async function getMultiPartUploadKey(payload: {fileName: string, mimeType: string}) {
  const res = await api.post('/video/upload-key', payload)
  return res.data
}

export async function getSignedUploadUrl(payload: {key: string, uploadId: string, partNumber: number}) {
  const res = await api.post('/video/upload-part-url', payload)
  return res.data
}

export async function completeMultiPartUpload(payload: {key: string, uploadId: string, parts: Array<{ETag: string, PartNumber: number}>}) {
  const res = await api.post('/video/complete-upload', payload)
  return res.data
}
import React, { useRef } from "react";
import { uploadVideoFile } from "../../modules/video/videoService";
import DashboardLayout from "./DashboardLayout";

export default function DashboardVideos() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      console.log("Uploading video:", file.name);
      await uploadVideoFile(file);
      alert("Video uploaded successfully!");
    } catch (error) {
      console.error("Upload handler error:", error);
      alert("Failed to upload video. Please try again.");
    }
  };

  return (
    <DashboardLayout activeTab="videos">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Your Videos</h3>
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-500 mb-4">
            No videos uploaded yet. Start by uploading your first video!
          </p>
          <button
            onClick={handleButtonClick}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Upload Video
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="video/*"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

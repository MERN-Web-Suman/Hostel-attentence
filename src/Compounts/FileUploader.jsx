// File: UploadSection.jsx
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const UploadSection = ({ maxFiles = 1, onFilesSelected }) => {
  const [files, setFiles] = useState([]);
  const [signature, setSignature] = useState([]);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files).slice(0, maxFiles);
    setFiles(selectedFiles);
    onFilesSelected?.(selectedFiles);
    toast.success("File(s) uploaded successfully!");
  };

  const handleSignatureChange = (e) => {
    const selectedFiles = Array.from(e.target.files).slice(0, maxFiles);
    setSignature(selectedFiles);
    toast.success("Signature uploaded successfully!");
  };

  const renderPreview = (fileArray) => {
    return fileArray.map((file, index) => {
      const url = URL.createObjectURL(file);
      return (
        <div
          key={index}
          className="relative w-24 h-24 rounded-md overflow-hidden shadow-md"
        >
          {file.type.startsWith("image/") ? (
            <img src={url} alt={file.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-700 font-semibold text-sm">
              {file.name}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="p-4">
      <Toaster position="top-right" />
      <h2 className="text-2xl font-bold mb-4 text-blue-700" data-aos="fade-down">
        File & Signature Upload
      </h2>

      <div className="flex flex-col md:flex-row gap-6" data-aos="fade-up">
        {/* File Uploader */}
        <div className="flex-1 p-4 border border-gray-300 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:border-blue-500 hover:bg-blue-50">
          <label className="block mb-2 font-semibold text-gray-700">Upload File (Complaint)</label>
          <input
            type="file"
            multiple
            onChange={handleFilesChange}
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
          <div className="mt-2 flex flex-wrap gap-2">{renderPreview(files)}</div>
        </div>

        {/* Signature Uploader */}
        <div className="flex-1 p-4 border border-gray-300 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:border-green-500 hover:bg-green-50">
          <label className="block mb-2 font-semibold text-gray-700">Upload Signature</label>
          <input
            type="file"
            multiple
            onChange={handleSignatureChange}
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
          <div className="mt-2 flex flex-wrap gap-2">{renderPreview(signature)}</div>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;

import { useState } from "react";

export default function GalleryWidget() {
  const [images, setImages] = useState([
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
  ]);

  function handleAddImage() {
    const url = prompt("Enter image URL");
    if (url) setImages([...images, url]);
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-lg">Gallery</h2>
        <button
          onClick={handleAddImage}
          className="bg-blue-600 px-3 py-1 text-white rounded hover:bg-blue-700"
        >
          + Add Image
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={img-${idx}} className="rounded-lg object-cover" />
        ))}
      </div>
    </div>
  );
}

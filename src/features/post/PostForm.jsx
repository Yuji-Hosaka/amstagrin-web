import { IoMdPhotos } from "react-icons/io";

export default function PostForm() {
  return (
    <>
      <div className=" bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex-col items-center cursor-pointer gap-2">
        <div className=" bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center">
          <IoMdPhotos />
        </div>
        <span>Add photo here</span>
      </div>
      <button className=" bg-pink-600 hover:bg-pink-700 text-white px-3 py-1.5 w-full rounded-lg font-semibold">
        Share
      </button>
    </>
  );
}

import SideBar from "../layout/SideBar";

export default function HomePage() {
  return (
    <div className="flex  ">
      <div className="h-100">

      <SideBar/>
      </div>
      <h1 className=" text-pink-600 text-5xl text-center w-full">
        Following Post
      </h1>
    </div>
  )
}

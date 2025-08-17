import Image from "next/image";

import banner from "../../assets/banner.jpg";
import meteorThumbnail from "../../assets/meteor.jpg";
import meteorViewingThumbnail from "../../assets/meteor-gazing.jpg"

import SearchButton from "./_components/search/search-button";
import SearchBar from "./_components/search/search-bar";
import Particles from "./_components/visual/particles";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-vh gap-24 grid-background">
      <div className="flex justify-center items-center w-full h-194 border-bottom-[1px] border-neutral-300 shadow-md shadow-neutral-600 relative">
      <Particles particleCount={10}></Particles>
        <div className="flex flex-col gap-16 w-full h-full absolute justify-center items-center">
          <span className="text-6xl font-bold text-shadow-lg/30 w-108">Earth's Fate at Your Fingertips</span>
          <SearchBar></SearchBar>
          <SearchButton></SearchButton>
        </div>
        <Image alt="banner img" src={banner} className="w-full h-full object-cover object-center"></Image>
      </div>


      <div className="flex flex-row justify-center items-center gap-82">
        <div className="flex justify-center items-center w-[590px] h-82 bg-white shadow-md shadow-neutral-500 rounded-lg">
          <div className="flex w-128 h-64 relative">
            <div className="w-full h-full absolute">
              <div className="flex w-full h-full items-center justify-center">
                <Link className="text-4xl font-semibold text-shadow-lg/30" href={"/"}>Today's Near-Earth Object</Link>
              </div>
            </div>
            <div className="bg-neutral-200 border-[1px] border-neutral-300 rounded-md overflow-hidden shadow-sm shadow-neutral-700">
              <Image alt="meteor img" className="w-full h-full object-cover object-center" src={meteorThumbnail}></Image>
            </div>
          </div>
        </div>

          <div className="flex justify-center items-center w-[590px] h-82 bg-white shadow-md shadow-neutral-500 rounded-lg">
              <div className="flex w-128 h-64 relative">
                <div className="w-full h-full absolute">
                  <div className="flex w-full h-full items-center justify-center">
                    <Link className="text-4xl font-semibold text-shadow-lg/30" href={"/"}>Random Near-Earth Object</Link>
                  </div>
                </div>
                <div className="bg-neutral-200 border-[1px] border-neutral-300 rounded-md overflow-hidden shadow-sm shadow-neutral-700">
                  <Image alt="meteor img" className="w-full h-full object-cover object-center" src={meteorViewingThumbnail}></Image>
                </div>
            </div>
          </div>

      </div>

        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="text-5xl">
            ☄️
          </div>
          <div className="text-2xl text-cyan-950">
            Want to see more? Head to <Link className="underline" href={""}>GitHub</Link> to view this project's source files and much more!
          </div>
        </div>
    </div>
  );
}

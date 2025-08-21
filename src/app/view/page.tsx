'use client'

import { useSearchParams } from "next/navigation"
import Image from "next/image";

import exampleImg from "../../../assets/example-img.jpg"

export default function ViewResults() {
    const queryParams = useSearchParams();
    const dateParam = queryParams.get('date');

    return (
        <div className="w-full min-h-screen flex flex-col items-center px-8 gap-16">
            <div className="w-full flex flex-col items-center justify-center gap-12">
                <div className="w-[90%]">
                    <div className="w-full text-cyan-950 text-3xl ml-2">
                        Object Name, DD-MM-YYYY
                    </div>
                    <div className="w-full h-128">
                        <Image src={exampleImg} alt="example meteor image" className="w-full h-full border-[1px] border-neutral-400 rounded-lg object-cover object-top shadow-md shadow-neutral-500"></Image>
                    </div>
                    <div className="text-sm text-neutral-400">
                        Example image only. Not an actual image of the near-earth object.
                    </div>
                </div>
                <div className="flex flex-col w-full items-center gap-4">
                    <div className="text-cyan-950 text-4xl font-semibold text-shadow-lg">
                        RISK LEVEL:
                    </div>
                    <div className="text-orange-500 text-5xl font-semibold text-shadow-lg/30">
                        MEDIUM
                    </div>
                </div>
            </div>
        </div>
    )
}
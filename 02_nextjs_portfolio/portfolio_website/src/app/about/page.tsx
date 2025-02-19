import Image from "next/image"

export default function About(){
    return(
        <>
        <div className="justify-center text-center m-10">
                <h1 className="text-base">Introduction</h1>
                <h2 className="text-3xl font-semibold">About me</h2>
        </div>

        <div className="flex justify-center items-center rounded-xl">
            <div>
                    <Image src="/pic.jpeg" alt="Profile" width={250} height={250} className="rounded-3xl" />
            </div>
        </div>

        <div className="bg-slate-100 max-w-2xl mx-auto mt-5 p-3 rounded-xl">
            <div className="">
                <h1 className="font-semibold">I am Shahab Ud Din, Frontend Developer</h1>
                <p className="text-wrap">
                Starting my career at Capresoft, I’ve focused on developing 
                responsive web applications. My expertise lies in merging modern frontend technologies
                 with intelligent automation to enhance user experience and streamline processes.
                </p>
                <h2 className="">Skills</h2>
            </div>

        </div>
        </>
    )

}
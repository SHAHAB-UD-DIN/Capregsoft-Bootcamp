import Image from "next/image"

export default function About(){
    return(
        <>
        <div className="justify-center text-center m-10">
                <h1 className="text-base">Introduction</h1>
                <h2 className="text-3xl font-semibold">About me</h2>
        </div>

        <div className="flex bg-slate-100 max-w-7xl mx-auto m-4 rounded-lg p-4">
            <div className="p-3">
                    <Image src="/pic.jpeg" alt="Profile" width={300} height={300} className="rounded-3xl" />
            </div>

            <div className="p-3">
                <p >
                I am Shahab Ud Din, Frontend Developer Starting my career at Capresoft, I’ve focused on developing 
                responsive web applications. My expertise lies in merging modern frontend technologies
                 with intelligent automation to enhance user experience and streamline processes.
                </p>
            </div>

        </div>
        </>
    )

}
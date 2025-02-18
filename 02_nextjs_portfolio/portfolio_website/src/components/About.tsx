import Image from "next/image"


export default function About(){
    return(
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <div className="justify-items-center text-centre mb-2 text-lg mt-7">
                <h1 className="text-base">Introduction</h1>
                <h2 className="text-3xl font-semibold">About me</h2>
            </div>

            <div className="flex w-full flex-cols lg:flex-row items-center gap-20 my-20">
                <div>
                    <Image src="/pic.jpeg" alt="Profile" width={300} height={300} className="rounded-3xl" />
                </div>
            </div>

            <div>
                <p>
                    
                </p>
            </div>

        </div>
    )
}
import Image from "next/image";


export default function Home() {
  return (
    <>
    <div className="items-center m-10">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Hello I'm 
          <span className="text-blue-600 font-bold "> SHAHAB UD DIN</span>
        </h1>
        <h3 className="text-3xl font-semibold ">And I'm a Web Developer</h3>
      </div>

      <div className="justify-items-center">
        <Image src="/pic.jpeg" alt="Profile" width={300} height={300} className="rounded-3xl p m-10 " />
      </div>
    </div>
    <div>

    </div>
    </>
  );
}

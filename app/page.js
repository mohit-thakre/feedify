import Hero from "@/components/homepage/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {

 
  return (
 
   <div className=" w-full max-w-6xl mx-auto flex justify-center flex-col items-center   bg-white text-black " >

    <div className="w-full h-screen  flex flex-col justify-start items-center py-8">
      <Navigation/>
      <Hero/>
    </div>

   </div>

  );
}

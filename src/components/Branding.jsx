import { useEffect } from "react";

export default function Branding() {


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <div className="bg-blue-100 rounded">

            <h1 className="pt-20 md:text-4xl text-2xl text-[#0d2438] font-bold">Nebulus: Fresher's Party 2023 NSUT Branding</h1>

            <div className="p-40 pt-10 grid md:grid-cols-3 grid-cols-1 gap-12 "> 

            <img className="h-64" src="/Branding/b1.png" alt="Instagram Image" />
            <img className="h-64" src="/Branding/b2.png" alt="Instagram Image" />
            <img className="h-64" src="/Branding/b3.png" alt="Instagram Image" />
            <img className="h-64 " src="/Branding/b4.png" alt="Instagram Image" />
            <img className="h-64" src="/Branding/b5.png" alt="Instagram Image" />

            </div>


            <h1 className=" md:text-4xl text-2xl text-[#0d2438] font-bold">Happy Plum: AI based Language Learning Platform</h1>

            <div className="p-40 pt-10 grid md:grid-cols-3 grid-cols-1 gap-12"> 

            <img className="h-64" src="/Branding/b6.png" alt="Instagram Image" />
            <img className="h-64" src="/Branding/b7.png" alt="Instagram Image" />
            <img className="h-64" src="/Branding/b8.png" alt="Instagram Image" />
            <img className="h-64 " src="/Branding/b9.png" alt="Instagram Image" />
            <img className="h-64" src="/Branding/b10.png" alt="Instagram Image" />
            <img className="h-64" src="/Branding/b11.png" alt="Instagram Image" />


            </div>


            
           

        </div>



    );
  }
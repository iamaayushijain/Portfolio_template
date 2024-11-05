import { useEffect } from "react";


export default function Instagram() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="bg-blue-100 rounded">

            <div className="p-40 grid grid-cols-2 gap-32"> 

            <img className="h-88" src="/Instagram/ig1.png" alt="Instagram Image" />
            <img className="h-88 mt-20" src="/Instagram/ig2.png" alt="Instagram Image" />
            <img className="h-88" src="/Instagram/ig3.png" alt="Instagram Image" />
            <img className="h-88  mt-20" src="/Instagram/ig4.png" alt="Instagram Image" />
            <img className="h-88" src="/Instagram/ig5.png" alt="Instagram Image" />
            <img className="h-88  mt-20" src="/Instagram/ig6.png" alt="Instagram Image" />
            <img className="h-88" src="/Instagram/ig7.png" alt="Instagram Image" />
            <img className="h-88  mt-20" src="/Instagram/ig8.png" alt="Instagram Image" />
            <img className="h-88" src="/Instagram/ig9.png" alt="Instagram Image" />
            <img className="h-88  mt-20" src="/Instagram/ig10.png" alt="Instagram Image" />


            
            </div>

        </div>



    );
  }
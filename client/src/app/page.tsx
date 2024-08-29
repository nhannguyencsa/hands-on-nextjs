import Card from "@/app/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className='w-[700px] h-[700px] bg-red-300'>
        <Image 
          src="https://images.pexels.com/photos/26690851/pexels-photo-26690851/free-photo-of-close-up-of-a-bee-sitting-on-a-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flower"
          width={200}
          height={200}
          quality={70}
          priority={true}
          className="w-[300px] h-[300px]"
          title="sun flower"
        />
      </div>
    </main>
  );
}

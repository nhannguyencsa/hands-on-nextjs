import Card from "@/app/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className='w-[700px] h-[700px] bg-red-300'>
        <Image 
          src="/images/flower.jpg" alt="flower"
          width={200}
          height={200}
          quality={70}
          priority={true}
          className="w-[400px]"
        />
      </div>
    </main>
  );
}

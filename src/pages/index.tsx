import Image from "next/image";
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <div className="bg-black min-h-screen min-w-screen flex justify-center items-center">
      <div className="w-[500px] h-[300px] bg-white flex items-center justify-center flex-col rounded z-10">
        <h1 className="text-xl font-bold">Cek Khodam Mu Sekarang</h1>
        <input type="text" className="my-2 px-4 py-1.5 border w-60" />
        <button className="bg-slate-800 text-white rounded-full px-24 py-2">
          Cek
        </button>
      </div>
      <Image src={bg} alt="bg" className="absolute h-screen"></Image>
    </div>
  );
}

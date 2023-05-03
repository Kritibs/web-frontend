import Image from "next/image";
import styles from "./Homepage.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 content-center px-6 mt-16 mb-16">
        <div className="grid grid-cols-1 sm:gap-4 gap-10">
          <h1
            className={`${styles.lc_community}`}
          >
            LUTHER MARKETPLACE
          </h1>
          <div className="font-bold lg:text-6xl text-3xl">
            Services that our community needs most
          </div>
        </div>
        <div className="mt-5">
          <Image
            className="object-contain lg:rounded-full"
            src="/logo.jpg"
            alt="logo of Luther Marketplace"
            width={500}
            priority={true}
            height={500}
          />
        </div>
        <Link href="/login" className="relative inline-flex w-[200px] items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-500 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">Log-In</span>
          <span className="relative invisible">Log-In</span>
        </Link>
      </div>
    </>
  );
}

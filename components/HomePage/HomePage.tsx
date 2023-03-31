import Image from "next/image";
import styles from "./Homepage.module.css";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 content-center px-6 mt-16">
        <div className="grid grid-cols-1 sm:gap-4 gap-10">
          <h1
            className={`${styles.lc_community} font-thin sclae-y-75 tracking-widest  lg:text-2xl text-lg`}
          >
            LUTHER MARKETPLACE
          </h1>
          <div className="font-bold lg:text-6xl text-3xl">
            Services that our community needs most
          </div>
        </div>
        <div className="">
          <Image
            className="object-contain md:rounded-full"
            src="/logo.jpg"
            alt="logo of Luther Marketplace"
            width={500}
            priority={true}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

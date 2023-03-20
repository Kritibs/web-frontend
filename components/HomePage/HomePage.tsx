import Image from 'next/image'
import styles from "./Homepage.module.css"

export default function HomePage() {
  return (
    <>
      <div className="grid grid-rows-2 lg:grid-cols-2  gap-4 content-center px-6">
        <div className="flex flex-col justify-evenly">
          <h1 className={`${styles.lc_community} font-thin sclae-y-75 tracking-widest -mb-10 sm:-mb-16 lg:text-2xl text-lg`}>LUTHER MARKETPLACE</h1>
          <div className="font-bold lg:text-6xl text-3xl">Services that our community needs most</div>
        </div>
        <div className="-mt-40 lg:-mt-0"> 
            <Image
            className="object-contain rounded-full md:w-50 md:h-50"
            src="/logo.jpg"
            alt="logo of Luther Marketplace"
            width={500}
            priority={true}
            height={500}
            style={{ width: 500, height: 500 }}
            />
        </div>
      </div>
    </>
  );
}

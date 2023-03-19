import Image from 'next/image'
import styles from "./Homepage.module.css"

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 content-center">
        <div className="flex flex-col justify-evenly">
          <h1 className={`${styles.lc_community} font-thin sclae-y-75 tracking-widest -mb-16 text-2xl`}>LUTHER COMMUNITY</h1>
          <div className="font-bold text-6xl">Services that our community needs most</div>
        </div>
        <div> 
            <Image
            className="object-contain rounded-full"
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

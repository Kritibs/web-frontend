import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 content-center">
        <div className="flex flex-col justify-evenly">
          <div>LUTHER COMMUNITY</div>
          <div>Services that our community needs most</div>
        </div>
        <div> 
            <Image
            className="object-contain"
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

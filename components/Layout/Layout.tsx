import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
// export default function Layout({ children }: { children: any }) {
export default function Layout({ children }: { children: any }) {
  return (
    <>  
      <div className="flex flex-col min-h-screen bg-gray-200 dark:bg-black">
        <div className="max-w-screen-lg mx-auto my-0"> 
        <Nav />
         {children}
         <Footer />
         </div>
      </div>
    </>
  );
}

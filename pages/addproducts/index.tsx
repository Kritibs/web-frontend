import AddProducts from "@/components/AddProducts/AddProducts";
import Head from "next/head";

export default function addproducts() {
  return (
    <>
    <Head>
        <title>Add Listing</title>
        <meta name="description" content="Add Listing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
    </Head>
    <AddProducts edit={false}/>
    </>
  );
}

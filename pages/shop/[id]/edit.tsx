import AddProducts from "@/components/AddProducts/AddProducts";
import Head from "next/head";

export default function edit() {
    return(
    <>
    <Head>
        <title>Edit Product Details</title>
        <meta name="description" content="Edit Product Details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
    </Head>
    <AddProducts edit={true}/>
    </>
    )
}

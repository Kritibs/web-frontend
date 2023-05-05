import ProductDetail from "@/components/Shop/ProductDetail";
import Head from "next/head";

const detail = () => {
  return(
    <>
    <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="Product Details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
    </Head>
    <ProductDetail/>
    </>
  )
}

export default detail;

import Shop from "@/components/Shop/Shop";
import Head from "next/head";


export default function shop(){
    return (
        <>
        <Head>
        <title>Marketplace Shop</title>
        <meta name="description" content="Marketplace Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        </Head>
        <Shop/>
        </>
    )
}
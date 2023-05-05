import Terms from "@/components/Terms/Terms"
import Head from "next/head";

export default function terms(){
    return(
        <>
        <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="Marketplace Terms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        </Head>
        <Terms/>
        </>
    )
}
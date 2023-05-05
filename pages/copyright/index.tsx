import Copyright from "@/components/Copyright/Copyright";
import Head from "next/head";

export default function copyright(){
    return(
        <>
        <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="Copyright Notice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        </Head>
        <Copyright/>
        </>
    )
}
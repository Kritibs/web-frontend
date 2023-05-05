import Privacy from "@/components/Privacy/Privacy"
import Head from "next/head";

export default function privacy(){
    return(
        <>
        <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="Privacy Policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        </Head>
        <Privacy/>
        </>
    )
}
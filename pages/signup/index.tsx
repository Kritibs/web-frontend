import Signup from '../../components/Signup/Signup';
import Head from "next/head";


export default function signup(){
    return(
        <>
        <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="Marketplace Signup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        </Head>
        <Signup />
        </>
    )
}
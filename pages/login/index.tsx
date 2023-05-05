import Login from "../../components/Login/Login";
import Head from "next/head";

export default function login(){
    return(
        <>
        <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="Marketplace Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        </Head>
        <Login />
        </>
    )
}
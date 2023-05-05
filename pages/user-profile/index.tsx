import UserProfile from "@/components/UserProfile/UserProfile";
import Head from "next/head";

export default function userprofile(){
    return (
        <>
        <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="User Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        </Head>
        <UserProfile/>
        </>
    )
}
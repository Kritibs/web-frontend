import ResetPassword from "@/components/Reset-password/ResetPassword";
import Head from "next/head";

export default function resetpassword(){
    return(
        <>
        <Head>
        <title>Reset Password</title>
        <meta name="description" content="Reset Password" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        </Head>
        <ResetPassword/>
        </>
    )

}
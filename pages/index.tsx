import Head from "next/head";
import HomePage from "../components/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="Luther Marketplace Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
      </Head>
      <HomePage />
    </>
  );
}

import AddProducts from "@/components/AddProducts/AddProducts";
import Head from "next/head";

export default function edit() {
    return(
    <>
    <Head>
        <title>Luther Marketplace</title>
        <meta name="description" content="Edit Product Details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
    </Head>
    <AddProducts edit={true}/>
    </>
    )
//   const router = useRouter();
//   const { data, error } = useSWR(`products/${router.query.id}`, get_fetcher);
//   if (!data) return <h1>I am loading</h1>;
//   else if (error) return <h1>there is error</h1>;
//   else {
//     return <AddProducts productId={router.query.id} />;
//   }
}

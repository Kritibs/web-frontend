import AddProducts from "@/components/AddProducts/AddProducts";

export default function edit() {
    return(
    <AddProducts edit={true}/>
    )
//   const router = useRouter();
//   const { data, error } = useSWR(`products/${router.query.id}`, get_fetcher);
//   if (!data) return <h1>I am loading</h1>;
//   else if (error) return <h1>there is error</h1>;
//   else {
//     return <AddProducts productId={router.query.id} />;
//   }
}

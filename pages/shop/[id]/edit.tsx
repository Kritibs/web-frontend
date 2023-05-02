import AddProducts from "@/components/AddProducts/AddProducts";
import { useRouter } from "next/router";
import useSWR from "swr";
import { get_fetcher } from "@/fetch";

export default function edit() {
  const router = useRouter();
  const { data, error } = useSWR(`products/${router.query.id}`, get_fetcher);
  if (!data) return <h1>I am loading</h1>;
  else if (error) return <h1>there is error</h1>;
  else {
    return <AddProducts product={data} />;
  }
}

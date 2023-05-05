import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { del_fetcher, get_fetcher } from "@/fetch";
import { ProductCard } from "@/components/Shop/Shop";
import { useSession } from "next-auth/react";
import jwtDecode from "jwt-decode";
import { DecodedToken } from "@/components/UserProfile/UserProfile";

const ProductDetail = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const { data: session, status } = useSession();
  const { id } = router.query;
  var decodedData: DecodedToken = {
    exp: 0,
    iat: 0,
    jti: "",
    token_type: "",
    user_id: 0,
  };
  if (session) {
    decodedData = jwtDecode(session.user?.access);
  }

  const { data, error } = useSWR(`products/${id}`, get_fetcher);

  
  const DeleteProduct = (event: any) => {
    event.preventDefault();
    const res = del_fetcher(`products/${id}`, session).then(() => {
      mutate("products/");

      router.push({
        pathname: "/shop",
      });
    });
    // mutate()
  };

  const editProduct = (event: any) => {
    event.preventDefault();
    router.push({
      pathname: `/shop/${id}/edit`,
      // query: { id: id },
    });
  };

  if (!data) return <h1>I am loading</h1>;
  else if (error) return <h1>there is error</h1>;
  else {
    if (decodedData.user_id == data.product_author) {
      return (
        <>
          <div className="mt-16 mb-20">
            <ProductCard product={data} />
            <div className="flex flex-rows justify-evenly my-10">
              <Button func={editProduct} text="Edit" color="blue" />
              <Button func={DeleteProduct} text="Delete" color="blue" />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="mt-16 mb-20">
            <ProductCard product={data} />
          </div>
        </>
      );
    }
  }
};

const Button = ({
  func,
  text,
  color,
}: {
  func: any;
  text: string;
  color: string;
}) => {
  return (
    <div>
      <button
        onClick={func}
        className={`bg-${color}-500 hover:bg-${color}-700 w-28 sm:w-40 text-white font-bold py-2 text-xl px-2 border border-${color}-700 rounded-full`}
      >
        {text}
      </button>
    </div>
  );
};

export default ProductDetail;

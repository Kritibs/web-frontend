import { useSession } from "next-auth/react";
import { get_fetcher } from "../../fetch/";
import jwtDecode from "jwt-decode";
import useSWR from "swr";
import { Product, ProductCard } from "../Shop/Shop";
import Image from "next/image";
import Link from "next/link";

export interface DecodedToken {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;
  user_id: number;
}

export var decodedData: DecodedToken = {
  exp: 0,
  iat: 0,
  jti: "",
  token_type: "",
  user_id: 0,
};

export default function UserProfile() {
  const { data: session, status } = useSession();

  const { data: products, error: product_error } = useSWR(
    "products/",
    get_fetcher
  );
  if (session) {
    const userData = session.user?.access;
    decodedData = jwtDecode(userData);
  }

  const { data: user, error: user_error } = useSWR(
    "accounts/" + decodedData.user_id,
    get_fetcher
  );

  const { data: name, error: name_error } = useSWR(
    "api/accounts/" + decodedData.user_id,
    get_fetcher
  );

  if (!products) return <h1>I am loading</h1>;
  if (product_error) return <h1>there is error</h1>;
  if (decodedData.user_id != 0) {
    return (
      <>
      <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 hover:animate-bounce">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h1 className="text-2xl text-center py-2 animate-pulse">
          Welcome Back {user?.first_name ? user.first_name : ""} !
      </h1>
      <h2 className="text-md text-center py-4 px-1 mb-4">
          These are the items you have listed on Luther Marketplace
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4 sm:gap-2">
          {products.map((product: Product) => (
            <div key={product.id}>
              {product.product_author == decodedData.user_id ? (
                <>
                  <div>
                    <Link href={`/shop/${product.id}`}>
                      <ProductCard product={product} />
                    </Link>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="text-blue-500 text-lg my-60 text-center">
        Please Login First.
      </div>
    );
  }
}

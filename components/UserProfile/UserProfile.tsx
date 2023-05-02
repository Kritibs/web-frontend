import { useSession } from "next-auth/react";
import { get_fetcher } from "../../fetch/";
import jwtDecode from "jwt-decode";
import useSWR from "swr";
import { Product ,ProductCard} from "../Shop/Shop";
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

  if (!products) return <h1>I am loading</h1>;
  if (product_error) return <h1>there is error</h1>;
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4 sm:gap-2">
        {products.map((product: Product) => (
          <div key={product.id}>
            {product.product_author == decodedData.user_id ? (
              <>
              <div key={product.id}>
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
}

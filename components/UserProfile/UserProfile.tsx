import { useState, useEffect} from "react";
// import { UserContext } from "@/context";
import { useSession } from "next-auth/react";
import { get_fetcher } from "../../fetch/";
import jwtDecode from "jwt-decode";
import useSWR from "swr";
import { Product } from "../Shop/Shop";
import Image from "next/image";

export interface DecodedToken {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;
  user_id: number;
}
export default function UserProfile() {
  const { data: session, status } = useSession();
  const [userID, setUserID]=useState(0)

    const { data: products, error: product_error } = useSWR(
      "products/",
      get_fetcher
    );
var decodedData:DecodedToken={

  exp: 0,
  iat: 0,
  jti: "",
  token_type: "",
  user_id: 0,
}
  if (session) {
    const userData = session.user?.access;
    decodedData = jwtDecode(userData);
  }


    const { data: user, error: user_error } = useSWR(
      "accounts/"+decodedData.user_id,
      get_fetcher
    );


    if (!products) return "I am loading";
    if (product_error) return "there is error";
    // console.log(products);
    // console.log(user);

    // console.log(products)
    return (
      <>
        <h1>Hi {decodedData.user_id}</h1>
        <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            {product.product_author == decodedData.user_id ? (
              <>
                <Image
                  src={`${product.product_picture}`}
                  width={500}
                  height={500}
                  alt="Product image"
                />
                <p>{product.product_description}</p>
                <div>
                  <h1>{product.product_condition}</h1>
                </div>
                <p>{product.product_price}</p>
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

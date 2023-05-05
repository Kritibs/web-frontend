import styles from "./Shop.module.css";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { get_fetcher } from "../../fetch/";
import { useSession } from "next-auth/react";
import jwtDecode from "jwt-decode";

export interface Product {
  id: number;
  product_name: string;
  product_picture: null|File;
  product_description: string;
  product_condition: string;
  product_action: string;
  product_price: number;
  product_date: string;
  product_author: number;
}

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

export default function Shop() {

  const { data, error } = useSWR("products/", get_fetcher);
  if (!data) return <h1>I am loading</h1>
  else if (error) return <h1>there is error</h1>
  else {
    return (
      <div className="mt-16 mb-20" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4 sm:gap-2">
          {data.map((product: Product) => {
            return (
              <div key={product.id}>
                <Link href={`/shop/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export function ProductCard({ product }: { product: any }) {
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
    "accounts/" + product.product_author,
    get_fetcher
  );
  return (
    <div className={styles.productgrid}>
      <div className={styles.productcard} /* key={product.id} */>
        <Image
          className={styles.productimage}
          src={product.product_picture}
          width={500}
          height={500}
          alt="Search bar picture"
        />
        <div className={styles.productcontent}>
          <div>
            <div className={styles.productdetails}>
              <span>{product.product_name}</span>
            </div>
            <div className={styles.productcondition}>
              <p className={styles.productconditiontext}>
                {product.product_condition}
              </p>
            </div>
            <div className= "text-slate-600 py-2 max-h-14 text-ellipsis overflow-hidden ...">
              {product.product_description}
            </div>
          </div>
          <div className={styles.productprice}>${product.product_price}</div>
          <Link href={`mailto:${user?.email ? user.email : ""}?subject=${product.product_name} lisiting from Luther Marketplace!&body=Hey, I am interested in your recent listing. Is it still available`} className="relative inline-flex w-[200px] items-center justify-center px-3 py-0 overflow-hidden font-medium text-blue-500 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">Contact Seller</span>
            <span className = "relative invisible bg-transparent border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full transition duration-300 ml-auto hover:animate-pulse">
                Contact Seller 
            </span>
          </Link>
        </div>
      </div>
    </div>

    
  );
}

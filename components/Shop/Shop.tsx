import styles from "./Shop.module.css";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { get_fetcher } from "../../fetch/";

export interface Product {
  id: number;
  product_name: string;
  product_picture: string;
  product_description: string;
  product_condition: string;
  product_action: string;
  product_price: number;
  product_date: string;
  product_author: number;
}


export default function Shop() {
  const { data, error } = useSWR("products/", get_fetcher);
  if (!data) return <h1>I am loading</h1>
  else if (error) return <h1>there is error</h1>
  else {
    return (
      <div className="mt-16 mb-20">
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
            <div className={`${styles.productbio} text-ellipsis truncate w-64`}>
              {product.product_description}
            </div>
          </div>
          <div className={styles.productprice}>${product.product_price}</div>
        </div>
      </div>
    </div>
  );
}

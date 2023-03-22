import Image from 'next/image'
import styles from "./Shop.module.css"
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import {fetcher} from "../../fetch/";

export default function Shop() {

  return (
    <>
      <div className="headerimagecontainer">
        <div className="textheader">
          <h1 className="parentheadtext">Find out what the <br></br>community is selling</h1>
          <br></br>
          <h3 className="subheadtext">Your friends and professors trust Luther Marketplace everyday. <br></br> 
          Explore and get the goods you need for cheap.</h3>         
        </div>
        <div className="searchbar">
          <form method="get" action="">
            <input className="searchfield" type="text" placeholder="Search" required></input>
          </form>
        </div>
			</div>

		<div className="productgrid">
			<div className="productcard" /* key={product.id} */>
				<img className="productimage" src="https://images.pexels.com/photos/7303738/pexels-photo-7303738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={500} height={500} alt="Search bar picture"/>	
				<div className="productcontent">
					<div>
						<div className="productdetails">
							<span>Product Name</span>									
						</div>
						<div className = "productcondition">
							<p className = "productconditiontext">Used New</p>
						</div>	
						<div className="productbio">
							The detailed bio of the product goes here. The detailed bio of the product goes here. The detailed bio of the product goes here.
						</div>
					</div>
					<div className="productprice">
						$100.00
					</div>
				</div>
			</div>
		</div>
    </>
  );
}

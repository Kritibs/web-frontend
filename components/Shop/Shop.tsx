import Image from 'next/image'
import styles from "./Shop.module.css"

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

      
    </>
  );
}

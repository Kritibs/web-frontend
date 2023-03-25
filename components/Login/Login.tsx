import styles from "./Login.module.css";
import Link from 'next/link';
import Image from 'next/image';


export default function Login() {

	return (
		<>
		<main className={styles.main}>
			<div className={styles.upperbody}>
			<div className={styles.welcomebox}>
			<br></br>
            <h1 className={styles.welcome}>Welcome Back</h1>
            <h2 className={styles.details}>Please enter your details.</h2>
			<form>
				<input className={styles.email}
					type="text"
					id="email"
					name="email"
					placeholder="Email"
					required
				/>
				<br></br>
				<input className={styles.password}
					type="password"
					placeholder="Password"
					id="password"
					name="password"
					required
					
				/>
				<br></br>
				<input className={styles.checkbox}
					type="checkbox"
					id="remmeberme"
					name="remmeberme"
					required
					
				/>
				<label htmlFor="remmeberme" className={styles.checklabel}>Remember Me</label>
	  <Link className={styles.fgpass} href="/reset-password">
			Forgot Password
	  </Link>
            	<br></br>
				<button className={styles.submit2} type="button" id= "submit2">
					Sign in
				</button>
				<button className={styles.submit1} id= "submit1" type="button">
					Logout
				</button>
            	<h4 className={styles.h4txt}>Don`&#39;`t have an account?

	  <Link className={styles.linklayer1} href="/signup">
			Create an account
	  </Link>
		</h4>
			<div className={styles.errormsg} id="errormsg"></div>
			</form>
			</div>
        	</div>
		{/* <div className={styles.imghalf}>
        	<Image className={styles.structure} src="/loginimg.jpg" alt={""} width={800} height={800}/>
    	</div> */}
		
		</main>
		</>
	);
}

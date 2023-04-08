import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
// import { UserContext } from "@/context";
import AuthContext from "../context/authContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AuthContext>
        <Component {...pageProps} />
      </AuthContext>
    </Layout>
  );
}

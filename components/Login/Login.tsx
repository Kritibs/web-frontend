import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: fields.email,
      password: fields.password,
      redirect: false,
    });
    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/shop");
    }
  };
  if (status !== "authenticated") {
    return (
      <div className="flex justify-center mt-10 mb-20">
        <div className="w-full max-w-md">
          <h1 className="px-8 text-gray-800 dark:text-gray-300">Welcome</h1>
          <form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-cyan-600 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="email"
                type="text"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-cyan-600 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-300 text-gray-800 mb-3 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="password"
                type="password"
                placeholder="******************"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
                // onClick={()=>signIn()}
              >
                Sign In
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/reset-password"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="mt-3 text-red-500">{error}</div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-300 mt-6">
              Don’t have an account yet?{" "}
              <Link
                href="/signup"
                className="font-medium text-blue-500 hover:underline text-md"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-blue-500 text-lg my-60 text-center">
        You are already logged in.
      </div>
    );
  }
}

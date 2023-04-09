import Link from "next/link";
import { useState } from "react";
import { post_fetcher } from "../../fetch/";
import { useRouter } from "next/router";
import useSWR from "swr";
import { signIn } from "next-auth/react";

interface User {
  email: string;
  password: string;
}
 

const UserLogin = ({ fields }: { fields: User }) => {
  const router = useRouter();
  const { data, error } = useSWR(
    ["token/", "application/json", JSON.stringify(fields)],
    ([url, content_type, data]) => post_fetcher(url, content_type, data)
  );

  if (error) return <p className="mt-5 text-red-500">{error.message}</p>;
  else if (!data) return <h1>I am loading</h1>;
  else {
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);

    router.push("/shop");
    return null;
  }
};

export default function Login() {
  const [startFetching, setStartFetching] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name==="email"){
      setEmail(e.target.value)
    }
    if(e.target.name==="password"){
      setPassword(e.target.value)
    }
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
const handleLogin = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault()
  console.log(email,password)
    const res= await signIn('credentials',
      { email: email, password: password, redirect:false}
    )
    console.log(res)
    if (res?.error){
      console.log(res.error)
  }
    
  }
  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    setStartFetching(true);

  };
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
              href="#"
            >
              Forgot Password?
            </Link>
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-300 mt-6">
            Don’t have an account yet?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-500 hover:underline text-md"
            >
              Sign up
            </Link>
          </p>

          {/* {startFetching && <UserLogin fields={fields} />} */}
        </form>
      </div>
    </div>
  );
}

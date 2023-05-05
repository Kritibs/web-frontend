import { useState } from "react";
import { patch_fetcher, post_fetcher } from "@/fetch";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function ResetPassword() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (Object.keys(router.query).length === 0)
    return <Email session={session} />;
  else return <SetPassword session={session} />;
}

function SetPassword({ session }: { session: any }) {
  const router = useRouter();

  const [fields, setFields] = useState({
    password: "",
    password2: "",
    token: router.query.token,
    uidb64: router.query.uidb64,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(fields);

    // const response = await fetcher(`accounts/new-password/${router.query.uidb64}/${router.query.token}`, "PATCH", 'application/json',JSON.stringify(fields));

    const response = await patch_fetcher(
      `accounts/new-password/${router.query.uidb64}/${router.query.token}`,
      "",
      JSON.stringify(fields),
      session
    );
    console.log(response);
    router.push("/");
  };

  return (
    <main className="">
      <div className="flex justify-center mt-10 mb-20">
        <div className="w-full max-w-md">
          <br></br>
          <h1 className="text-2xl text-center py-2 text-gray-800 dark:text-gray-300">Password Reset</h1>
          <h2 className="text-md text-center py-4 mb-4 text-gray-800 dark:text-gray-300">Please enter your details below 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block animate-bounce w-6 h-6 ml-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </h2>
          <form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                  className="block text-cyan-600 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
            <br></br>
            <label
                  className="block text-cyan-600 text-sm font-bold mb-2"
                  htmlFor="password2"
            >
                  Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="password2"
              id="password2"
              name="password2"
              placeholder="Password Confirmation"
              required
              onChange={handleChange}
            />
            <br></br>
            <div className="mt-1"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

function Email({ session }: { session: any }) {
  const router = useRouter();
  const [fields, setFields] = useState({
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const response = await post_fetcher(
      "accounts/request-password-reset/",
      'application/json',
      JSON.stringify(fields),
      session
    );
    console.log(response);
    // router.push("/reset-password");
  };
  return (
    <main className="">
      <div className="flex justify-center mt-10 mb-20">
        <div className="w-full max-w-md">
          <br></br>
          <h1 className="text-2xl text-center py-2 text-gray-800 dark:text-gray-300">Password Reset</h1>
          <h2 className="text-md text-center py-4 mb-4 text-gray-800 dark:text-gray-300">Please enter your details below   
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block animate-bounce w-6 h-6 ml-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </h2>
          <form className="px-8 pt-2 pb-8 mb-4">
            <div className="mb-4">
              <label
                  className="block text-cyan-600 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
              </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            </div>
            <br></br>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
              Send Reset Link 
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

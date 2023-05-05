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
      <div className="">
        <div className="">
          <br></br>
          <h1 className="">Password Reset</h1>
          <h2 className="">Please enter your details.</h2>
          <form>
            <input
              className=""
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <br></br>
            <input
              className=""
              type="password2"
              id="password2"
              name="password2"
              placeholder="Password Confirmation"
              required
              onChange={handleChange}
            />
            <br></br>
            <button className="" type="button" onClick={handleSubmit}>
              Send Reset Link
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
      <Link href="/">
        <h1 className="">Luther Marketplace</h1>
      </Link>
      <div className="">
        <div className="">
          <br></br>
          <h1 className="">Password Reset</h1>
          <h2 className="">Please enter your details.</h2>
          <form>
            <input
              className=""
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <br></br>
            <button className="" type="button" onClick={handleSubmit}>
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

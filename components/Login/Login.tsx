import Link from "next/link";

export default function Login() {
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="email"
              type="text"
              placeholder="Email"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-300 text-gray-800 mb-3 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
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
        </form>
      </div>
    </div>
  );
}

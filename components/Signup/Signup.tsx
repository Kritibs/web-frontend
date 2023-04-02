import { useState } from "react";
import { post_fetcher } from "../../fetch/";
import { useRouter } from "next/router";
import useSWR from "swr";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  class_status: string;
  password: string;
  password2: string;
}
const UserSignup = ({ fields, createUser }: { fields: User, createUser:boolean }) => {
  const router = useRouter();
  console.log(fields);
  const { data, error } = useSWR(
    ["accounts/", "application/json", JSON.stringify(fields)],
    ([url, content_type, data]) => post_fetcher(url, content_type, data)
  );

  if (error){
    return <p className="mt-5 text-red-500">Signup Error: Please try again.</p>;

  }
  else {
    if(createUser){
    router.push("/");

    }
    return null;
  }
};

let userDetails = {
  email: "",
  first_name: "",
  last_name: "",
  class_status: "student",
  password: "",
  password2: "",
};

var initializeErrors = {
  email: "",
  first_name: "",
  last_name: "",
  class_status: "",
  password: "",
  password2: "",
};

export default function Signup() {
  const [errors, setErrors] = useState(initializeErrors);
  const [createUser, setCreateUser] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [classStatus, setClassStatus] = useState("student");
  const [fields, setFields] = useState(userDetails);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name === "class_status") {
      setClassStatus(e.target.value);
    }

    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    var [bool, e] = validation();

  setCreateUser(bool);
  setSubmit(true);

    setErrors(e);
  };

  const validation = () => {
    let errors = initializeErrors;
    let activeItem = fields;
    let isValid = true;

    if (!activeItem["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email address.";
    }
    if (!activeItem["first_name"]) {
      isValid = false;
      errors["first_name"] = "Please enter your first name.";
    }
    if (!activeItem["last_name"]) {
      isValid = false;
      errors["last_name"] = "Please enter your last name.";
    }
    if (!activeItem["class_status"]) {
      isValid = false;
      errors["class_status"] = "Please enter your class status.";
    }
    if (!activeItem["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (
      typeof activeItem["password"] !== "undefined" &&
      typeof activeItem["password2"] !== "undefined"
    ) {
      if (activeItem["password"] !== activeItem["password2"]) {
        isValid = false;
        errors["password2"] = "Passwords don't match.";
      }
    }

    return [isValid, errors] as const;
  };


  return (
    <div className="flex justify-center mt-10 mb-20 p-5">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div>
              <label
                className="block text-cyan-600 text-sm font-bold mb-2"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="first_name"
                name="first_name"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
              />
              <p>{errors.first_name}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div>
              <label
                className="block text-cyan-600 text-sm font-bold mb-2"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
            <div>{errors.last_name}</div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <div>
              <label
                className="block text-cyan-600 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div>{errors.email}</div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <div>
              <label
                className="block text-cyan-600 text-sm font-bold mb-2"
                htmlFor="class_status"
              >
                Class Status
              </label>
              <div className="relative">
                <select
                  value={classStatus}
                  onChange={(event) => handleChange(event)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  id="class_status"
                  name="class_status"
                >
                  <option value="student">student</option>
                  <option value="faculty/staff">faculty/staff</option>
                  <option value="alumni">alumni</option>
                  <option value="parents">parents</option>
                  <option value="others">others</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-cyan-600">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>{errors.class_status}</div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <div>
              <label
                className="block text-cyan-600 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="password"
                name="password"
                type="password"
                placeholder="******************"
                onChange={handleChange}
              />
            </div>

            <div>{errors.password}</div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <div>
              <label
                className="block text-cyan-600 text-sm font-bold mb-2"
                htmlFor="password2"
              >
                Re-Enter Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="password2"
                name="password2"
                type="password"
                onChange={handleChange}
                placeholder="******************"
              />
            </div>
            <div>{errors.password2}</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-2">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
       {submit &&  <UserSignup fields={fields} createUser={createUser} />}
      </form>
    </div>
  );
}

import { useState } from "react";
import { post_fetcher } from "../../fetch/";
import { useRouter } from "next/router";
import useSWR from "swr";

export interface Product {
  product_name: string;
  product_picture: string;
  product_description: string;
  product_condition: string;
  product_action: string;
  product_price: number;
  product_date: string;
  product_author: number;
}

const AddProduct = ({ fields }: { fields: Product }) => {
  const router = useRouter();
  console.log(fields);
  const { data, error } = useSWR(
    ["products/", "application/json", JSON.stringify(fields)],
    ([url, content_type, data]) => post_fetcher(url, content_type, data)
  );

  if (error)
    return <p className="mt-5 text-red-500">Error: Please try again.</p>;
  else {
    // router.push("/shop");
    return null;
  }
};


var productDetails ={
  product_name: '',
  product_picture: '',
  product_description: '',
  product_condition: "NEW",
  product_action: "DONATE",
  product_price: 0,
  product_date: '',
  product_author: 1,
}

export default function AddProducts() {

  const [createProduct, setCreateProduct] = useState(false);
  const [productCondition, setProductCondition] = useState("NEW");
  const [productAction, setProductAction] = useState("DONATE");
  const [fields, setFields] = useState(productDetails);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "product_condtion") {
      setProductCondition(e.target.value);
    }
    if (e.target.name === "product_action") {
      setProductAction(e.target.value);
    }
    console.log(e.target.name, e.target.value)

    if (e.target.name=="product_picture"){
      setFields({
        ...fields,
        // [e.target.name]: e?.target?.files?[0],
      });
      }
        else{
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }
  };

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();

    setCreateProduct(true);
  };
  return (
    <div className="mb-20 p-5">
      <form>
        <div className="space-y-12">
          <div className="">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="product_picture"
                  className="block text-cyan-600 text-sm font-bold mb-2"
                >
                  Product Picture
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-200 dark:broder-gray-800 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 p-1"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file"
                          name="file"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="block text-cyan-600 text-sm font-bold">
                      PNG, JPG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-6">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="Product Author"
                  className="block text-cyan-600 text-sm font-bold mb-2"
                >
                  Product Author
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="product_author"
                    id="product_author"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="product_name"
                  className="block text-cyan-600 text-sm font-bold mb-2"
                >
                  Product name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="product_price"
                  className="block text-cyan-600 text-sm font-bold mb-2"
                >
                  Product Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="product_price"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="product_description"
                  className="block text-cyan-600 text-sm font-bold mb-2"
                >
                  Product Description
                </label>
                <div className="mt-2">
                  <textarea
                    name="product_description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              className="block text-cyan-600 text-sm font-bold mb-2"
              htmlFor="product_condition"
            >
              Product Condition
            </label>
            <div className="mt-2">
              <select
                value={productCondition}
                onChange={(event) => handleChange(event)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="product_condition"
                name="product_condition"
              >
                <option value="NEW">NEW</option>
                <option value="USED-GOOD">USED-GOOD</option>
                <option value="USED-ACCEPTABLE">USED-ACCEPTABLE</option>
              </select>
            </div>
          </div>
          <div>
            <label
              className="block text-cyan-600 text-sm font-bold mb-2"
              htmlFor="product_action"
            >
              Product Action
            </label>
            <div className="mt-2">
              <select
                  value={productAction}
                onChange={(event) => handleChange(event)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="product_action"
                name="product_action"
              >
                <option value="SELL">SELL</option>
                <option value="DONATE">DONATE</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="product_date"
              className="block text-cyan-600 text-sm font-bold mb-2"
            >
              Product Upload Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="product_date"
                id="product_date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 dark:text-gray-300 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {createProduct && <AddProduct fields={fields} />}
      </form>
    </div>
  );
}

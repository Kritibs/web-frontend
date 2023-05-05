import { useSession } from "next-auth/react";
import useSWR from "swr";

const baseURL = process.env.NEXT_PUBLIC_baseURL!;


export function post_fetcher(
  url: string,
  content_type: string,
  data: string | FormData,
  session:any
) {
// const { data: session, status } = useSession();
  const myHeaders = new Headers();
  if (session) {
    myHeaders.append("Authorization", "JWT " + session.user?.access);
  }
  myHeaders.append("Accept", "application/json");

  {
    content_type != ""
      ? myHeaders.append("Content-Type", content_type)
      : myHeaders;
  }

  return fetch(baseURL + url, {
    method: "POST",
    headers: myHeaders,
    body: data,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("An Error occured");
      } else {
        return res.json();
      }
    })
    .catch((error) => {
      throw error;
    });
}

export function patch_fetcher(
  url: string,
  content_type: string,
  data: string | FormData,
  session:any
) {
  const myHeaders = new Headers();
  if (session) {
    myHeaders.append("Authorization", "JWT " + session.user?.access);
  }
  {
    content_type != ""
      ? myHeaders.append("Content-Type", content_type)
      : myHeaders;
  }
  // myHeaders.append("Content-Type", content_type);
  return fetch(baseURL + url, {
    method: "PATCH",
    headers:myHeaders,
    // body: JSON.stringify(data),
    body: data,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function get_fetcher(url: string) {
  const finalURL = baseURL.concat(url);
  return fetch(finalURL, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function del_fetcher(url: string, session:any) {
  const myHeaders = new Headers();
  if (session) {
    myHeaders.append("Authorization", "JWT " + session.user?.access);
  }
  return fetch(baseURL + url, {
    method: "DELETE",
    headers: myHeaders,
  })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// export const fetchAll = (url:string, content_type:string, body:any)=>{

//   const { data, error } = useSWR([url, content_type, body],
//     ([url, content_type, data]) => post_fetcher(url, content_type, data)

//   );
//   if (error){

//   return ["error",error]
//   }
//   return ["data",data]

// }
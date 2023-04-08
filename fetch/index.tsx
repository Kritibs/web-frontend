const baseURL = process.env.NEXT_PUBLIC_baseURL!;

export function post_fetcher(
  url: string,
  content_type: string,
  data: string | FormData
) {
  const myHeaders = new Headers();
  {
    localStorage.getItem("access_token")
      ? myHeaders.append(
          "Authorization",
          "JWT " + localStorage.getItem("access_token")
        )
      : myHeaders;
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
  request_method: string,
  content_type: string,
  data: string
) {
  return fetch(baseURL + url, {
    method: request_method,
    // body: JSON.stringify(data),
    body: data,
    headers: {
      "Content-Type": content_type,
    },
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

export function del_fetcher(url: string) {
  const headers_data = {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : "",
    Accept: "application/json",
  };
  let headers = new Headers(headers_data);
  return fetch(baseURL + url, {
    method: "DELETE",
    headers: headers,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

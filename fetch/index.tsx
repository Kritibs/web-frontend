
const baseURL = process.env.baseURL;
export function fetcher(url:string, request_method:string, content_type:string ='', data:any){
	if (request_method=="GET"){
		return get_fetcher(url)
	}
	else if (request_method=="POST"){
		return post_fetcher(url,request_method, content_type, data)
	}
	else if (request_method=="PATCH"){
		return patch_fetcher(url,request_method, content_type, data)
	}
	else if (request_method=="DELETE"){
		return del_fetcher(url,request_method)
}
}

function post_fetcher (url:string,request_method:string,content_type:string, data:string){
	if (url=="login/"){
	return fetch(baseURL + url, {
		method: request_method,
		headers: 
			 content_type!='' ?
			{"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):'',
			"Accept": "application/json",
			"Content-Type": content_type,}:
			{
		"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):'',
			"Accept": "application/json",
		}
,	
		// body: JSON.stringify(data),
		body: data,
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
	}
	else{
	return fetch(baseURL + url, {
		method: request_method,
		headers: 
			 content_type!='' ?
			{"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):'',
			"Accept": "application/json",
			"Content-Type": content_type,}:
			{
		"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):'',
			"Accept": "application/json",
		}
,	
		// body: JSON.stringify(data),
		body: data,
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
	}
};



function patch_fetcher (url:string,request_method:string,content_type:string, data:string){
	return fetch(baseURL + url, {
		method: request_method,
		// body: JSON.stringify(data),
		body: data,
 headers: {
      'Content-Type': content_type
    },
			 
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
};

export function get_fetcher (url:string) {
	return fetch(baseURL + url, {
		method: 'GET',

	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});

};


function del_fetcher (url:string,request_method:string){
		const headers_data={ 
		"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):'',
			"Accept": "application/json",
		}
    let headers= new Headers(headers_data)
	return fetch(baseURL + url, {
		method: request_method,
        headers: headers
,	
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
};


import { BASE_URL, SERVICE_URL } from "@/shared/env/sharedENV";
var query = "?populate=*";
var getStaticFetch = async () => {
  return await fetch(BASE_URL + SERVICE_URL + query, {
    cache: "no-cache",
  }).then((res) => res.json());
};

export { getStaticFetch };

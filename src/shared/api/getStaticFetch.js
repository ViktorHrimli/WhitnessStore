import { BASE_URL, SERVICE_URL } from "@/shared/env/sharedENV";

var getStaticFetch = async () => {
  return await fetch(BASE_URL + SERVICE_URL).then((res) => res.json());
};

export { getStaticFetch };

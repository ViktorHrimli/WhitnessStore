import About from "@/libs/pages/components/about/about";
import Cards from "@/libs/pages/components/cards/cards";

import { getStaticFetch } from "@/shared/shared";

export default async function Home() {
  var { data } = await getStaticFetch();

  return (
    <>
      <Cards type={"designer"} data={data} />
      <About type={"designer"} />
    </>
  );
}

import About from "@/libs/components/about/about";
import Afford from "@/libs/components/afford/afford";
import Basket from "@/libs/components/basket/basket";
import Description from "@/libs/components/description/Description";
import Hero from "@/libs/components/hero/Hero";
import Price from "@/libs/components/price/price";
import Search from "@/libs/components/search/search";

export default async function Home() {
  return (
    <>
      {/* <StructureData data={seo["structuredData"]} /> */}
      <Basket />
      <Hero />
      <Description />
      <Search />
      <Price />
      <About />
      <Afford />
    </>
  );
}

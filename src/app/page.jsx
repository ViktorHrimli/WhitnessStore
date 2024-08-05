import About from "@/libs/components/about/about";
import Afford from "@/libs/components/afford/afford";
import Description from "@/libs/components/description/Description";
import Hero from "@/libs/components/hero/Hero";
import Price from "@/libs/components/price/price";
import Search from "@/libs/components/search/search";
import TextHome from "@/libs/pages/components/text-home/textHome";
import Wrapper from "@/libs/components/wrapper/Wrapper";

import { getStaticFetch } from "@/shared/shared";

var Home = async () => {
  var { data } = await getStaticFetch();

  return (
    <>
      <Hero />
      <Wrapper>
      <Description />
      <Search />
      <Price data={data} />
      </Wrapper>
      <About />
      <Afford />
      <TextHome />
    </>
  );
};

export default Home;

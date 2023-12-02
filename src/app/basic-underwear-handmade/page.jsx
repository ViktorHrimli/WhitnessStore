import About from "@/libs/pages/components/about/about";
import Cards from "@/libs/pages/components/cards/cards";

export default async function Home() {
  return (
    <>
      <Cards type={"basic"} />
      <About type={"basic"} />
    </>
  );
}
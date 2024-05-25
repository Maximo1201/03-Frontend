import ProductComments from "@/views/ProductComments";
import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import ProductHero from "../views/ProductHero";
import ProductHowItWorks from "../views/ProductHowItWorks";
import ProductPacks from "../views/ProductPacks";
import ProductValues from "../views/ProductValues";

export default function Home() {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductPacks />
      <ProductHowItWorks />
      {/* <ProductCTA /> */}
      <ProductComments />
      <AppFooter />
    </>
  )
}

import ProductComments from "@/views/ProductComments";
import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import ProductHero from "../views/ProductHero";
import ProductHowItWorks from "../views/ProductHowItWorks";
import ProductPacks from "../views/ProductPacks";
import ComienzaTuRuta from "./ComienzaTuRuta";

export default function Home() {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <ComienzaTuRuta />
      {/* <ProductValues /> */}
      <ProductPacks />
      <ProductHowItWorks />
      {/* <ProductCTA /> */}
      <ProductComments />
      <AppFooter />
    </>
  )
}

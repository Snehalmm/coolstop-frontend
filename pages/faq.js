import Breadcrumbs from "../components/Common/Breadcrumbs";
import Features from "../components/Home/Features";
import FaqDetails from "../components/Product/FaqDetails";
import { faqBreadcrums } from "../utils/data/breadcrumbs";
import { NextSeo } from "next-seo";

const faq = () => {
  return (
    <>
      <NextSeo title="FAQ" description="Some content " />
      <Breadcrumbs data={faqBreadcrums} />
      <FaqDetails />
      <Features />
    </>
  );
};

export default faq;

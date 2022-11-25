import Breadcrumbs from '../components/Common/Breadcrumbs';
import Features from '../components/Home/Features';
import FaqDetails from '../components/Product/FaqDetails';
import { faqBreadcrums } from '../utils/data/breadcrumbs';

const faq = () => {
  return (
    <>
      <Breadcrumbs data={faqBreadcrums} />
      <FaqDetails />
      <Features />
    </>
  );
};

export default faq;

import Features from '../components/Home/Features';
import PaymentDetails from '../components/Product/PaymentDetails';
import { paymentMethodBreadcrums } from '../utils/data/breadcrumbs';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import ProgressBar from '../components/Common/ProgressBar';

const PaymentMethod = () => {
  const progressBarData = [
    {
      id: 1,
      title: 'Delvery',
      status: 'done',
    },
    {
      id: 2,
      title: 'Payment',
      status: 'active',
    },
    {
      id: 3,
      title: 'Confirmation',
      status: 'todo',
    },
  ];
  return (
    <>
      <Breadcrumbs data={paymentMethodBreadcrums} />
      <ProgressBar data={progressBarData} />
      <PaymentDetails />
      <Features />
    </>
  );
};

export default PaymentMethod;

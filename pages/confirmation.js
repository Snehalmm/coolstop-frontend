import ProgressBar from '../components/common/ProgressBar';

import PaymentSuccess from '../components/common/PaymentSuccess';

const Confirmation = () => {
  const progressBarData = [
    {
      id: 1,
      title: 'Delvery',
      status: 'done',
    },
    {
      id: 2,
      title: 'Payment',
      status: 'done',
    },
    {
      id: 3,
      title: 'Confirmation',
      status: 'done',
    },
  ];
  return (
    <>
      <ProgressBar data={progressBarData} />
      <PaymentSuccess />
    </>
  );
};

export default Confirmation;

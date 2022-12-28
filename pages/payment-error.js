import Image from 'next/image';
import Link from 'next/link';

const Error = () => {
  return (
    <>
      <div className="success-wrapp">
        <div className="success-box">
          <span>
            <Image
              src="/images/cross-sym.png"
              height={60}
              width={60}
              alt="success-mark"
            ></Image>
          </span>
          <div>
            <p className="success-text">Payment Failed</p>
            <p className="success-info">
              <span>
                Unable to process the payment becuase invalid data was supplied
                with the transaction.
              </span>
            </p>

            <Link href="/payment-method" className="button" type="submit">
              {' '}
              Retry Again
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;

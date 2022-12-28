import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Success = () => {
  const orderDetails = useSelector((state) => {
    return state.cart.orderDetails;
  });

  return (
    <>
      <div className="success-wrapp">
        <div className="success-box">
          <span>
            <Image
              src="/images/success-green-check.svg"
              height={100}
              width={100}
              alt="success-mark"
            ></Image>
          </span>
          <div>
            <p className="success-text">
              you've successfully placed the order{" "}
            </p>
            <p className="success-info">
              Thank You for ordering ,
              <span>
                We received your order and will begin processing it soon.
              </span>
              {/* Your order information appears below.
              white_check_mark eyes raised_hands 11:55. */}
            </p>
            <p style={{ textTransform: "uppercase" }}>
              YOUR ORDER ID: {orderDetails?.data?.id}
            </p>
          </div>

          <div>
            <Link href="/pending-orders" className="button" type="submit">
              {" "}
              {/* GO TO HOME */}
              GO TO ORDERS
            </Link>
          </div>
          <div>
            <Link href="/" className="button" type="submit">
              {" "}
              {/* GO TO HOME */}
              GO TO HOME
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;

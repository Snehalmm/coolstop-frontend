import Features from "../components/Home/Features";
import { cartBreadcrums } from "../utils/data/breadcrumbs";
import ShoppingCart from "../components/Product/ShoppingCart";
import Breadcrumbs from "../components/common/Breadcrumbs";

const Cart = () => {
  return (
    <>
      <Breadcrumbs data={cartBreadcrums} />
      <ShoppingCart />
      <Features />
    </>
  );
};

export default Cart;

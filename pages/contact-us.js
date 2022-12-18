import Breadcrumbs from "../components/Common/Breadcrumbs";
import { ContactUsBreadCrums } from "../utils/data/breadcrumbs";

const ContactUs = () => {
  return (
    <>
      <Breadcrumbs data={ContactUsBreadCrums} />
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Coming soon Contact us
      </h1>
    </>
  );
};

export default ContactUs;

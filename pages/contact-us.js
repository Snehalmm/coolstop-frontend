import Breadcrumbs from "../components/Common/Breadcrumbs";
import { contactUsBreadCrums } from "../utils/data/breadcrumbs";

const ContactUs = () => {
  return (
    <>
      <Breadcrumbs data={contactUsBreadCrums} />
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Coming soon Contact us
      </h1>
    </>
  );
};

export default ContactUs;

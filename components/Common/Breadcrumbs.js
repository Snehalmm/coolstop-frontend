import Link from "next/link";

const Breadcrumbs = ({ data }) => {
  return (
    <>
      <section>
        <div className="bread-bg">
          <div className="grid-container">
            <ul className="breadcrumbs">
              {data?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumbs;

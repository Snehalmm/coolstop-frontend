const ActivePage = () => {
  return (
    <>
      <section>
        <div className="bread-bg">
          <div className="grid-container">
            <ul className="breadcrumbs">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="current">
                <a href="#">Checkout</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivePage;

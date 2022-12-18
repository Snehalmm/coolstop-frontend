const ProgressBar = ({ data }) => {
  return (
    <>
      <section>
        <div className="bw-cart-heading">
          <h1>Checkout Securely</h1>
        </div>

        <div className="row">
          <div className="large-12 columns">
            <ol id="progress-bar">
              {data.map((item, index) => (
                <li className={`step-${item.status}`} key={index}>
                  {item.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgressBar;

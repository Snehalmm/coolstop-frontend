const AboutProducts = () => {
  return (
    <>
      <section className="grid-container margin-top-2">
        <div className="sec-cards">
          <div className="s-card">
            <div className="card-title">
              <h3>VRV Technology</h3>
              <span>Variable Refrigerant Volume</span>
            </div>
            <div className="card-image">
              <img src="./images/vrv-tech.jpg" alt="VRV Technology" />
            </div>
            <div className="card-text">
              <p>
                Daikin's next-generation air purifiers helps in keeping air
                pollutants at bay with its latest technology, thus ensuring that
                you and your dear ones breathe the freshest and healthiest air
                possible.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="s-card">
            <div className="card-title">
              <h3>Air Purifir</h3>
              <span>Next Generation Air Purifiers</span>
            </div>
            <div className="card-image">
              <img src="./images/air-purifire.jpg" alt="Air Purifiers" />
            </div>
            <div className="card-text">
              <p>
                Next-generation air purifiers helps in keeping air pollutants at
                bay with its latest technology, thus ensuring that you and your
                dear ones breathe the freshest and healthiest air possible.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="s-card">
            <div className="card-title">
              <h3>Anti-Corrision Treatment</h3>
              <span>Rust Proofing Treatment</span>
            </div>
            <div className="card-image">
              <img src="./images/anti-corrision.jpg" alt="VRV Technology" />
            </div>
            <div className="card-text">
              <p>
                Corrosion is when a metal deteriorates due to chemical
                reactions. Unprotected metals have the chance to get corroded
                quickly, as compared to the ones that are on guard.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProducts;

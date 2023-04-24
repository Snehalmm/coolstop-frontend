import { useState } from "react";

const Reviews = ({ reviews }) => {
  const [reviewsData, setreviewsData] = useState(reviews);

  return (
    <>
      <div className="black-bg-rev">
        <section className="grid-container">
          <div className="reviews-block">
            <div className="revblockHeading">
              {/* <h4>What Our Customers Are Saying</h4> */}
              <h4>
                Customer <span className="cm-line-break">Reviews</span>
              </h4>
            </div>
            {reviewsData !== null &&
              reviewsData.data.map((item, index) => {
                return (
                  item.attributes.showOnHome && (
                    <div className="revblock" key={index}>
                      <span>{item.attributes.name} : </span>
                      <p>{item.attributes.reviewComment}</p>
                    </div>
                  )
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Reviews;

import { useState } from "react";

const Reviews = ({ reviews }) => {
  const [reviewsData, setreviewsData] = useState(reviews);

  return (
    <>
      <div className="black-bg-rev">
        <section className="grid-container">
          <div className="reviews-block">
            <div className="revblock">
              <h4>What Our Customers Are Saying</h4>
            </div>
            {reviewsData !== null &&
              reviewsData.data.map((item, index) => {
                return (
                  item.attributes.showOnHome && (
                    <div className="revblock" key={index}>
                      <p>{item.attributes.reviewComment}</p>
                      <span>{item.attributes.name}</span>
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

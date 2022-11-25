import useGetApi from "../../utils/useGetApi";
import { useEffect } from "react";
import { Path } from "../../utils/apiService";

const Reviews = () => {
  const {
    isLoading: reviewsLoading,
    error: reviewsError,
    data: reviewsData,
    sendHTTPGetRequest: reviewsAPI,
  } = useGetApi();

  // Function that invokes API call
  const getReviews = () => {
    reviewsAPI(Path.reviews);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <div className="black-bg-rev">
        <section className="grid-container">
          <div className="reviews-block">
            <div className="revblock">
              <h4>What Our Customers Are Saying</h4>
            </div>
            {reviewsData !== null &&
              reviewsData.data.map((item, index) => (
                <div className="revblock" key={index}>
                  <p>{item.attributes.reviewComment}</p>
                  <span>{item.attributes.name}</span>
                </div>
              ))}

            {/* <div className="revblock" key={reviewIndex}>
              <p>{reviewItem.reviewComment}</p>
              <span>{reviewItem.name}</span>
            </div> */}

            {/* <div className="revblock">
              <p>
                “The air conditioner is working well, no problems at all. It is
                very easy to install. It cools down the living area very well.”
              </p>
              <span>Avinash T.</span>
            </div>
            <div className="revblock">
              <p>
                “The product was delivered to me very quickly and at no charge.
                The product is doing it's job well and was easy to install, with
                great instructions and support”
              </p>
              <span>Ganga Sharma</span>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;

import { useState } from "react";
import MyAccountList from "./MyAccountList";

const FaqDetails = () => {
  const [isSlide, SetIsSlide] = useState(null);

  const handleClick = (Id) => {
    if (Id == isSlide) {
      SetIsSlide(null);
    } else {
      SetIsSlide(Id);
    }
  };
  return (
    <>
      <section className="grid-container">
        <div className="ac-page-lyt">
          <MyAccountList />
          <div className="ac-page-dash-tit">
            <h3 className="dash-tit">FAQs</h3>
          </div>
          <div className="ac-page-addinfo">
            <h3 className="accinfo">Delivery &amp; Returns</h3>
            <section className="faqs">
              <ul
                className="accordion"
                data-accordion=""
                data-allow-all-closed="true"
                role="tablist"
                data-n="gdbnmo-n"
              >
                <li
                  className={`accordion-item ${
                    isSlide === "lkqjjn-accordion-label" ? "is-active" : ""
                  }`}
                  // className="accordion-item"
                  data-accordion-item=""
                  onClick={() => handleClick("lkqjjn-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="lkqjjn-accordion"
                    role="tab"
                    id="lkqjjn-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Can I delay my delivery?{" "}
                  </a>
                  {/* {isSlide ? ( */}
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="lkqjjn-accordion-label"
                    aria-hidden="true"
                    style={{
                      display:
                        isSlide === "lkqjjn-accordion-label" ? "block" : "none",
                    }}
                    // style={{ display: "block" }}
                    id="lkqjjn-accordion"
                  >
                    You can request to delay delivery of your order by adding a
                    note at the checkout.
                    <span className="cm-line-break">
                      If you have not notified us at checkout, and your order is
                      still "Pending" then it is still possible for you to
                      request to delay
                    </span>
                    delivery by emailing us at{" "}
                    <a href="mailto:orders@coolstop.in">orders@coolstop.in</a>.
                    <span className="cm-line-break">
                      If your order is "Processing" then we will need to contact
                      the relevant persons to confirm your order can be delayed
                      to
                    </span>
                    <span className="cm-line-break">
                      the date you require. If your order is already out on the
                      road to be delivered, it will not be possible to delay
                      your order,
                    </span>
                    as you have not given us enough time to organise the delay
                    with the transport office, or with the supplier of the
                    delivery.
                    <span className="cm-line-break">
                      Please note that we can only delay delivery up to 5
                      working days after the suggested lead time.
                    </span>
                    If you require more information, please view our
                    <a href="#">Delivery Information</a>
                  </div>
                  {/* ) : null} */}
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "rjfmja-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("rjfmja-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="rjfmja-accordion"
                    role="tab"
                    id="rjfmja-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Why can't I order this product?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="rjfmja-accordion-label"
                    aria-hidden="true"
                    id="rjfmja-accordion"
                    style={{
                      display:
                        isSlide === "rjfmja-accordion-label" ? "block" : "none",
                    }}
                  >
                    Some items are restricted to delivery within our local area.
                    Delivery areas are broken down into zones, and only products
                    available in your area can be added to your trolley. For
                    more information view our{" "}
                    <a href="#">delivery information</a>
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "thnid8-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("thnid8-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="thnid8-accordion"
                    role="tab"
                    id="thnid8-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    My order is due today. How can I find out what time it will
                    arrive?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="thnid8-accordion-label"
                    aria-hidden="true"
                    id="thnid8-accordion"
                    style={{
                      display:
                        isSlide === "thnid8-accordion-label" ? "block" : "none",
                    }}
                  >
                    Most of our deliveries are on an 8am – 5pm delivery service
                    with no confirmed ETA (Estimated Time of Arrival). Usually,
                    our external couriers will contact you approx. 30 minutes
                    before arriving at the delivery location. Orders that are
                    being delivered in Zone 1 by our own vehicles will be given
                    a morning or afternoon time slot, which is confirmed by text
                    message within 24 hours of delivery. Our suppliers work on
                    an all-day service up until 6pm and do not give out time
                    frames. If you are expecting a delivery, you can contact our
                    Online Customer Support Team to see if they can obtain an
                    ETA for your order.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "t1yfqc-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("t1yfqc-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="t1yfqc-accordion"
                    role="tab"
                    id="t1yfqc-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    I was delivered the wrong product for my online order. When
                    can the correct product be sent?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="t1yfqc-accordion-label"
                    aria-hidden="true"
                    id="t1yfqc-accordion"
                    style={{
                      display:
                        isSlide === "t1yfqc-accordion-label" ? "block" : "none",
                    }}
                  >
                    If you have received an incorrect product and you believe it
                    is our mistake, you must email the Online Customer Support
                    Team at{" "}
                    <a href="mailto:orders@coolstop.in">orders@coolstop.in</a>
                    on the day of delivery with a picture of the wrong product
                    you have received. Our Online Customer Support Team will
                    always ask for a picture. This is so that your picture can
                    be shown to the dispatch department or suppliers to prove
                    that the wrong product has been picked and sent, and to
                    arrange adequate collection facilities. Sending photographic
                    evidence of the incorrectly delivered product(s) dispels any
                    doubt and allows us to provide a swift resolution. Once this
                    has been investigated, we will raise a collection for the
                    incorrect product and arrange re-delivery of the correct
                    product, free of charge. Our Online Customer Support Team
                    will keep you up to date with collection and re-delivery
                    dates. Usually, this will be on the same day but may not be
                    at the same time depending on the delivery company.
                  </div>
                </li>
              </ul>
            </section>
            <h3 className="accinfo">Online Orders</h3>
            <section className="faqs">
              <ul
                className="accordion"
                data-accordion=""
                data-allow-all-closed="true"
                role="tablist"
                data-n="2xfuec-n"
              >
                <li
                  className={`accordion-item ${
                    isSlide === "u46oq3-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("u46oq3-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="u46oq3-accordion"
                    role="tab"
                    id="u46oq3-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Can I add to my existing online order?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="u46oq3-accordion-label"
                    aria-hidden="true"
                    id="u46oq3-accordion"
                    style={{
                      display:
                        isSlide === "u46oq3-accordion-label" ? "block" : "none",
                    }}
                  >
                    We are not able to add anything to an existing order. If you
                    have missed something from the order, you would need to
                    place another order. Another option would be to cancel the
                    existing order, provided it has not been sent out already,
                    and place a new order which includes the item(s) missed. To
                    do this, you would need to contact our{" "}
                    <a href="#">Online Customer Support Team.</a>
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "kmyxr6-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("kmyxr6-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="kmyxr6-accordion"
                    role="tab"
                    id="kmyxr6-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    How do I obtain an invoice for my order?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="kmyxr6-accordion-label"
                    aria-hidden="true"
                    id="kmyxr6-accordion"
                    style={{
                      display:
                        isSlide === "kmyxr6-accordion-label" ? "block" : "none",
                    }}
                  >
                    For an online order, you can obtain the invoice by logging
                    into your online account, clicking on ‘My Orders’. Here you
                    will be able to select which order you require the invoice
                    for. You can also email our Online Customer Support Team via{" "}
                    <a href="mailto:Orders@coolstop.in">Orders@coolstop.in</a>
                    to request for the invoice to be emailed. Please Note: An
                    invoice can only be sent to the email address that is
                    registered to the online account To obtain an invoice for
                    goods purchased in branch, you would need to contact that
                    branch directly. You can contact them by using the contact
                    details.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "xatcsl-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("xatcsl-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="xatcsl-accordion"
                    role="tab"
                    id="xatcsl-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Charges have been applied to my order. What happens next?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="xatcsl-accordion-label"
                    aria-hidden="true"
                    id="xatcsl-accordion"
                    style={{
                      display:
                        isSlide === "xatcsl-accordion-label" ? "block" : "none",
                    }}
                  >
                    Below is a short list of reasons why charges have been
                    applied to your order:
                    <ul>
                      <li>
                        You wish to cancel the order after the order has been
                        dispatched.
                      </li>
                      <li>
                        You have been informed of a delivery date however,
                        nobody was present at the address to accept delivery.
                      </li>
                      <li>
                        The correct items have been dispatched but delivery was
                        refused.
                      </li>
                      <li>
                        You ordered incorrect item(s) and wish for us to arrange
                        collection.
                      </li>
                      <li>
                        <span>
                          We are unable to deliver the goods because you have
                          not provided appropriate instructions or notification
                          of access restrictions.
                        </span>
                      </li>
                    </ul>
                    Charges will either be deducted from your refund, or a
                    customised link will be sent to you to make payment through
                    our website.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "w2yf96-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("w2yf96-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="w2yf96-accordion"
                    role="tab"
                    id="w2yf96-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Part of my order is out of stock. When will it be back in
                    stock?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="w2yf96-accordion-label"
                    aria-hidden="true"
                    id="w2yf96-accordion"
                    style={{
                      display:
                        isSlide === "w2yf96-accordion-label" ? "block" : "none",
                    }}
                  >
                    If a product that you have ordered suddenly becomes out of
                    stock, you will receive a message advising you of this. This
                    message should contain a date or an estimated time frame for
                    when the stock is due back in. Though we have a live stock
                    feed on our website, there may still be a few occasions
                    where stock sells out quickly. If a product that you wish to
                    order is displayed as 'Out Of Stock' on the website, the
                    option to add the product to your trolley is removed. This
                    will only be changed once the product is confirmed to be
                    back in stock again. You can check stock levels and find out
                    when stock may be due back in by emailing our Online
                    Customer Support Team at{" "}
                    <a href="mailto:orders@coolstop.in">orders@coolstop.in</a>
                    or calling +0116 212 3456.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "82a4v9-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("82a4v9-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="82a4v9-accordion"
                    role="tab"
                    id="82a4v9-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    I'm having trouble paying online, how can I place my order?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="82a4v9-accordion-label"
                    aria-hidden="true"
                    id="82a4v9-accordion"
                    style={{
                      display:
                        isSlide === "82a4v9-accordion-label" ? "block" : "none",
                    }}
                  >
                    We accept payment online via Credit/Debit card and PayPal.
                    Payments are verified online by a 3-D Secure system. If your
                    card is not 3-D Secure, this could be why your payment has
                    not been accepted. *Please note, we currently do not accept
                    payment by American Express online. American Express can be
                    used in all of our branches. If you continue to have
                    problems placing an order, please try using a different
                    payment card or alternatively, you can use PayPal as a
                    guest.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "712v07-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("712v07-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="712v07-accordion"
                    role="tab"
                    id="712v07-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Do you offer discounts?
                  </a>
                  <div
                    className="accordion-content slide-up"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="712v07-accordion-label"
                    aria-hidden="true"
                    id="712v07-accordion"
                    style={{
                      display:
                        isSlide === "712v07-accordion-label" ? "block" : "none",
                    }}
                  >
                    Our prices displayed online have already been discounted to
                    a trade rate. We aim to keep our prices as low as possible
                    for our customers, and will always offer the best price
                    available at the time. We currently do not offer any
                    discount codes online. The only additional discount we will
                    offer online will be for orders purchased in bulk or large
                    scale projects. If you wish to enquire about this, our
                    estimating team will be happy to help. They can put together
                    a quotation and send it to you for review within 24-48
                    hours.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "4v7a5z-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("4v7a5z-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="4v7a5z-accordion"
                    role="tab"
                    id="4v7a5z-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    What stage is my order at?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="4v7a5z-accordion-label"
                    aria-hidden="true"
                    id="4v7a5z-accordion"
                    style={{
                      display:
                        isSlide === "4v7a5z-accordion-label" ? "block" : "none",
                    }}
                  >
                    You can check the status of your order by logging into your
                    online account. Your status will show either: PENDING,
                    PROCESSING, HOLD, COMPLETED or CLOSED. Here is a breakdown
                    of each one and what they mean:
                    <ul>
                      <li>
                        PENDING - This means that your order has been accepted
                        and is due to be processed by our E-Commerce team. This
                        is the best time to call us if you wish to cancel or
                        remove any item(s) from the order.&nbsp;
                      </li>
                      <li>
                        PROCESSING - This means that your order has now been
                        picked up by our E-commerce team who have sent your
                        order to the appropriate department to be picked and
                        packed, or it has been sent to one of our suppliers who
                        will deliver your order direct. At this stage, you will
                        receive email notification regarding your order.
                      </li>
                      <li>
                        HOLD - This means that your order is being delayed and
                        we are awaiting a response from you. An email will have
                        been sent to you explaining why your order is on hold.
                        Once you respond to this we can then update the status
                        of your order.
                      </li>
                      <li>
                        COMPLETED - This means that your order should have been
                        delivered successfully to you. Your order will remain in
                        our online archives for the next 6 years.{" "}
                      </li>
                      <li>
                        CLOSED - This means that your order has been fully
                        refunded. You order will also remain in our online
                        archives, but no further action will take place
                        regarding your order.{" "}
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "juua54-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("juua54-accordion-label")}
                >
                  <a
                    className="accordion-title"
                    aria-controls="juua54-accordion"
                    role="tab"
                    id="juua54-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Can I place an order over the phone?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="juua54-accordion-label"
                    aria-hidden="true"
                    id="juua54-accordion"
                    style={{
                      display:
                        isSlide === "juua54-accordion-label" ? "block" : "none",
                    }}
                  >
                    Currently, our Online Customer Support Team cannot take an
                    order over the phone. You can place an order with a member
                    of the branch sale team at a local branch to yourself. To do
                    this, you will need to call the branch directly.
                  </div>
                </li>
              </ul>
            </section>
            <h3 className="accinfo">Products &amp; Stock</h3>
            <section className="faqs">
              <ul
                className="accordion"
                data-accordion=""
                data-allow-all-closed="true"
                role="tablist"
                data-n="mc3ywm-n"
              >
                <li
                  className={`accordion-item ${
                    isSlide === "gfyp0q-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("gfyp0q-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="gfyp0q-accordion"
                    role="tab"
                    id="gfyp0q-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Do you offer installation of goods and take the old one
                    away?
                  </a>
                  <div
                    className="accordion-content slide-up"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="gfyp0q-accordion-label"
                    aria-hidden="true"
                    id="gfyp0q-accordion"
                    style={{
                      display:
                        isSlide === "gfyp0q-accordion-label" ? "block" : "none",
                    }}
                  >
                    No, as a builder’s merchants, we only supply the goods you
                    have purchased. We recommend that the installation of goods
                    is completed by a qualified trades person.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "v5ufbt-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("v5ufbt-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="v5ufbt-accordion"
                    role="tab"
                    id="v5ufbt-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Where on the website can I find technical information on a
                    product?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="v5ufbt-accordion-label"
                    aria-hidden="true"
                    id="v5ufbt-accordion"
                    style={{
                      display:
                        isSlide === "gfyp0q-accordion-label" ? "block" : "none",
                    }}
                  >
                    Where available, we have product data sheets and
                    specifications attached on our product pages. If you require
                    further technical information regarding a product listed on
                    our website, it is advised to contact the manufacturer. If
                    you are unsure, you can request for manufacturer contact
                    details by emailing us at{" "}
                    <a href="mailto:orders@coolstop.in">orders@coolstop.in</a>.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "zr2o5f-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("zr2o5f-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="zr2o5f-accordion"
                    role="tab"
                    id="zr2o5f-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Can I check stock availability of a product?
                  </a>
                  <div
                    className="accordion-content slide-up"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="zr2o5f-accordion-label"
                    aria-hidden="true"
                    id="zr2o5f-accordion"
                    style={{
                      display:
                        isSlide === "zr2o5f-accordion-label" ? "block" : "none",
                    }}
                  >
                    All products will display stock availability online, shown
                    as either "In Stock" or "Out of Stock". If you wish to check
                    stock levels of a certain product, please contact our Online
                    Customer Support Team on +0116 212 3456, or email us at{" "}
                    <a href="mailto:info@coolstop.in">info@coolstop.in</a>.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "lkiv3u-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("lkiv3u-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="lkiv3u-accordion"
                    role="tab"
                    id="lkiv3u-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    My product is out of stock, when will it be available?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="lkiv3u-accordion-label"
                    aria-hidden="true"
                    id="lkiv3u-accordion"
                    style={{
                      display:
                        isSlide === "lkiv3u-accordion-label" ? "block" : "none",
                    }}
                  >
                    To find out when an item is due back in stock, you can
                    contact our Online Support Team by emailing{" "}
                    <a href="mailto:orders@coolstop.in">orders@coolstop.in</a>
                    or calling us on +0116 212 3456.
                  </div>
                </li>
              </ul>
            </section>
            <h3 className="accinfo">Company &amp; Online Accounts</h3>
            <section className="faqs">
              <ul
                className="accordion"
                data-accordion=""
                data-allow-all-closed="true"
                role="tablist"
                data-n="9pst6w-n"
              >
                <li
                  className={`accordion-item ${
                    isSlide === "n7wnho-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("n7wnho-accordion-label")}
                >
                  <a
                    className="accordion-title"
                    aria-controls="n7wnho-accordion"
                    role="tab"
                    id="n7wnho-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    Am I able to get a quotation?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="n7wnho-accordion-label"
                    aria-hidden="true"
                    id="n7wnho-accordion"
                    style={{
                      display:
                        isSlide === "n7wnho-accordion-label" ? "block" : "none",
                    }}
                  >
                    To obtain a quotation, email our Online Sales Team via{" "}
                    <a href="mailto:estimates@coolstop.in">
                      estimates@coolstop.in
                    </a>
                    . You will need to provide the products, quantities and
                    delivery information for a full quote. All quotes last 30
                    days and should be provided within 1 - 2 working days.
                  </div>
                </li>
                <li
                  className={`accordion-item ${
                    isSlide === "1pry6t-accordion-label" ? "is-active" : ""
                  }`}
                  data-accordion-item=""
                  onClick={() => handleClick("1pry6t-accordion-label")}
                >
                  <a
                    // href="#"
                    className="accordion-title"
                    aria-controls="1pry6t-accordion"
                    role="tab"
                    id="1pry6t-accordion-label"
                    aria-expanded="false"
                    aria-selected="false"
                  >
                    How do I create an online account?
                  </a>
                  <div
                    className="accordion-content"
                    data-tab-content=""
                    role="tabpanel"
                    aria-labelledby="1pry6t-accordion-label"
                    aria-hidden="true"
                    id="1pry6t-accordion"
                    style={{
                      display:
                        isSlide === "1pry6t-accordion-label" ? "block" : "none",
                    }}
                  >
                    To create an online account, click on on the following{" "}
                    <a href="#">login/Sign Up</a>
                    This is located in the top right-hand corner of the website.
                    This will then open a new page. On the right-hand side,
                    there is a ‘Create an Account’ button. Click this, and this
                    will take you through the process of creating an online
                    account. Alternatively, <a href="#">Click Here</a>
                    and it will take you to the start of the sign-up page.
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqDetails;

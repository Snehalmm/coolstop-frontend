import React from 'react';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import Features from '../components/Home/Features';
import MyAccountList from '../components/Product/MyAccountList';
import { trackOrderBreadcrums } from '../utils/data/breadcrumbs';

const trackOrders = () => {
  return (
    <>
      <Breadcrumbs data={trackOrderBreadcrums} />

      <section className="grid-container">
        <div className="ac-page-lyt">
          <MyAccountList />

          <div className="ac-page-dash-tit">
            <h3 className="dash-tit">Track Your Order</h3>
          </div>

          <div className="prev-ord-lis">
            <table className="responsive-card-table unstriped">
              <thead>
                <tr>
                  <th className="text-center">No Tracking No. Found</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
};

export default trackOrders;

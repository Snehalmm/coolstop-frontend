import React from 'react';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import Features from '../components/Home/Features';
import AccountInfo from '../components/Product/AccountInfo';
import MyAccountList from '../components/Product/MyAccountList';
import { myAccountBreadcrums } from '../utils/data/breadcrumbs';

const my_account = () => {
  return (
    <>
      <div>
        <Breadcrumbs data={myAccountBreadcrums} />
        <AccountInfo />
        <Features />
      </div>
    </>
  );
};

export default my_account;

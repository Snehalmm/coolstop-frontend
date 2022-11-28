import Features from '../components/Home/Features';
import Brand from '../components/Home/Brand';
import Banner from '../components/Common/Banner';
import TopSeller from '../components/Home/TopSeller';
import Reviews from '../components/Home/Reviews';
import Blogs from '../components/Common/Blogs';
import { useEffect } from 'react';
import useGetApi from '../utils/useGetApi';
import { Path } from '../utils/apiService';
import { userActions } from '../stores/slices/userSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

export default function Home() {
  const dispatch = useDispatch();

  const {
    isLoading: HomeProductsLoading,
    error: HomeProductsError,
    data: HomeProductsData,
    sendHTTPGetRequest: HomeProductsApi,
  } = useGetApi();

  useEffect(() => {
    HomeProductsApi(Path.home, HomeProductsData);

    const getUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (getUserDetails) {
      dispatch(userActions.adduser(getUserDetails));
    }
  }, []);

  return (
    <>
      <div>
        {HomeProductsData !== null && (
          <>
            <Banner data={HomeProductsData.data.attributes.homeBanner} />
            <TopSeller
              data={HomeProductsData.data.attributes.topSellersProducts.data}
            />
            <Blogs data={HomeProductsData.data.attributes.blogs} />
            <Brand
              data={HomeProductsData.data.attributes.brands_we_offers.data}
            />
            <Features />
            <Reviews />
          </>
        )}
      </div>
    </>
  );
}

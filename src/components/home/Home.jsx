import { useEffect } from 'react';

// components
import NavBar from './NavBar.jsx';
import Banner from './Banner.jsx';
import Slide from './Slide.jsx';
import MidSlide from './MidSlide.jsx';
import MidSection from './MidSection.jsx';

import { Box, styled } from '@mui/material';

import { getProducts } from '../../redux/actions/productActions.js';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
  padding: 10px 10px;
  background: rgba(249, 242, 242, 1);
`;

const Home = () => {

  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // -------------------------------------------
  //  Create 1 product per category (Deal of Day)
  // -------------------------------------------
  const dealProducts = [];
  const categoryTracker = new Set();

  products?.forEach(p => {
    if (!categoryTracker.has(p.category)) {
      dealProducts.push(p);
      categoryTracker.add(p.category);
    }
  });

  // limit to 5 items
  const dealOfDay = dealProducts.slice(0, 5);

  return (
    <>
      <NavBar />

      <Component>
        <Banner />

        {/*  Only 1 product per category */}
        <MidSlide
          products={dealOfDay}
          title="Deal of the Day"
          timer={true}
        />

        <MidSection />

        {/*  Normal slides but NOT all products */}
        <Slide
          products={products.filter(p => p.category === "tshirts")}
          title="Style Buzz"
          timer={false}
        />

        <Slide
          products={products.filter(p => p.category === "hoodies")}
          title="Flash Fashion Deals"
          timer={false}
        />

        <Slide
          products={products.filter(p => p.category === "joggers")}
          title="Steal the Look Now"
          timer={false}
        />

        <Slide
          products={products.filter(p => p.category === "jackets")}
          title="Wardrobe Must-Haves"
          timer={false}
        />

        <Slide
          products={products.filter(p => p.category === "dresses")}
          title="Trending Today"
          timer={false}
        />

      </Component>
    </>
  );
};

export default Home;

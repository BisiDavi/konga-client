import React from 'react';
import {
  Layout,
  Slider,
  DealAdvertGif,
  CardTags,
  GroupCard,
  LatestDeals,
  PromoBanner,
  Popularcategory,
  CategoryBanner,
  AdsBanner,
  Branddetails,
  RecommendedProducts,
  ProductBanner,
  Brandlogo,
  // SponsoredProducts,
  BestSellingProducts,
  MobileMenu
} from '../../imports';

import classes from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <Layout>
      <section className={classes.Section1}>
        <div className={classes.Slider}>
          <span className={classes.Mobilemenu}>
            <MobileMenu />
          </span>
          <Slider />
        </div>
        <div className={classes.DealAdvertGif}>
          <DealAdvertGif />
        </div>
      </section>
      <section className={classes.OtherSection}>
        <CardTags />
        <GroupCard />
        <RecommendedProducts />
        {/* <SponsoredProducts /> */}
        <LatestDeals />
        <span className={classes.promobanner}>
          <PromoBanner
            bannerImage="promoBanner_sz4ppr.jpg"
            bannerHeight="150px"
          />
        </span>
        <ProductBanner />
        <Popularcategory />
        <AdsBanner />
        <BestSellingProducts />
        <CategoryBanner />
        <Branddetails />
        <Brandlogo />
      </section>
    </Layout>
  );
};
export default LandingPage;

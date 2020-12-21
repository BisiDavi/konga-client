import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import HorizontalScroller from 'react-horizontal-scroll-container';
import { ShowcaseCard } from '../../../imports';
import classes from './bestSelling.module.css';
import { FetchProducts } from '../../../store/actions/productActions';

const BestSellingProducts = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
  });

  let products = [];
  let bestSellingProductArray = [];
  let getSixBestSellingProduct = [];

  const getBestSellingProducts = () => {
    props.bestSellingProduct.map(product =>
      product.map(item => products.push(item))
    );
    return products.forEach(item => {
      if (item.tag.includes('Best Selling')) {
        bestSellingProductArray.push(item);
        getSixBestSellingProduct = [...bestSellingProductArray.slice(0, 6)];
        return getSixBestSellingProduct;
      }
    });
  };

  getBestSellingProducts();

  return (
    <div className={classes.bestSelling}>
      <div className={classes.Title}>
        <h1>Best Selling Products</h1>
      </div>
      <HorizontalScroller>
        {getSixBestSellingProduct.map(pdtData => {
          return (
            <ShowcaseCard
              key={pdtData.name}
              imgsrc={`konga/${pdtData.img}`}
              width="300px"
              height="21rem"
              imgheight="200px"
              name={pdtData.name}
              price={pdtData.price}
              formerPrice={pdtData.formerPrice}
            />
          );
        })}
      </HorizontalScroller>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bestSellingProduct: state.ptr.products
  };
};

export default connect(mapStateToProps)(BestSellingProducts);

import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FetchProducts } from '../../../store/actions/productActions';
import { ShowcaseCard } from '../../../imports';

import classes from './sponsoredProduct.module.css';

const SponsoredProducts = props => {
  const products = [];
  const productData = [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProducts());
  });


  const getSponsoredProducts = () => {
    props.product.map(product => product.map(item => products.push(item)));

    return products.forEach(item => {
      if (item.tag.includes('latest deals')) {
        return productData.push(item);
      }
    });
  };

  getSponsoredProducts();

  return (
    <>
      <h1 className="text-white text-center">Sponsored Product</h1>
      <div className={classes.SponsoredProducts}>
        {productData.map(pdtData => {
          return (
            <ShowcaseCard
              key={pdtData.name}
              cardWidth="250px"
              img={`konga/${pdtData.img}`}
              width="50%"
              name={pdtData.name}
              price={pdtData.price}
              formerPrice={pdtData.formerPrice}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    product: state.ptr.products
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchProducts: () => dispatch(FetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(SponsoredProducts);

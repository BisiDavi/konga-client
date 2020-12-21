import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FetchProducts } from '../../../store/actions/productActions';
import { ProductCard } from '../../../imports';
import classes from './recommendedProducts.module.css';

const RecommendedProducts = props => {
  const products = [];
  const recommendedProductData = [];
  let sixRecommendedProducts = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
  });

  const getRecommendedProducts = () => {
    props.product.map(product => product.map(item => products.push(item)));

    return products.forEach(item => {
      if (item.tag.includes('Recommended Products')) {
        recommendedProductData.push(item);
        sixRecommendedProducts = [...recommendedProductData.slice(0, 6)];
        return sixRecommendedProducts;
      }
    });
  };

  getRecommendedProducts();

  return (
    <section className={classes.RecommendedProducts}>
      <div className={classes.header}>
        <h3>Recommended Products</h3>
        <p>See all items</p>
      </div>
      <hr />
      <div className={classes.dealcards}>
        {sixRecommendedProducts.map(rPData => {
          return (
            <ProductCard
              key={rPData.name}
              name={rPData.name}
              width="100%"
              imgheight="100%"
              price={rPData.price}
              formerPrice={rPData.formerPrice}
              imgsrc={`konga/${rPData.img}`}
            />
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    product: state.ptr.products
  };
};

export default connect(mapStateToProps)(RecommendedProducts);

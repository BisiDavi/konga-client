import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchProducts } from "../../store/actions/productActions";
import { ProductCard } from "../../imports";
import classes from "../group/deals/latestdeals.module.css";

const LatestDeals = props => {
  const products = [];
  const dealsData = [];
  let sixLatestDeals = [];
  
  const { dispatch } = props;
  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  console.log("PRODUCT", props.product);

  const getLatestDeals = () => {
    props.product.map(product => {
      product.map(item => products.push(item));
    });
    products.forEach(item => {
      if (item.tag.includes("latest deals")) {
        dealsData.push(item);
        sixLatestDeals = [...dealsData.slice(0, 6)];
        return sixLatestDeals;
      }
    });
  };

  getLatestDeals();

  return (
    <section className={classes.LatestDeals}>
      <div className={classes.header}>
        <h2>Latest Deals</h2>
        <h6>See all items</h6>
      </div>
      <hr />
      <div className={classes.dealcards}>
        {sixLatestDeals.map(dData => {
          return (
            <ProductCard
              key={dData.name}
              name={dData.name}
              price={dData.price}
              formerPrice={dData.formerPrice}
              imgsrc={`konga/${dData.img}`}
              width="100%"
              imgheight="85%"
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

export default connect(mapStateToProps)(LatestDeals);

import React from 'react'
import { Layout, LazyLoadImage,TabPanel } from '../../imports'
import { BreadCrumb } from '../../components/essentials'

const Products = (props) => {
    return (
      <Layout>
        <Paper className="category">
          <div>
           <BreadCrumb />
          </div>
          <div className="title">
            <h1>{props.title}</h1>
          </div>
        </Paper>

        <Paper>
          <div>
            <LazyLoadImage
              publicId={props.imgPublicID}
            />
          </div>
          <div className="Product-info">
            <h1>{props.productName}</h1>
            <p>
              Product Code: {props.productCode}
            </p>
            <p>Brand: {props.productBrand}</p>
            <hr />
            <div className="price">
              <h1>₦ {props.price}</h1>
              <p>₦ {props.oldPrice}</p>
              <p>You save {
              (props.oldPrice) 
              ? props.oldPrice - props.price
              : ''
             }</p>
            </div>
            <hr />
            <div className="quantity">
                <p>Quantity: </p> 
                <table>
                    <tr>
                        <td>-</td>
                        <td>1</td>
                        <td>+</td>
                    </tr>
                </table>
                <div>
                <p>Call us for bulk purchases:</p>
                <LinkText linkto="" text="Click here to show phone number" />
                </div>
                <hr/>
                <div className={classes.buy}>
                <LinkButton linkto="/buy" variant="filled">Buy Now</LinkButton>
                 <p>Heart Emoji</p> 
                 <p>Save For Later</p>
                </div>
                <hr />
                <div className={classes.pickup}>
                  <p>Pickup emoji</p>
                  <p>Pickup & Pay on Collection Available</p>
                </div>
                <hr/>
                <div className={classes.share}>
                  <p>Share With Friends</p>
                  <p>Facebook, Twitter, whatsapp icon</p>
                </div>
            </div>
          </div>
        </Paper>

        <Paper className={classes.Seller}>
          <p>Sold by <span className={classes.name}>
            {props.sellerName}
            </span>
            <span><LinkText linkto="/learn-more" text="Learn More" /></span>
          </p>
        </Paper>
     
        <TabPanel />
      </Layout>
    );
}

    export default Products

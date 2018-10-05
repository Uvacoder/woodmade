import React, { Component } from 'react';

import './wood_gallery.css';
import products from '../../products.json';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products
    };
  }

  render() {
    return (
      <div className="buffer">
        <div className="morebuff" />
        <div className="products">
          {this.state.products.map(product => (
            <div key={product.id} className="product">
              <img
                className="product-image"
                src={product.image}
                alt={product.id}
                key={product.id}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;

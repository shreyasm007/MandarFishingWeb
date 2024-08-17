import React from 'react';

function Products() {
  return (
    <div className="container mt-5">
      <h2>Our Products</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="fish-image-1.jpg" className="card-img-top" alt="Fish 1" />
            <div className="card-body">
              <h5 className="card-title">Fish Variety 1</h5>
              <p className="card-text">Price: $10/kg</p>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other fish varieties */}
      </div>
    </div>
  );
}

export default Products;

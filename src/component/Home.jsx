import React from 'react'

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Style Highway
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Products</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Register">Adil bhI</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Welcome to Style Highway  
          </h1>
          <p className="lead">
            Discover the latest fashion trends and stylish T-Shirts.
          </p>
          <button className="btn btn-light btn-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="product"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Premium T-Shirt</h5>
                <p className="card-text">
                  Comfortable and stylish design.
                </p>
                <button className="btn btn-primary">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="product"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Casual Wear</h5>
                <p className="card-text">
                  Perfect for daily use.
                </p>
                <button className="btn btn-success">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="product"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Fashion Collection</h5>
                <p className="card-text">
                  Trendy and modern outfits.
                </p>
                <button className="btn btn-danger">
                  Buy Now
                </button>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="product"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Cotegories Collection</h5>
                <p className="card-text">
                  Trendy and modern outfits.
                </p>
                <button className="btn btn-info">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          © 2026 Style Highway. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Home
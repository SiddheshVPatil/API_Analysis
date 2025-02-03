import React from 'react'

function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column">
    {/* Navigation */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">DataVista</a>
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
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <main className="flex-grow-1 d-flex align-items-center py-5" 
          style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
          }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="pe-lg-5">
              <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">
                Transform Your Data Into Actionable Insights
              </h1>
              <p className="lead mb-4 text-muted animate__animated animate__fadeIn animate__delay-1s">
                Unlock the power of your business data with our advanced analytics platform. 
                Make informed decisions faster and drive growth with real-time insights.
              </p>
              <div className="d-flex gap-3 animate__animated animate__fadeIn animate__delay-2s">
                <button className="btn btn-primary btn-lg px-4 py-2">
                  Get Started
                </button>
                <button className="btn btn-outline-secondary btn-lg px-4 py-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-5">
            <div className="text-center text-lg-end">
              <img 
                src="https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg" 
                alt="Dashboard Preview" 
                className="img-fluid rounded-4 shadow-lg animate__animated animate__fadeIn"
                style={{
                  maxWidth: '90%',
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row mt-5 pt-5 g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="text-primary mb-3">
                  <i className="bi bi-graph-up" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h5 fw-bold">Real-time Analytics</h3>
                <p className="text-muted mb-0">
                  Monitor your business performance in real-time with interactive dashboards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="text-primary mb-3">
                  <i className="bi bi-shield-check" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h5 fw-bold">Secure Platform</h3>
                <p className="text-muted mb-0">
                  Enterprise-grade security to protect your sensitive business data.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="text-primary mb-3">
                  <i className="bi bi-lightning" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h5 fw-bold">Fast Integration</h3>
                <p className="text-muted mb-0">
                  Quick and seamless integration with your existing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Home

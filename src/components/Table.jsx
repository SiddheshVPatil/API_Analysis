import React, { useState, useEffect } from 'react';

function Table() {

    const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, searchTerm, currentPage]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/transactions?month=${selectedMonth}&search=${searchTerm}&page=${currentPage}`
      );
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
    setLoading(false);
  };


  return (
    <div>
      <div className="min-vh-100 d-flex flex-column">
      {/* Navigation */}
      

      {/* Main Content */}
      <main className="flex-grow-1 py-5" style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      }}>
        <div className="container">
          {/* Page Title */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Transaction History</h1>
            <p className="lead text-muted">
              View and manage your transaction records with ease
            </p>
          </div>

          {/* Filters */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="form-floating">
                <select 
                  className="form-select"
                  id="monthSelect"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <label htmlFor="monthSelect">Select Month</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  placeholder="Search transactions"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <label htmlFor="searchInput">Search Transactions</label>
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="bg-light">
                        <tr>
                          <th className="border-0">Product</th>
                          <th className="border-0">Category</th>
                          <th className="border-0">Price</th>
                          <th className="border-0">Date</th>
                          <th className="border-0">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={transaction.image}
                                  alt={transaction.title}
                                  className="rounded"
                                  style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                                />
                                <div className="ms-3">
                                  <h6 className="mb-0">{transaction.title}</h6>
                                  <small className="text-muted">{transaction.description.substring(0, 50)}...</small>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-light text-dark">
                                {transaction.category}
                              </span>
                            </td>
                            <td>${transaction.price.toFixed(2)}</td>
                            <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                            <td>
                              <span className={`badge ${transaction.sold ? 'bg-success' : 'bg-warning'}`}>
                                {transaction.sold ? 'Sold' : 'Available'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Previous
                    </button>
                    <span className="text-muted">Page {currentPage}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                      Next
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Table

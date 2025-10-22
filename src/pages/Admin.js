import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate('/');
  };

  const adminStats = [
    { label: 'Total Orders', value: '1,247', icon: 'fas fa-shopping-cart' },
    { label: 'Active Customers', value: '892', icon: 'fas fa-users' },
    { label: 'Coffee Varieties', value: '12', icon: 'fas fa-coffee' },
    { label: 'Monthly Revenue', value: '$24,567', icon: 'fas fa-dollar-sign' }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', item: 'Chimère Noire', amount: '$1.99', status: 'Completed' },
    { id: 'ORD-002', customer: 'Jane Smith', item: 'Rêverie Roast', amount: '$3.99', status: 'Processing' },
    { id: 'ORD-003', customer: 'Mike Johnson', item: 'Velours Brume', amount: '$4.99', status: 'Shipped' },
    { id: 'ORD-004', customer: 'Sarah Wilson', item: 'Morning Glory', amount: '$2.99', status: 'Completed' }
  ];

  return (
    <div className="admin-page">
      <div className="admin-content">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome to the Sichy Café administration panel</p>
          <button 
            className="auth-secondary logout-btn" 
            onClick={handleLogout}
            style={{ marginTop: '1rem' }}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>

        {/* Admin Stats */}
        <div className="admin-stats">
          {adminStats.map((stat, index) => (
            <div key={index} className="admin-stat-card">
              <i className={stat.icon} style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
              <div className="admin-stat-number">{stat.value}</div>
              <div className="admin-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <section className="products">
          <div className="container">
            <h2>Recent Orders</h2>
            <div style={{ 
              background: 'var(--white)', 
              borderRadius: '15px', 
              padding: '2rem',
              boxShadow: '0 5px 20px var(--shadow)',
              marginTop: '2rem'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {recentOrders.map((order) => (
                  <div key={order.id} style={{
                    background: 'var(--background-cream)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--accent-color)'
                  }}>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{order.id}</h4>
                    <p><strong>Customer:</strong> {order.customer}</p>
                    <p><strong>Item:</strong> {order.item}</p>
                    <p><strong>Amount:</strong> {order.amount}</p>
                    <p><strong>Status:</strong> 
                      <span style={{ 
                        color: order.status === 'Completed' ? '#28a745' : 
                               order.status === 'Processing' ? '#ffc107' : '#17a2b8',
                        fontWeight: 'bold',
                        marginLeft: '0.5rem'
                      }}>
                        {order.status}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="story">
          <div className="container">
            <h2>Quick Actions</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div style={{
                background: 'var(--white)',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 5px 20px var(--shadow)',
                textAlign: 'center'
              }}>
                <i className="fas fa-plus-circle" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
                <h3>Add New Product</h3>
                <p>Add a new coffee variety to the menu</p>
                <button className="btn-primary" style={{ marginTop: '1rem' }}>Add Product</button>
              </div>
              
              <div style={{
                background: 'var(--white)',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 5px 20px var(--shadow)',
                textAlign: 'center'
              }}>
                <i className="fas fa-edit" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
                <h3>Manage Inventory</h3>
                <p>Update stock levels and product information</p>
                <button className="btn-primary" style={{ marginTop: '1rem' }}>Manage</button>
              </div>
              
              <div style={{
                background: 'var(--white)',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 5px 20px var(--shadow)',
                textAlign: 'center'
              }}>
                <i className="fas fa-chart-bar" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
                <h3>View Analytics</h3>
                <p>Check sales reports and customer insights</p>
                <button className="btn-primary" style={{ marginTop: '1rem' }}>View Reports</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;

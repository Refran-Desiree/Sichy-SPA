// Notification utilities for Sichy Café

export const showNotification = (message, type = 'success') => {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Style based on type
  const colors = {
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${colors[type] || colors.success};
    color: white;
    padding: 1rem 2rem;
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 1001;
    animation: slideIn 0.3s ease;
    max-width: 300px;
    word-wrap: break-word;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
};

export const showSuccess = (message) => showNotification(message, 'success');
export const showError = (message) => showNotification(message, 'error');
export const showWarning = (message) => showNotification(message, 'warning');
export const showInfo = (message) => showNotification(message, 'info');

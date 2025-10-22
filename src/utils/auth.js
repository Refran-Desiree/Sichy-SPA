// Authentication utilities for Sichy Café

export const login = (email, password) => {
  // Simulate authentication
  if (email && password && password.length >= 6) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('memberData');
};

export const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

export const getCurrentUser = () => {
  const email = localStorage.getItem('userEmail');
  const memberData = localStorage.getItem('memberData');
  
  if (memberData) {
    return JSON.parse(memberData);
  }
  
  return email ? { email } : null;
};

export const register = (formData) => {
  // Simulate registration
  localStorage.setItem('memberData', JSON.stringify(formData));
  localStorage.setItem('isLoggedIn', 'true');
  return true;
};

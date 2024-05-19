export const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  
  export const loadUser = () => {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  };
 
  
  export const clearUser = () => {
    localStorage.removeItem('user');
  };

import { useMutation } from '@tanstack/react-query';
import { createContext, useState } from 'react';
import { login } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setLocation = useNavigate();

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onError: error => {
      alert(error.response.data.message);
    },
    onSuccess: data => {
      alert(data.message);
      localStorage.setItem('authToken', data.token);
      setLocation('/dashboard');
    },
  });

  const setUserData = data => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, loginMutation, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

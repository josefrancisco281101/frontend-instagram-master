
import { useMutation } from '@tanstack/react-query';
import { createContext, useState } from 'react';
import { getMyInformation } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setLocation = useNavigate();

  const registerMutation = useMutation({
    mutationKey: ['getMyInformation'],
    mutationFn: getMyInformation,
    onError: error => {
      alert(error.response.data.message);
    },
    onSuccess: data => {
      alert(data.message);
      localStorage.setItem('authToken', data.token);
      setLocation('/register');
    },
  });

  const setUserData = data => {
    setUser(data);
  };

  return (
    <RegisterContext.Provider value={{ user, registerMutation, setUserData }}>
      {children}
    </RegisterContext.Provider>
  );
};

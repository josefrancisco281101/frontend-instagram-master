import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const setLocation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    console.clear();
    setLocation('/');
  };

  return (
    <main>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <h1 className='text-3xl'>¡Bienvenido!</h1>
      <img
        className='w-[200px]'
        src={`http://localhost:3000/api/images/${user?.image}`}
        alt='Foto de perfil'
      />
      <p className='text-lg'>Primer nombre: {user?.f_name}</p>
      <p className='text-lg'>Segundo nombre: {user?.m_name}</p>
      <p className='text-lg'>Apellidos: {user?.l_name}</p>
      <p className='text-lg'>Nombre de usuario: {user?.username}</p>
      <p className='text-lg'>Correo electrónico: {user?.email}</p>
    </main>
  );
}

export default Dashboard;

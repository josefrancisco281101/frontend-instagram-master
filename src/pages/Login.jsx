import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { loginMutation } = useContext(AuthContext);

  const handleLogin = async e => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    await loginMutation.mutate(data);
  };

  return (
    <main className='h-screen flex flex-col justify-center items-center max-w-[300px] m-auto gap-5 lg:max-w-[800px]'>
      <h1 className='text-2xl'>Iniciar sesión</h1>
      <form
        onSubmit={handleLogin}
        className='border-2 border-blue-400 rounded-md p-5 flex flex-col gap-3'
      >
        <label className='text-md'>
          Nombre de usuario:
          <input
            type='text'
            name='username'
            className='border border-gray-400 rounded-md w-full p-2'
          />
        </label>
        <label className='text-md'>
          Contraseña:
          <input
            type='text'
            name='password'
            className='border border-gray-400 rounded-md w-full p-2'
          />
        </label>
        <button type='submit'>Ingresar</button>
      </form>
    </main>
  );
}

export default Login;

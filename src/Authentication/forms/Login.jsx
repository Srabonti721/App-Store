import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router';

const Login = () => {
  const { googleSignIn, loginUser } = use(AuthContext)
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(result => {
        console.log(result);
      })
      .caught(error => {
        console.log(error);
      })
  }
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="text-center my-10 p-4 card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl x">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          <Link className="btn btn-neutral mt-4">Login</Link>
        </form>
        <p className='text-sm'>Don't have an account? <Link className='text-blue-800 underline' to='/authLayout/register'> Register</Link></p>
        ------------------------ or -----------------------
        {/* Google */}
        <button onClick={handleGoogleLogin} className="btn hover:bg-blue-400 hover:text-white bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
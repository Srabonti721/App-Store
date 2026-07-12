import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { googleSignIn, CreateUSer, UpdateUserProfile, setUser } = use(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // console.log(name, photo, email, password);

        if (password.length < 6) {
           return setErrorMessage('Password must be at least 6 characters.');
        }
        if (!/[A-Z]/.test(password)) {
          return   setErrorMessage('Password must be 1 Upper case');
          
        }
        if (!/[a-z]/.test(password)) {
           return  setErrorMessage('Password must be 1 lower case');
            
        }
        if (!/\d/.test(password)) {
          return   setErrorMessage('Password must be 1 number case');          
        }

        CreateUSer(email, password)
            .then(result => {
                toast.success('🦄 User login successfully !', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                const users = result.user
                console.log(result.user);
                UpdateUserProfile({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...users, displayName: name, photoURL: photo });
                    navigate('/')
                }).catch((error) => {
                    console.log(error);
                    setUser(users)
                });
            })
            .catch(error => {
                console.log(error);

            })
    }

    // google Sign in
    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
            })
            .error(error => {
                console.log(error);

            })
    }
    return (
        <div className="my-10 p-4 card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl x">
            <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Register please</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Your Name</label>
                    <input name='name' type="text" className="input" placeholder="Name" required />
                    <label className="label">Your Photo URL</label>
                    <input name='photo' type="text" className="input" placeholder="Photo URL" required />
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="email" required />
                    {/* password */}
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="password" required />
                    {
                      errorMessage && <p className='text-red-600 '>{errorMessage}</p>
                    }
                    <p className="validator-hint hidden">
                        Must be more than 8 characters, including
                        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                    </p>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>have already an account?
                    <Link className='text-blue-800 underline text-sm' to='/authLayout/login'> Login</Link></p>
                ------------------------ or -----------------------
                {/* Google */}
                <button onClick={handleGoogleSign} className="btn hover:bg-blue-400 hover:text-white bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
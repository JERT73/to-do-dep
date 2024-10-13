import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }
  return (
    <div className='
        flex flex-col items-center justify-center min-w-96 mx-auto
    '>
        <div className='
            w-full p-6 rounded-lg shadow-md bg-green-300 
            bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30
        '>
            <h1 className='
                text-center text-3xl font-semibold text-gray-300
            '>
                Login <span className='
                    text-green-400
                '>
                    ToDoPro
                </span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-green-400'>
                            Username
                        </span>
                    </label>
                    <input type='text' placeholder='Enter username'
                        className='
                            w-full input input-bordered h-10
                            bg-green-200 text-black
                        '
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-green-300'>
                            Password
                        </span>
                    </label>
                    <input type='password' placeholder='Enter password'
                        className='
                            w-full input input-bordered h-10
                            bg-green-200 text-black
                        '
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link to={'/signup'} className='
                    hover:underline hover:text-green-300 mt-3 inline-block
                    pl-2
                '>
                    Don't have an account? Sign up then...
                </Link>
                <div>
                    <button className='
                        btn btn-block btn-sm mt-2 hover:bg-green-300
                        hover:text-gray-700 text-green-300
                    ' disabled={loading}>
                        {loading? 
                            <span className="loading loading-spinner"></span>:
                            "Login"    
                        }
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login

// STARTER
// const Login = () => {
//   return (
//     <div className='
//         flex flex-col items-center justify-center min-w-96 mx-auto
//     '>
//         <div className='
//             w-full p-6 rounded-lg shadow-md bg-gray-400 
//             bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
//         '>
//             <h1 className='
//                 text-center text-3xl font-semibold text-gray-300
//             '>
//                 Login <span className='
//                     text-blue-200
//                 '>
//                     BuzzChat
//                 </span>
//             </h1>
//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>
//                             Username
//                         </span>
//                     </label>
//                     <input type='text' placeholder='Enter username'
//                         className='
//                             w-full input input-bordered h-10
//                         '
//                     />
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>
//                             Password
//                         </span>
//                     </label>
//                     <input type='password' placeholder='Enter password'
//                         className='
//                             w-full input input-bordered h-10
//                         '
//                     />
//                 </div>
//                 <a href='#' className='
//                     hover:underline hover:text-blue-200 mt-2 inline-block
//                     pl-2
//                 '>
//                     Don't have an account? Sign up then...
//                 </a>
//                 <div>
//                     <button className='
//                         btn btn-block btn-sm mt-2
//                     '>
//                         Login
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login
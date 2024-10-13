import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs((prevInputs) => ({ ...prevInputs, gender }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

  return (
    <div className='
        flex flex-col items-center justify-center min-w-96 mx-auto
    '>
        <div className='
            w-full p-6 rounded-lg shadow-md bg-gray-400 
            bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
        '>
            <h1 className='
                text-center text-3xl font-semibold text-gray-300
            '>
                Sign Up <span className='
                    text-blue-200
                '>
                    BuzzChat
                </span>
            </h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>
                            Full name
                        </span>
                    </label>
                    <input type='text' placeholder='Eg: Aman Dileep' 
                        className='
                            w-full input input-bordered h-10
                        '
                    value={inputs.fullname}
                    onChange={(e) => setInputs({...inputs, fullname: e.target.value})}/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>
                            Username
                        </span>
                    </label>
                    <input type='text' placeholder='Enter username'
                        className='
                            w-full input input-bordered h-10
                        '
                    value={inputs.username}
                    onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>
                            Password
                        </span>
                    </label>
                    <input type='password' placeholder='Enter password'
                        className='
                            w-full input input-bordered h-10
                        '
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>
                            Confirm Password
                        </span>
                    </label>
                    <input type='password' placeholder='Confirm password'
                        className='
                            w-full input input-bordered h-10
                        '
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>

                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                <Link to={'/login'} className='
                    hover:underline hover:text-blue-200 mt-1 inline-block
                    pl-2
                '>
                    Alrady have an Account? Login then...
                </Link>
                <div>
                    <button className='
                        btn btn-block btn-sm mt-2 hover:bg-blue-200
                        hover:text-gray-700
                    ' disabled={loading}>
                        {loading? 
                            <span className="loading loading-spinner"></span>:
                            "Sign up"    
                        }
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup

//starter code
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
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
//                 Sign Up <span className='
//                     text-blue-200
//                 '>
//                     BuzzChat
//                 </span>
//             </h1>
//             <form>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>
//                             Full name
//                         </span>
//                     </label>
//                     <input type='text' placeholder='Eg: Aman Dileep' 
//                         className='
//                             w-full input input-bordered h-10
//                         '
//                     />
//                 </div>

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

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>
//                             Confirm Password
//                         </span>
//                     </label>
//                     <input type='password' placeholder='Confirm password'
//                         className='
//                             w-full input input-bordered h-10
//                         '
//                     />
//                 </div>

//                 <GenderCheckbox/>

//                 <a href='#' className='
//                     hover:underline hover:text-blue-200 mt-1 inline-block
//                     pl-2
//                 '>
//                     Alrady have an Account? Login then...
//                 </a>
//                 <div>
//                     <button className='
//                         btn btn-block btn-sm mt-2 hover:bg-blue-200
//                         hover:text-gray-700
//                     '>
//                         Signup
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Signup
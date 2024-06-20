// @ts-nocheck
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {

  //handleChange event 
  const [formData, setFormData] = useState({});
  // these also replace

  // //error from
  // const [error,setError] = useState(null);
  // //lodding form icon
  // const [loading, setLoading] = useState(false);

  const{loading,error} = useSelector((state) => state.user);

  //when siign up got to sign in page
  const navigate = useNavigate();
  // redux 
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    });
  };

  //handle onsubmit form

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      //redux toolkit
      //setLoading(true); replace

      dispatch(signInStart());

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }); 
      const data = await res.json();
      if(data.success === false){
        // replace two line with redux dispath

        // setLoading(false);
        // setError(data.message);
       
        dispatch(signInFailure(data.message));
        return;
      } 
      // REPLACE ALSO THESE LINES 

      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data));
      navigate('/');
       
    } catch (error) {
      // replace also

      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }

  };

  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form onSubmit = {handleSubmit} className='flex flex-col gap-4 '>
        
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id= 'email'onChange={handleChange}></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id= 'password'onChange={handleChange}></input>

        <button disabled= {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
          </button>
          <OAuth/>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Do not have an account ?</p>
        <Link to = {"/sign-up"}>
        <span className='text-blue-700 font-semibold'> Sign up</span>
        </Link>
      </div>   
      {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
  )
}

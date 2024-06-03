import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests

const Create = () => {
  const [values, setValues] = useState({
    id:'',
    firstname: '',
    lastname: '',
    email: '',
    gender: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        console.error(err);
        // Handle error, show error message to the user, etc.
      });
  }

  return (
    <div className='mt-5 d-flex w-100 justify-content-center'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a user</h1>
        <form onSubmit={handleSubmit}>
        <div className='mb-2'>
            <label htmlFor='firstName'>FId:</label>
            <input 
              type='text' 
              name='id' 
              className='form-control' 
              placeholder='id'
              onChange={e => setValues({...values, id: e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='firstName'>First Name:</label>
            <input 
              type='text' 
              name='firstname' 
              className='form-control' 
              placeholder='First Name'
              onChange={e => setValues({...values, firstname: e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='lastName'>Last Name:</label>
            <input 
              type='text' 
              name='lastName' 
              className='form-control' 
              placeholder='Last Name'
              onChange={e => setValues({...values, last_name: e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input 
              type='text' 
              name='email' 
              className='form-control' 
              placeholder='Email'
              onChange={e => setValues({...values, email: e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='gender'>Gender:</label>
            <input 
              type='text' 
              name='gender' 
              className='form-control' 
              placeholder='Gender'
              onChange={e => setValues({...values, gender: e.target.value})}
            />
          </div>
          <button type="submit" className='btn btn-success m-4'>Submit</button>
          <Link to="/" className='btn btn-danger'>Cancel</Link>
        </form>
      </div>
    </div>
  );
};

export default Create;

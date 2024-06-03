import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    gender: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div className='mt-5 d-flex w-100 justify-content-center'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
        <div className='mb-2'>
            <label htmlFor='id'>Id:</label>
            <input 
              type='text' 
              name='id' 
              className='form-control' 
              placeholder='id'
              value={values.id}
              onChange={e => setValues({...values, id: e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='firstname'>First Name:</label>
            <input 
              type='text' 
              name='firstname' 
              className='form-control' 
              placeholder='First Name'
              value={values.firstname}
              onChange={e => setValues({...values, firstname: e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='lastname'>Last Name:</label>
            <input 
              type='text' 
              name='lastname' 
              className='form-control' 
              placeholder='Last Name'
              value={values.lastname}
              onChange={e => setValues({...values, lastname: e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input 
              type='text' 
              name='email' 
              className='form-control' 
              placeholder='Email'
              value={values.email}
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
              value={values.gender}
              onChange={e => setValues({...values, gender: e.target.value})}
            />
          </div>
          <button type="submit" className='btn btn-success m-4'>Update</button>
          <Link to="/" className='btn btn-danger'>Cancel</Link>
        </form>
      </div>
    </div>
  );
}

export default Update;

import React, { useEffectse, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                setData(data.filter(item => item.id !== id));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex flex-column justify-content align-items-center bg-light vh-100'>
            <h1>List of Users</h1>
            <div className='w-100 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-success'>
                    <Link to={"/create"} className='btn btn-success'>ADD</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>firstname</th>
                            <th>last_name</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.firstname}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td><Link to={`/update/${item.id}`} className='btn btn-info'>update</Link></td>
                                <td><Link to={`/read/${item.id}`} className='btn btn-success'>read</Link></td>
                                <td><button onClick={() => handleDelete(item.id)} className='btn btn-danger'>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;

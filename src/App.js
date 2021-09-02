import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Users from './components/users/Users';
import Pagination from './components/pagination/Pagination';
import './App.css';


const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(1)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(`https://reqres.in/api/users?page=2`);
      setUsers(res.data.data)
      setLoading(false)
    }
    fetchUsers()
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser)

  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber)
  };

  return (
    <div className='profile-area'>
      <div className='container'>
        <h1 className='text-primary mb-3'>Users</h1>
        <Users users={currentUser} loading={loading} />
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default App;

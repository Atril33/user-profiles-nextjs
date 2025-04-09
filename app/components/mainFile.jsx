"use client";
import { useState, useEffect } from "react";
import FilterBar from "./filterBar";
import AllUsers from "./allUsers";
import Link from "next/link";

const MainFile = () => {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await AllUsers();
      setUsers(usersData); 
    };

    fetchUsers();
  }, []); 

  const filteredUsers = users.filter(user => {
    return user.firstName.toLowerCase().includes(inputValue.toLowerCase()) || 
           user.lastName.toLowerCase().includes(inputValue.toLowerCase()) ||
           user.email.toLowerCase().includes(inputValue.toLowerCase());
  });

  

  return (
    <div>
      <FilterBar value={inputValue} change={handleInputChange} />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredUsers.map((user) => (
          <Link href={`/user/${user.id}`} key={user.id} className="no-underline text-black border border-black ">
          <div key={user.id} className="border p-4 rounded shadow-lg flex flex-col items-center">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.gender}</p>
            <p>{user.email}</p>
          </div>
          </Link>
        ))}
        </div>
    </div>
  );
}

export default MainFile;

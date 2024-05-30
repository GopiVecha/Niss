import React from 'react';
import nis from "../assets/nis.jpg"


const Header = () => {
  const handleLogout = () =>{
    let isSuccess = window.confirm("Are you sure you want to logout?")
    if(isSuccess){
        alert("Succesfully logged out")
    }
  }
  return (
    <header className=" flex flex-row bg-red-600 h-16 text-white p-3">
        <img src={nis} alt="logo" className=' w-9 h-9'/>
      <h1 className="text-center flex-1 text-2xl">Nissan Manufactures</h1>
      <button 
        className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;

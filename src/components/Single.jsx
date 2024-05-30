import React from 'react';

const Single = () => {
  return (
    <div className='flex flex-col gap-10'>
      <h2 className="text-2xl text-center">Enter VIN Number</h2>
      <input type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-center relative left-72  text-lg rounded-lg focus:ring-blue-500  w-[50%] p-2.5"
      placeholder='Enter Your number here'  />
      <button type='button' className='bg-red-500 text-white w-20 h-10 relative left-[45%] rounded'>Search</button>
    </div>
  );
};

export default Single;

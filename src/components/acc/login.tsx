import React from 'react';

const LoginForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center text-black bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <button onClick={onClose} className="absolute top-2 right-2">
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

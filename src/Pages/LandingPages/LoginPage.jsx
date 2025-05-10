import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  
    const name = email.split('@')[0]; // use email prefix as the name
    navigate('/dashboard', { state: { name } }); // Navigate with state
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the register page
  };

  


  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-20 py-12 bg-gradient-to-b from-[#f8f4ff] to-[#e8e0ff]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md"
      > 
        <h2 className="text-3xl font-bold text-center text-[#552583] mb-8">
          <span className="border-b-4 border-[#FDB927] pb-2">Welcome Back</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#552583]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#552583]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#552583] text-white py-2 rounded-lg hover:bg-[#401c6b] transition">
            Login
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <span
            className="text-[#552583] font-semibold cursor-pointer hover:underline"
            onClick={handleRegisterClick}
          >
            Sign up
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally here you would POST to your backend
    console.log('User registered:', { firstName, lastName, email, password });

    // Redirect to login after successful "signup"
    navigate('/login');
  };

  return (
    <div className="px-6 md:px-20 py-12 bg-gradient-to-b from-[#f8f4ff] to-[#e8e0ff] min-h-screen">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-[#552583] mb-8 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#552583] font-semibold mb-1">First Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FDB927]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-[#552583] font-semibold mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FDB927]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-[#552583] font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FDB927]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-[#552583] font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FDB927]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">Create Account</Button>
        </form>
      </div>
      <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <span
            className="text-[#552583] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </div>
    </div>
  );
}

export default RegisterPage;

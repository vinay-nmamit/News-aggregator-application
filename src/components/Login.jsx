import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate(); // For redirecting after login

  const handleSubmit = (e) => {
    e.preventDefault();

    if (showRegister) {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Registering:', { email, password });
      // Add register logic here
    } else {
      console.log('Logging in:', { email, password });
      // Add login logic here (API call, etc.)
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <div className={`login-card ${showRegister ? 'register-mode' : ''}`}>
        <div className="inner-card">
          <h2 className="mb-4 text-center">
            {showRegister ? 'Register' : 'Welcome'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {showRegister && (
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="login-button">
              <button type="submit" className="btn btn-dark w-50">
                {showRegister ? 'Register' : 'Sign-In'}
              </button>
            </div>
            <div className="register">
              <h6>
                {showRegister
                  ? 'Already have an account?'
                  : "Don't have an account?"}{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRegister(!showRegister);
                  }}
                >
                  {showRegister ? 'Login' : 'Register'}
                </a>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

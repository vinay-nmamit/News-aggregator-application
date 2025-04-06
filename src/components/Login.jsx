import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../API/api';
import '../styles/global.css';
import { UserContext } from '../Context/UserContext';

function Login() {
  const { username,setUsername } = useContext(UserContext);
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (showRegister) {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      try {
        const response = await registerUser({ username, email, password });

        if (response.status === 200) {
          alert('Registration successful!');
          const registeredUser = response.data;
          localStorage.setItem('username', registeredUser.username);
          localStorage.setItem('email', registeredUser.email);
          setUsername(registeredUser.username);
          navigate(`/${registeredUser.username}`);
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Try a different email.');
      }
    } else {
      try {
        const response = await loginUser({ email, password });

        if (response.status === 200) {
          const user = response.data;
          localStorage.setItem('username', user.username);
          localStorage.setItem('email', user.email);
          setUsername(user.username);
          navigate(`/${user.username}`);
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Invalid email or password.');
      }
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
            {showRegister && (
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
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
                autoComplete="current-password"
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

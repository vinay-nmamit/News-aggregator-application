import { useState } from 'react';
import '../styles/global.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showRegister) {
      console.log('Registering:', { email, password });
      // Add register logic here
    } else {
      console.log('Logging in:', { email, password });
      // Add login logic here
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="inner-card">
          {showRegister ? (
            <>
              <h2 className="mb-4 text-center">Register</h2>
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
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="login-button">
                  <button type="submit" className="btn btn-dark w-50">
                    Register
                  </button>
                </div>
                <div className="register">
                  <h6>
                    Already have an account?{' '}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowRegister(false);
                      }}
                    >
                      Login
                    </a>
                  </h6>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="mb-4 text-center">Welcome</h2>
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
                <div className="login-button">
                  <button type="submit" className="btn btn-dark w-50">
                    Sign-In
                  </button>
                </div>
                <div className="register">
                  <h6>
                    Don't have an account?{' '}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowRegister(true);
                      }}
                    >
                      Register
                    </a>
                  </h6>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

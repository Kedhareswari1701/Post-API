import React from 'react';

function Navbar({ currentUser, onLogout, onShowAuth }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">PostApp</div>
      <div className="navbar-links">
        {currentUser ? (
          <>
            <span className="navbar-welcome">Welcome, {currentUser}!</span>
            <button onClick={onLogout} className="nav-button">Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => onShowAuth('login')} className="nav-button">Login</button>
            <button onClick={() => onShowAuth('register')} className="nav-button register-btn">Register</button>
          </>
        )}
      </div>
    </nav>
  );
}

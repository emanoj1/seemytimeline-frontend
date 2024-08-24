import React from 'react';

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <a href="/forgot-password">Forgot Password?</a>
    </div>
  );
}

export default Login;

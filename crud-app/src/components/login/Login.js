import React, { Component } from 'react';
import './css/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <h1>로그인</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">아이디</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn-login">로그인</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

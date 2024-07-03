import React, { Component } from 'react';
import './css/Register.css';

class Register extends Component {
  render() {
    return (
      <div className="register-page">
        <div className="register-container">
          <h1>회원가입</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">아이디</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">비밀번호 확인</label>
              <input type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <button type="submit" className="btn-register">회원가입</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;

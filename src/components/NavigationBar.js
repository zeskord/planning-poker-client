import React from "react";
import config from '../globals/index'

export const NavigationBar = (props) => {
  async function logoutClick(event) {
    const url = `${config.baseUrl}/api/logOut`;
    var userdatastr = localStorage.getItem('user')
    await fetch(url, {
      method: "POST",
      headers: {
        'user-data': userdatastr
      }
    });
    // Процедура, переданная из самого корня.
    const userData = {
      userName: undefined,
      isAuthenticated: false,
    };
    props.setAuthState(userData);
    localStorage.removeItem('user')
  }

  async function fullReset(event) {
    const url = `${config.baseUrl}/api/fullReset`;
    await fetch(url, { method: "POST" });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.userName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <a className="nav-link" href="#" onClick={logoutClick}>
              Разлогиниться
            </a>
            <a className="nav-link" href="#" onClick={fullReset}>
              Полный сброс
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

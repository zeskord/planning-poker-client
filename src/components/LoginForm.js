import React, { useState } from 'react';
import config from '../globals/index'

export const LoginForm = (props) => {

  var userName = ""
  var isSpectator = false

  const [state, setState] = useState({
    userName: "",
    isSpectator: false
  });

  async function loginclick() {
    const reqBody = {
      userName: state.userName,
      isSpectator: state.isSpectator
    }
    const result = await fetch(`${config.baseUrl}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(reqBody)
    })
    const userDataFromServer = await result.json()
    const userData = {
      userName: userDataFromServer.name,
      isSpectator: userDataFromServer.isSpectator,
      isAuthenticated: true
    }
    // С сервера пришло подтверждение, запишем в локальное хранилище данные пользователя.
    localStorage.setItem('user', JSON.stringify({name: userData.userName, isSpectator: userData.isSpectator}))
    
    props.setAuthState(userData)
  }

  function loginKeyUp(event) {
    if (event.keyCode === 13) {
      loginclick()
    }
  }

  function userNameChange(event) {

    userName = event.target.value
    setState(prev => {
      return {
        ...prev,
        userName: userName
      }
    })
  }


  function isSpectatorChange(event) {

    isSpectator = event.target.value
    setState(prev => {
      return {
        ...prev,
        isSpectator: isSpectator
      }
    })
  }

  return (
    <div className="container-sm">
      <div className="input-group mb-3">
        <input
          className="form-control form-control-lg"
          placeholder="Введите ваше имя"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type="text"
          id="userName"
          value={state.userName}
          onChange={userNameChange}
          onKeyUp={loginKeyUp}
        />
      </div>

      <div className="input-group mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="isSpectator"
            value={state.isSpectator}
            onChange={isSpectatorChange}
          />
          <label className="form-check-label" htmlFor="isSpectator">
            Я только посмотреть
          </label>
        </div>
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-primary" onClick={loginclick}>
          Войти
        </button>
      </div>
    </div>
  );

}
import React, { useState } from 'react'
import './login.scss'

import Logo from '../../assets/image/logo.png';
import { Navigate, Route } from 'react-router-dom';
import Home from '../home/home';

function Login() {

    const [nameUser, setnameUser] = useState();
    const [passwordUser, setpasswordUser] = useState()
    const [trueAuth, setTrueAuth] = useState(false)


    const onChangePwd = (e) => {
        setpasswordUser(e.target.value)
    }

    const onChangeuserName = (e) => {
        setnameUser(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (nameUser == nameUser && passwordUser == passwordUser) {
           
            setTrueAuth(!trueAuth)
        }

    }
    return (
        <>
            <div className='login-container'>
                <div className='container-form'>
                    <div className='header-login-form'>
                        <img src={Logo} alt="Logo-Dragon-War" />
                        <h3 className='title-login'>Wellcome</h3>
                    </div>

                    <form className='form' onSubmit={onSubmit}>
                        <div className="form-control">
                            <label >Usuário</label>
                            <input type="text" name='nameUser' id='nameUser' onChange={onChangeuserName} />
                        </div>
                        <div className="form-control">
                            <label >Senha</label>
                            <input type="password" name='passwordUser' id='passwordUser' onChange={onChangePwd} />
                        </div>
                        <div className="btn-group">
                            <a  href ="/home" className='btn-enter'>ENTRAR</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
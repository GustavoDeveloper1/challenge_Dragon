import React from 'react'
import './login.scss'

import Logo from '../../assets/image/logo.png';

function Login() {

    const onSubmit = () => {

    }

    return (
        <>
            <div className='login-container'>
                <div className='container-form'>
                    <div className='header-login-form'>
                        <img src={Logo} alt="Logo-Dragon-War" />
                        <h3 className='title-login'>Wellcome</h3>
                    </div>

                    <form className='form'>
                        <div className="form-control">
                            <label >Usuário</label>
                            <input type="text" name='nameUser' id='nameUser' />
                        </div>
                        <div className="form-control">
                            <label >Senha</label>
                            <input type="password" name='passwordUser' id='passwordUser' />
                        </div>
                        <div className="btn-group">
                            <button onClick={onSubmit} className='btn-enter'>ENTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
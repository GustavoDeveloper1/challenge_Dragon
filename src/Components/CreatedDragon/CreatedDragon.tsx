import dayjs from 'dayjs';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { createdDragon } from '../../services/dragonsServices';

import '../home/home.scss'
import './CreatedDragon.scss';




function CreatedDragon() {


    const [dragonName, setDragonName] = useState('');
    const [typeDragon, setTypeDragon] = useState('');
    const [status, setStatus] = useState(0);
    const [close, setClose] = useState(false);

    const onChangeDragonName = (e: any) => {

        setDragonName(e.target.value);
    }

    const onChangeTypeDragon = (e: any) => {

        console.log(e.target.value)
        setTypeDragon(e.target.value)
    }

    const closeModalPost = () => {
        setClose(!close);
        if(close) {
            let status = 0;

            setStatus(status)
        }    
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        const data = new Date();

        // console.log(data)
        const createdData = dayjs(data).format('DD/MM/YYYY')

        formData.append('name ', dragonName);
        formData.append('type', typeDragon);
        formData.append('createAt', createdData)

        try {
            console.log(status)
            const response = await createdDragon(formData)
            setStatus(response.status)
            console.log("Status", response.status)
        } catch (err) {
            console.log("Error", err)
        }
    }

    return (
        <>
            <div className='container container-home'>

                <div className="componente componente-create">
                    <div className="header">
                        <h2 className='title'>Adicionar Dragões</h2>
                    </div>
                    <div className="componente-body">
                        {status === 201 ?
                            <div className="success-post">
                                <p>Dragão criado!</p>
                                <span><AiOutlineClose onClick={closeModalPost} /></span>
                            </div> : status !== 0 ?
                                <div className="error-post">
                                    <p>Erro Ao Criar! </p> <span><AiOutlineClose onClick={closeModalPost} /></span>
                                </div> : <></>
                        }


                        <form className='form' onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label>Nome do Dragão</label>
                                <input type="text" name="dragonName" id="dragonName" className='input-dragom'
                                    onChange={onChangeDragonName} />
                            </div>
                            <div className="form-control">
                                <label >Tipo de Dragão</label>
                                <input type="text" name="typeDragon" id="typeDragon" className='input-dragom'
                                    onChange={onChangeTypeDragon}
                                />

                            </div>
                            <div className="btn btn-dragon">
                                <button>SALVAR</button>
                                <a href="/home">Voltar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatedDragon
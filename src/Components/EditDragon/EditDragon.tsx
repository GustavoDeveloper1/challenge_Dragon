import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useParams } from 'react-router-dom'
import Api from '../../services/api';

function EditDragon() {

    const { id } = useParams();
    const [dragon, setDragon]: any = useState([]);
    const [dragonName, setDragonName] = useState('');
    const [typeDragon, setTypeDragon] = useState('');
    const [status, setStatus] = useState(0);
    const [close, setClose] = useState(false);


    useEffect(() => {
        getDragon();
    });

    const closeModalPost = () => {
        setClose(!close);
        if (close) {
            let status = 0;

            setStatus(status)
        }
    }

    const getDragon = async () => {
        const result = await Api.get(`dragon/${id}`);
        setDragon(result.data)
    }



    const onChangeDragonName = (e: any) => {

        setDragonName(e.target.value);
    }

    const onChangeTypeDragon = (e: any) => {
        setTypeDragon(e.target.value)
    }


    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        const data = new Date();

  
        const createdData = dayjs(data).format('DD/MM/YYYY')

        formData.append('name ', dragonName);
        formData.append('type', typeDragon);
        formData.append('createAt', createdData)

        try {
            console.log(dragonName,typeDragon)
            const response = await Api.put(`/dragon/${id}`,formData)
            setStatus(response.status)
            console.log("Status", response.status)
        } catch (err) {
            console.log("Error", err)
        }
    }


    return (
        <>
            <div className='container container-home'>
                <div className="contente contente-viewDragon">
                    <div className="header">
                        <h2 className='title'>Editar {dragon.name}</h2>
                        
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
                                    onChange={onChangeDragonName}
                                     />
                            </div>
                            <div className="form-control">
                                <label >Tipo de Dragão</label>
                                <input type="text" name="typeDragon" id="typeDragon" className='input-dragom'
                            
                                    onChange={onChangeTypeDragon}
                                />

                            </div>
                            <div className="btn btn-dragon">
                                <button type='submit'><a href="#">Editar</a></button>
                                <a href="/home">Voltar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditDragon
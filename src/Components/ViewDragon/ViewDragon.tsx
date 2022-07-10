import React, { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaRegEdit } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import Api from '../../services/api';

import Deafult from '../../assets/image/defaultImg.jpg'

import './viewDragon.scss'
function ViewDragon() {
    const { id } = useParams();
    const [dragon, setDragon]: any = useState([]);


    useEffect(() => {
        getDetail();
    })

    const getDetail = async () => {
        const result = await Api.get(`dragon/${id}`);
        console.log(result.data)
        setDragon(result.data)
    }

    const deleteDragon = async () => {

        try {
            const result = await Api.delete(`dragon/${id}`);

            console.log(result)
            return 
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='container container-home'>
                <div className="contente contente-viewDragon">
                    <div className="header header-detail">
                        <a href="/home"><FaLongArrowAltLeft className='icon' /></a>
                        <a href='/home' className='exclude-btn' onClick={deleteDragon}>Excluir</a>
                    </div>
                    <div className="componente-body componente-body-view">
                        <div className="dragon-container">
                            <div className="image-dragon">
                                <img src={Deafult} alt="default image-dragon" />
                            </div>

                            <div className="details">
                                <div className="detail-dragon-row">
                                    <span>  <b>Id:</b><p>{dragon.id}</p></span>
                                </div>
                                <div className="detail-dragon-row">
                                    <span>  <b>Nome:</b><p>{dragon.name}</p></span>
                                </div>
                                <div className="detail-dragon-row">
                                    <span> <b>Tipo:</b><p>{dragon.type}</p></span>
                                </div>
                                <div className="detail-dragon-row">
                                    <a href={`edit/${id}`} className='edit-btn'> <b>Editar </b> <FaRegEdit className='icon' /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewDragon
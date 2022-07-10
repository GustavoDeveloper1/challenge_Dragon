import React, { useEffect, useState } from 'react';

import { getAllDragons } from '../../services/dragonsServices';
import { FaRegEye } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi'
import DefaultImg from '../../assets/image/defaultImg.jpg';
import './home.scss';



function Home() {

    const [dragons, setDragons] = useState([]);
    const [modalshow, setmodalShow] = useState(false);
    const [selectedDragon, setSelectedDragon] = useState<any | null>()


    useEffect(() => {
        getDragons();
    }, []);

    const createdAt: any = []
    dragons.forEach((dragon: any) => {

        let data = dragon.createdAt.split("-")
        let data1 = data[2]


        let day = data1.substr(0, 2)

        let month = data[1];
        let year = data[0]

        const date = `${day}-${month}-${year} `

        createdAt.push(date)

    })


    const getDragons = async () => {
        const result = await getAllDragons();

        setDragons(result.data);


    }


    return (
        <>
            <div className='container container-home'>
                <div className="header-container">
                    <a href="/">  <BiExit className='icon icon-exit' /></a>
                </div>
                <div className="componente">
                    <div className="header">
                        <a href={`/createDragon`} {...dragons} className='btn btn-create'>Criar Dragão</a>
                    </div>
                    <div className='componente-body'>
                        {dragons.map((dragon: any, i) => (
                            <div className="componente-item">
                                <div className="image-dragon">
                                    <img src={DefaultImg} alt='Defalt' />
                                </div>
                                <div className="dragon-detail">


                                    <p className="name-dragon" > <b>Nome :</b> {dragon.name}</p>


                                    <p className='type-dragon'><b>Tipo:</b> {dragon.type}</p>
                                    <p className='create-dragon'><b>Criado em: </b>{createdAt[i]}
                                    </p>
                                    <a href={`/viewDragon/${dragon.id}`}><FaRegEye className='icon' /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>


        </>
    )
}

export default Home
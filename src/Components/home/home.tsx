import React, { useEffect, useState } from 'react'
import { getAllDragons } from '../../services/dragonsServices';

import './home.scss';

function Home() {

    const [dragons, setDragons] = useState([]);


    useEffect(() => {
        getDragons();
    }, []);


    const getDragons = async () => {
        const result = await getAllDragons();
        setDragons(result.data);
    }

    console.log("DRAGÕES", dragons)

    return (
        <>
            <div className='container container-home'>

                <div className="componente">
                    <div className="header">
                        <button className='btn btn-create'>Criar Dragão</button>
                    </div>
                    <table className='table table-home'>
                        <thead className='table-header table-home-header'>
                            <tr>
                                <td>Nome</td>
                                <td>Tipo</td>
                                <td>Data de Criação</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {/* {
                                dragons.map((dragon: any) => (
                                    <tr>
                                        <td>{dragon.name}</td>
                                        <td>{dragon.type}</td>
                                        <td>{dragon.createdAt}</td>
                                    </tr>
                                ))
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home
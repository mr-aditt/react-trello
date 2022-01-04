import React, { useState, useEffect } from 'react'
import List from './dashboard_list/list';
import '../dashboard.css';
import data from '../resources/data.json';
import { v4 as uuid } from 'uuid';
import { listContext } from './context';
import InputContainer from './dashboard_list/inputContainer';
import { DragDropContext } from 'react-beautiful-dnd';
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {

    const [listData, setListData] = useState(data);
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    console.log(currentUser);

    async function handleLogout() {
        try {
            await logout();
            navigate('/')
        } catch (error){
            console.log(error);
        }
    }

    // Adding new card to the list
    function addMoreCard(listId, cardContent) {
        console.log("Card: \n", listId, cardContent);
        const newCard = {
            "id": uuid(),
            "content": cardContent
        };

        listData.map((item, idx) => {
            console.log("ITEM-ID: ", item.id);
            if (item.id === listId) {
                console.log(item.id === listId);
                const list = listData[idx];
                item.cards = [...item.cards, newCard];

                const updated_lists = [...listData.slice(0, idx),
                {
                    ...list
                },
                ...listData.slice(idx + 1, listData.length)
                ];
                setListData(updated_lists);
            }
        })
    }


    // Add new List
    function addMoreList(title) {
        const list = {
            "id": uuid(),
            "title": title,
            "cards": []
        }
        const updated_lists = [...listData, list];
        setListData(updated_lists);
    }

    function onDragEnd(result) {
        const { destination, source, draggableId } = result;
        console.log("destination: ", destination, "\nsource: ", source, "\ndraggableId: ", draggableId);


        const sourceList = listData.filter(item =>
            item.id === source.droppableId
        )[0];


        const destinationList = listData.filter(item =>
            item.id === destination.droppableId
        )[0];


        const draggingCard = sourceList.cards.filter(card =>
            card.id === draggableId
        )[0];
        console.log(sourceList);



        if (!destination) { return; }
        if (source.droppableId === destination.droppableId) {
            sourceList.cards.splice(source.index, 1);
            destinationList.cards.splice(destination.index, 0, draggingCard);



            // const updated_lists = [
            //     ...listData,
            //     destinationList
            // ];

            // console.log(updated_lists);
            // setListData(updated_lists)
        }

    }

    console.log(listData);

    return (
        <listContext.Provider value={{ addMoreCard, addMoreList }}>
            <nav>
                <div className="navbar">
                    <div className='logo'>
                        <a href="#">Oll</a>
                        <a href="#">Ert</a>
                    </div>
                    <div className='dashboard-head'>
                        Dashboard
                    </div>
                    <div>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            {/* <div className='userEmail'>{currentUser}</div> */}
            <DragDropContext onDragEnd={onDragEnd}>
                <div className='dashboard-lists'>
                    {listData.length > 0 && listData.map(item => {
                        return <List key={item.id} item={item} />
                    })}
                    <InputContainer type="list" />
                </div>
            </DragDropContext>
        </listContext.Provider>

    )
}

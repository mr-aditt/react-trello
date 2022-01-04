import React, { useState, useEffect } from 'react'
import List from './dashboard_list/list';
import '../dashboard.css';
import data from '../resources/data.json';
import { v4 as uuid } from 'uuid';
import { listContext } from './context';
import InputContainer from './dashboard_list/inputContainer';

export default function Dashboard() {

    const [listData, setListData] = useState(data);

    // Adding new card to the list
    function addMoreCard(listId, cardContent) {
        console.log("Card: \n",listId, cardContent);
        const newCard = {
            "id": uuid(),
            "content": cardContent
        };

        listData.map((item, idx) => {
            console.log("ITEM-ID: ",item.id);
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

    console.log(listData);

    return (
        <listContext.Provider value={{ addMoreCard, addMoreList }}>
            <div className='dashboard-lists'>
                {listData.length > 0 && listData.map(item => {
                    return <List key={item.id} item={item} />
                })}
                <InputContainer type="list" />
            </div>
        </listContext.Provider>

    )
}

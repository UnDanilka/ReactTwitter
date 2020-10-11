import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form"

import "./app.css"
import styled from "styled-components";
import uuid from 'react-uuid'

const AppBlock = styled.div `
margin: 0 auto;
max-width: 800px;
`

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data : [
                {label: "Going to learn React", important: true , id: uuid()},
                {label: "Thats awesome", important: false, id: uuid()},
                {label: "I wanna sleep...", important: false, id: uuid()}
            ]
        }
    }


    deleteItem = (id)=>{
        this.setState(({data})=>{
            const index = data.findIndex(elem=> elem.id === id);
            const before = data.slice(0,index);
            const after = data.slice(index + 1);
            const newArr = [...before,...after];

            return{
                data: newArr
            }
        })

    }

    addItem = (body)=>{
        const newItem = {
            label: body,
            important: false,
            id: uuid()
        }
        console.log(newItem.id)
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })
    }

    render(){
    
    return (
        <AppBlock>
            <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList 
        posts={this.state.data}
        onDelete={this.deleteItem}/>
        <PostAddForm
        onAdd={this.addItem}/>
        </AppBlock>
    )
}
    

}


import React, { Component } from 'react';
import './Add_user.css';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus, faSleigh} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';



export default class Add_user extends Component {

    state = {
        name : "",
    }

    handleChange = (e) => {
        this.setState (
            {name: e.target.value}
        )
    }

    handleClick = (e) =>{
        e.preventDefault();
        this.props.addUser({
            name: this.state.name,
            image : 'https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg',
            id: this.id
        })
    }

    render() {

        

        return (
            <div className='Container'>
                <div className='form'>
                    <input type="text" onChange={this.handleChange} placeholder='User Name 👨‍💼' />
                    <button onClick={this.handleClick} ><FontAwesomeIcon icon={faCirclePlus} className='icon' /></button>
                </div>
            </div>
        )
    }
}

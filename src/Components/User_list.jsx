import React, { Component } from 'react'
import './User_list.css';
import User from './User';

export default class User_list extends Component {

    

    render() {
        return (
            <div className='box'>
                { this.props.users.map(users => 
                    <User
                        key={users.id}
                        name={users.name} 
                        image={users.image}
                        onDeleteClick = {this.props.onDeleteClick}
                    />)}
                
            </div>
            
        )
    }
}

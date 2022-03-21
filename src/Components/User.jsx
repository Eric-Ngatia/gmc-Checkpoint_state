import React, { Component } from 'react'
import './User.css'
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';



export class User extends Component {

    onDeleteClick = (id) => {
        //console.log("fonctionne");
        this.props.onDeleteClick(id)
    }

    render(props) {
            return (
            <div className='container'>
                <div className='User_profil'>
                    <ul>
                        <li><img height={80} width={90} className='picture' src= {this.props.image} alt="" /> </li>

                        <li>
                            <h1>{this.props.name}</h1>
                            <p>Developpeur FullStack</p>
                        </li>

                        <li> <button onClick={()=> this.onDeleteClick(this.props.id)} ><FontAwesomeIcon className='delete' icon={faTrash}/></button> </li>
                    </ul>
                </div>
            </div>
            )
    }
}

export default User
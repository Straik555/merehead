// Core
import React from "react";
import {useHistory} from 'react-router-dom';

//Form
import {RegisterForm} from '../../components/Form';

//Function
import {createNewUser} from '../../function';

//Style
import {toast} from "react-toastify";

const Register = () => {
    const history = useHistory();

    const handleSubmitForm = newUser => {
        createNewUser(newUser)
            .then(res => {
                toast.success(`${res.data.name} successful create`)
                history.push('/')
            })
            .catch(err => toast.error('Something went wrong'))
    }
    return (
        <div style={{margin: '30px auto 0', width: '400px'}}>
            <RegisterForm handleSubmitForm={handleSubmitForm} />
        </div>
    )
}

export default Register;
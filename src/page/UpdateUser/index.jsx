// Core
import React, {useState} from "react";
import {useParams, useHistory} from 'react-router-dom'

//Redux
import {useSelector} from "react-redux";

//Function
import {updateUser} from '../../function';

//Style
import {toast} from "react-toastify";

const UpdateUser = () => {
    const userId = useParams();
    const history = useHistory();
    const {user} = useSelector(state => ({...state.userReducer}))
    const userUpdate = user.find(e => e.id == userId.id)
    const [name, setName] = useState(userUpdate.name)
    const [surname, setSurname] = useState(userUpdate.surname)
    const [desc, setDesc] = useState(userUpdate.desc)

    const handleUpdateUser = user => {
        user.preventDefault()
        updateUser(userUpdate.id, {
            name,
            surname,
            desc,
            avatar: updateUser.avatar
        })
            .then(res => {
                toast.success(`${res.data.name} successful updated`)
                history.push('/')
            })
            .catch(err => toast.error('Something went wrong'))
    }

    return (
        <form className={'form-group'} style={{width: '400px', margin: '0 auto'}}>
            <input
                className={'form-control'}
                type="text"
                placeholder={'Enter your name'}
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                className={'form-control'}
                type="text"
                placeholder={'Enter your surname'}
                value={surname}
                onChange={e => setSurname(e.target.value)}
            />
            <input
                className={'form-control'}
                type="text"
                placeholder={'Enter your name'}
                value={desc}
                onChange={e => setDesc(e.target.value)}
            />
            <button
                type={'submit'}
                className={'btn btn-outline-primary mt-3'}
                onClick={handleUpdateUser}
            >Update</button>
        </form>
    )
}

export default UpdateUser;
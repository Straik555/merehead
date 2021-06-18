// Core
import axios from 'axios';

//Api
import {URL} from "../api";

export const getUsers = async () => {
    return await axios.get(`${URL.appApi}/users`)
}

export const createNewUser = async options => {
    return await axios.post(`${URL.appApi}/users`, options)
}

export const updateUser = async (id, options) => {
    return await axios.put(`${URL.appApi}/user/${id}`, options)
}

export const removeUser = async id => {
    return await axios.delete(`${URL.appApi}/user/${id}`)
}
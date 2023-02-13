import axios from "axios"
import { MAIN_URL } from "../MAIN_API"
import { changeStateValue } from "../redux/MainReducer"

export const getCars = () => async dispatch => {
    return await axios.get(`${MAIN_URL}/cars`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'cars',
                value: resp.data
            }))
        }).catch(err => { console.log(err.response) })
}

export const getBranch = () => async dispatch => {
    return await axios.get(`${MAIN_URL}/branch`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'branch',
                value: resp.data
            }))
        }).catch(err => { console.log(err.response) })
}

export const getWorker = () => async dispatch => {
    return await axios.get(`${MAIN_URL}/user`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'workers',
                value: resp.data
            }))
        }).catch(err => { console.log(err.response) })
}
export const getHome = () => async dispatch => {
    return await axios.get(`${MAIN_URL}/order`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'home',
                value: resp.data
            }))
        }).catch(err => { console.log(err.response) })
}
export const getAvailable = () => async dispatch => {
    return await axios.get(`${MAIN_URL}/available-branch?query_type=all`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'available',
                value: resp.data
            }))
        }).catch(err => { console.log(err.response) })
}

export const deleteItem = (url) => async dispatch => {
    return await axios.delete(`${MAIN_URL}/${url}`)
        .then(resp => {
            return 'success'
        }).catch(err => { return 'error' })
}
export const insertData = (url, data) => async dispatch => {
    return await axios.post(`${MAIN_URL}/${url}`, data)
        .then(resp => {
            console.log(resp.data)
            return 'success'
        }).catch(err => { return 'error' })
}

export const getOneParams = (url) => async dispatch => {
    return await axios.get(`${MAIN_URL}/${url}`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'oneData',
                value: resp.data
            }))
        }).catch(err => { console.log(err.response) })
}

export const updateData = (url, data) => async dispatch => {
    return await axios.put(`${MAIN_URL}/${url}`, data)
        .then(resp => {
            console.log(resp.data)
            return 'success'
        }).catch(err => { return 'error' })
}
import axios from "axios";
import api from './azure'

export const getFilesList = () => {
    api.getTokenPopup().then(response => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1', {
            headers: {
                Authorization: `Bearer ${response.accessToken}`
            }
        }).then(response => console.log(response.data))
    })
}
import Axios from 'axios';
import axios from 'axios';

export const getData = () => (dispatch) => {
    dispatch({ type: "FETCHING_QUOTE_START"});
    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then((res) => {
            dispatch({ type: "FETCHING_SUCCESS", payload: res.data.results });
            console.log(res);
        })
        .catch((err) => {
            dispatch({ type: "FETCHING_ERROR", payload: err.response.message });
            console.log(err);
        });
}
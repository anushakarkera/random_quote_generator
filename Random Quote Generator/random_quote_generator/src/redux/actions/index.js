import getquote from '../../services/quoteservice'

import axios from 'axios';

export const addQuoteAction = () => {
    console.log("actions")
    return dispatch => {
        dispatch(fetchingStatrted());
        axios
      .get(`https://type.fit/api/quotes`)
      .then(res => {
          console.log(res)
          let data = res.data;
          console.log(data);

        setTimeout(() => {
            let index = Math.floor(Math.random() * data.length);
            let payload = data[index];
            dispatch(fetchSucess(payload));
      
    }, 2500);
      })
      .catch(err => {
        //dispatch error action
      });
    }
 
}

const fetchSucess = data => ({
    type: 'FETCH_SUCESS',
    payload: data
  });

const fetchingStatrted = () => ({
    type: 'FETCH_STATRTED',
});



export const setColorFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
})

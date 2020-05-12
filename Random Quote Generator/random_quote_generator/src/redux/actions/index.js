import getquote from '../../services/quoteservice'

import axios from 'axios';

export const addQuoteAction = () => {
    console.log("actions")
    return dispatch => {
        dispatch(fetchingStatrted());
        axios
      .get(`https://api.quotable.io/random`)
      .then(res => {
        let data = {
          "text":res.data.content,
          "author":res.data.author
        };
        setTimeout(() => {
          //get random quote
            dispatch(fetchSucess(data));
      
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

import axios from 'axios';
export default function getquote() {
    return new Promise((resolve, reject) => {
    axios
      .get(`https://pixabay.com/api/?key=3816165-f45dd5d04573ce59bcdfc3e48&q=nature+landscape&image_type=photo&per+page=20`)
      .then(res => {
        resolve(res)
        //dispatch(addTodoSuccess({ type: 'ADD_TODO', id: nextTodoId++, text}));
        //dispatch(addTodoSuccess(data));
      })
      .catch(err => {
          reject(err)
        // console.log(err)
        // dispatch(addTodoFailure(err.message));
      });
    });
}
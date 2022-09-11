// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import { createStore } from 'redux'

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  };
}

const reducer = (state = [], action) => {

  console.log(state);

  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()))

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerText = '';
  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id
    li.innerText = toDo.text
    li.append(btn)
    ul.append(li)
  });
}

store.subscribe(paintToDos)

// const createToDo = (toDo) => {
//   const li = document.createElement("li")
//   li.innerText = toDo;
//   ul.append(li)
// }

const onSubmit = (e) => {
  e.preventDefault()
  // console.log(input)
  const toDo = input.value
  input.value = ""
  // createToDo(toDo)
  // store.dispatch({type: ADD_TODO, text: toDo})
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit)







// import { createStore } from "redux";

// const add = document.getElementById("add")
// const minus = document.getElementById("minus")
// const number = document.querySelector("span")

// number.innerText = 0;

// const ADD = "ADD"
// const MINUS = "MINUS"

// // const reducer = () => {}
// const countModifier = (count = 0, action) => {
//   // console.log(state);
//   // console.log(action)
//   // console.log("count: ", count, "action: ", action)

//   // if (action.type === "ADD") {
//   //   return count + 1;
//   // } else if (action.type === "MINUS") {
//   //   return count - 1;
//   // } else {
//   //   return count;
//   // }

//   switch (action.type) {
//     case ADD:
//       return count + 1
//     case MINUS:
//       return count - 1
//     default:
//       return count
//   }
// }

// // const store = createStore(reducer)
// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState()
// }

// countStore.subscribe(onChange);

// // countStore.dispatch({type : "ADD"});

// // console.log(countStore.getState())

// const handleAdd = () => {
//   countStore.dispatch({ type: ADD})
// }

// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS})
// }

// add.addEventListener("click", handleAdd)
// minus.addEventListener("click", handleMinus)
// // minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS"}))

// // let count = 0;

// // number.innerText = count

// // const updateText = () => {
// //   number.innerText = count
// // }

// // const handleAdd = () => {
// //   // console.log("add")
// //   count += 1
// //   updateText()

// // }

// // const handleMinus = () => {
// //   count -= 1
// //   updateText()
// // }

// // add.addEventListener("click", handleAdd)
// // minus.addEventListener("click", handleMinus)
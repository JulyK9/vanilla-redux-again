import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDo from '../components/ToDo'
import { actionCreators } from '../store'

// const Home = ({ toDos, addToDo }) => {
const Home = () => {
  // console.log(props)
  // console.log(rest)
  const [text, setText] = useState("")

  const onChange = (e) => {
    setText(e.target.value)
  }

  const toDo = useSelector(state => state)
  const dispatch = useDispatch()


  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(text)
    // addToDo(text)
    dispatch(actionCreators.addToDo(text));
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      {/* <ul>{JSON.stringify(toDo)}</ul> */}
      <ul>{toDo.map((el) => <ToDo key={el.id} {...el} />)}</ul>
    </>
  )
}

// // state를 받는 방법, store.getState() 같은..
// const mapStateToProps = (state) => {
//   // console.log(state, ownProps) 
//   return { toDos: state };
// }

// // store.dispatch 같은 방법
// const mapDispatchToProps = (dispatch) => {
//   // console.log(dispatch)
//   return {
//     addToDo: (text) => dispatch(actionCreators.addToDo(text))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
// // export default connect(null, mapDispatchToProps)(Home)

export default Home
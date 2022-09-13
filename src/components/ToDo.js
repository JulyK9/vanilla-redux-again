import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from "../store";


// const ToDo = ({ text, onBtnClick }) => {
const ToDo = ({ text, id }) => {

  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(actionCreators.deleteToDo(id));
  }

  return (
    <li>
      <Link to={`/${id}`}>{text} </Link>
      <button onClick={onDelete}>DEL</button>
    </li>
  );
}

// function mapDispatchToProps(dispatch, ownProps) {
//   // console.log(ownProps)
//   return {
//     onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
//   }
// }

export default ToDo
// export default connect(null, mapDispatchToProps)(ToDo);
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {

  const { id } = useParams()
  // console.log(id)
  
  const currentState = useSelector(state => state)
  const toDo = currentState.find(el => el.id === parseInt(id))
  console.log(toDo)

  // console.log("currentState: ", currentState);
  // console.log("currentState.id: ", currentState[0].id);

  return (
    <>
      <h1>{toDo.text}</h1>
      <h5>Created at: {toDo.id}</h5>
    </>
  );
}

export default Detail  
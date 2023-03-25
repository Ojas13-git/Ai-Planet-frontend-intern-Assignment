import React from 'react'
import ContestHead from "./Hackathon/ContestHead"
import ContestBody from './Hackathon/ContestBody'
import { useParams } from "react-router-dom";

function Contest() {
  let { id } = useParams();
  
  return (
    <>
      <ContestHead title={id} />
      <ContestBody title={id}/>
    </>
  )
}

export default Contest
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
const handleDeleteBook = () => {
  const { id } = useParams();
  const deleteBook = () => {
    axios.delete(`http://localhost:5000/deleteBook/${id}`)
      .then((result) => {
        console.log(result)
        Navigate('/')
      })
      .catch((error) => {
        setloading(false);
        alert("Error occured during deleting the book,check the console")
        console.log(error)
      })
  }
  return (
    <div>
      <button onClick={handleDeleteBook}></button>
    </div>
  )
}

export default DeleteBook

import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const showBook = () => {
const[book,setBooks]=useState({});
const[loading,setLoading]=useState(false)
const{id}=useParams();
useEffect(()=>{
  setLoading(true)
  axios.get(`http://localhost//getBook/${id}`)
.then((result)=>{console.log(result)
  setBooks(result.data)
})
.catch((error)=>{
  console.log(error);
  setLoading(false);
})

},[])


  return (
    <div className='show-book-details'>
           

           <div className='book-id'>
          <h1>Id:{book._id}</h1>
         </div>

         <div className='book-name'>
          <h1>Book Name:{book.title}</h1>
         </div>

         <div className='author-name'>
          <h1>Author Name:{book.author}</h1>
         </div>

         <div className='publish-year'>
          <h1>Publish-year:{book.publishYear}</h1>
         </div>

         <div className='created-at'>
          <h1>Create time:{new Date(book.createdAt).toString()}</h1>
         </div>

         <div className='updated-at'>
          <h1>Update time:{new Date(book.updatedAt).toString()}</h1>
         </div>
    </div>
  )
}

export default showBook

import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const HomePage = () => {
  const[books, setBooks]=useState([]);
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5000/')
        .then((result)=>{console.log(result.data.data)
          setBooks(result.data.data)
          setLoading(false)
        })
        .catch((error)=>{
          console.log("Error aayo hai")
          console.log(error)
          setLoading(false)
        })
  },[])
  return (
    <div className='main'>
      <div className='heading'>
      <h1>Book List</h1>
      <h1> <Link  className ='add-button'to={'/books/create'}>Add Book</Link> </h1>
      </div>
      <div className='table-design'>
        <table >
          <thead>
            <tr>
           <th>No</th>
           <th>Title</th>
           <th>Author</th>
           <th>Publish Year</th>
           <th>Operation</th>
           </tr>
          </thead>
          <tbody>
            {
              books.map((book,index)=>{
                <tr key={book._id}>
                  <td>{index+1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publishYear}</td>
                  <td>
                  <div className='operation'>
                      <Link to={'/books/details/:id'}>Show Details</Link>
                      <Link to={'/books/edit/:id'}>Edit </Link>
                      <Link to={'/books/delete/:id'}>Delete</Link>

                    </div>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default HomePage

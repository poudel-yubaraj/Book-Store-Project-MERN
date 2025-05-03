import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/getBook/${id}`)
      .then((result) => {
        setTitle(result.data.title)
        setAuthor(result.data.author)
        setPublishYear(result.data.publishYear)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    }
    axios.put(`http://localhost:5000/saveBook/${id}`, data)
      .then((result) => { console.log(result) })
      .catch((error) => {
        console.log(error);
        alert('An error happened. Please check the console.')
      })
  }
  return (
    <div className='input-field'>
      <div className='input-title'>
        <label htmlFor="">Title</label>
        <input type="text"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
      </div>
      <div className='input-title'>
        <label htmlFor="">Author</label>
        <input type="text"
          value={author}
          onChange={(e) => { setAuthor(e.target.value) }}
        />
      </div>

      <div className='input-title'>
        <label htmlFor="">Publish Year</label>
        <input type="text"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
        />
      </div>
      <button onClick={handleEditBook}>Save</button>
    </div>
  )
}

export default EditBook

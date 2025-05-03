import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.post("http://localhost/saveBook", data)
      .then((result) => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      })
  }
  return (
    <div className='input-field'>
      <div className='input-title'>
        <label htmlFor="">Title</label>
        <input type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='input-title'>
        <label htmlFor="">Author</label>
        <input type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className='input-title'>
        <label htmlFor="">Publish Year</label>
        <input type="text"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
        />
      </div>
      <button onClick={handleSaveBook}>Save</button>
    </div>
  )
}

export default CreateBook

import { useState } from 'react' 

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import './Write.css'

function Write () {
  const [ title, setTitle ] = useState("")
  const [ author, setAuthor ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ contents, setContents ] = useState("")

  const navigate = useNavigate()

  function handleTitle(event) {
    setTitle(event.target.value)
  }

  function handleAuthor(event) {
    setAuthor(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleText(event, editor) {
    const data = editor.getData()
    setContents(data)
  }

  async function sendWrite() {
    const { data } = await axios({
      method: "POST",
      url: "http://3.36.234.106:1208/",
      data: {
        title,
        contents,
        author,
        password
      }
    })

    if (data.success) {
      navigate(`/read/${data.insertId}`)
    }
  }

  return (
    <div className='Write'>
      <div className='input'>
        <input className='title' type="text" value={title} onChange={handleTitle} placeholder="title"></input>
        <input className='author' type="text" value={author} onChange={handleAuthor} placeholder="author"></input>
        <input className='password' type="password" value={password} onChange={handlePassword} placeholder="password"></input>
      </div>
      <CKEditor 
        editor={ClassicEditor} 
        data={contents}
        onChange={handleText}
      />
      <div className='button'>
        <button className='write' onClick={sendWrite}>Click!</button>
      </div>
    </div>
  )
}

export default Write
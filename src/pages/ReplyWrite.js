import { useState, useRef } from 'react'

import axios from 'axios'

import './ReplyWrite.css'

function ReplyWrite({ documentNo, text, setText }) {
  const [ author, setAuthor ] = useState("")
  const [ password, setPassword ] = useState("")

  const textareaRef = useRef(null)

  function handleAuthor(event) {
    setAuthor(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  async function sendReply() {
    const comment = textareaRef.current.value

    const { data } = await axios({
      method: "POST",
      url: `http://3.36.234.106:1208/${documentNo}`,
      data: {
        comment,
        author,
        password        
      }
    })

    if (data.success) {
      setAuthor("")
      setPassword("")
      textareaRef.current.value = ""
      setText({ ...text, reply: data.reply })
    }
  }

  return (
    <div className='ReplyWrite'>
      <div className='input'>
        <input className='author' type="text" value={author} onChange={handleAuthor} placeholder="author"></input>
        <input className='password' type="password" value={password} onChange={handlePassword} placeholder="password"></input>
      </div>
      <textarea className='reply-write' ref={textareaRef} placeholder="comment here"></textarea>
      <div className='reply-write-button'>
        <button className='reply-write-button' onClick={sendReply}>Click!</button>
      </div>
    </div>
  )
}
export default ReplyWrite
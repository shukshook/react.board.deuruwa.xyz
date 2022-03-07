import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ReplyList from './ReplyList'

import axios from 'axios'
import moment from 'moment'
import parse from 'html-react-parser'

import './Read.css'

function Read () {
  const { no } = useParams()
  const [ text, setText ] = useState({})
  
  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: "GET",
        url: `http://3.36.234.106:1208/${no}`
      })    

      if (data.success) {
        setText(data.document)         
      }
    })() 
  }, [ no ])

  return (
    <div className='Read'>
      <div className='title'>{text.title}</div>
      <div className='line-wrapper'>
        <div className='author'>{text.author}</div>
        <span className='border'>|</span>
        <div className='no'>{`No. ${text.no}`}</div>     
        <span className='border'>|</span> 
        <div className='datetime'>{moment(text.dateime).format("YYYY MM Do, h:mm:ss a")}</div>
      </div>
      <div className='contents'>{text.contents ? parse(text.contents): ""}</div>      
      <ReplyList replyList={text.reply} text={text} setText={setText} documentNo={no}/>
    </div>
  )
}

export default Read
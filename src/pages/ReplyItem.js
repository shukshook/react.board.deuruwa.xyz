import moment from 'moment'

import './ReplyItem.css'

function ReplyItem ({ replyItem }) {
  return (
    <div className='ReplyItem'>
      <div className='no'>{replyItem.no}</div>
      <div className='comment'>{replyItem.comment}</div>
      <div className='author'>{replyItem.author}</div>
      <div className='datetime'>{moment(replyItem.datetime).format("YYYY MM Do, h:mm:ss a")}</div>
    </div>
  )
}

export default ReplyItem
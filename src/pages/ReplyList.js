import ReplyWrite from './ReplyWrite'
import ReplyItem from './ReplyItem'

import './ReplyList.css'

function ReplyList ({ replyList, text, setText, documentNo }) {
  return (
    <div className='ReplyList'>
      <ReplyWrite documentNo={documentNo} text={text} setText={setText}/>
      {replyList?.map((o) => {
        return (<ReplyItem replyItem={o} key={o.no}/>)
        })
      }
    </div>
  )
}

export default ReplyList
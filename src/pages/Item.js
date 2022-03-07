import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import './Item.css'

function Item ({ item }) {

  const navigate = useNavigate()

  function goRead() {
    navigate(`/read/${item.no}`)
  }

  return (
    <tr className='Item' onClick={goRead}>
        <td className='no'>{item.no}</td>
        <td className='title'>{item.title}</td>
        <td className='author'>{item.author}</td>
        <td className='datetime'>{moment(item.datetime).format("YYYY MM Do, h:mm:ss a")}</td>
    </tr>
  )
}

export default Item
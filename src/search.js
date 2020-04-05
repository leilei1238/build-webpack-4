import React from 'react'
import ReactDom from 'react-dom'
import logo from './images/logo.png'
import './search.less'

const Search = () => {
  return (
    <div className='search-text'>
      Search Text1234
      <img src={logo} />
    </div>
  )
}

ReactDom.render(<Search />, document.getElementById('root'))

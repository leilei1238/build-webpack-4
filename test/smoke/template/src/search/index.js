import React from 'react'
import ReactDom from 'react-dom'
import common from '../../common'
import './search.less'
import logo from './images/logo.png'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Text: null,
    }
  }
  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      })
    })
  }
  render() {
    const { Text } = this.state
    return (
      <div className='search-text'>
        Search Text
        {Text ? <Text /> : null}
        {common()}
        <img src={logo} alt='' onClick={this.loadComponent.bind(this)} />
      </div>
    )
  }
}
ReactDom.render(<Search />, document.getElementById('root'))

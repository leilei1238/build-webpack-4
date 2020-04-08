const React = require('react')
const logo = require('./images/logo.png')
const largeNumber = require('lei-large-number')

require('./search.less')

class Search extends React.Component {
  constructor() {
    super(...arguments)

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
    const addResult = largeNumber(999, 1)
    return (
      <div className='search-text'>
        {Text ? <Text /> : null}
        {addResult}
        搜索文字的内容
        <img src={logo} alt='' onClick={this.loadComponent.bind(this)} />
      </div>
    )
  }
}
module.exports = <Search />

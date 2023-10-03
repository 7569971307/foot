import {Component} from 'react'

import axios from 'axios'

class App extends Component {
  state = {name: ''}

  submit = e => {
    const {name} = this.state
    e.preventDefault()
    const data = {
      id: 1,
      first_name: name,
    }

    axios
      .post(
        'https://my-first-project-7e52e-default-rtdb.firebaseio.com/register.json',
        data,
      )
      .then(() => alert('submitted'))
  }

  onClick = e => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        task:
        <input type="text" onChange={this.onClick} />
        <button onClick={this.click}>submit</button>
      </form>
    )
  }
}
export default App
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ExampleComponent from './components/exampleComponent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'it works!'
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          {this.state.msg}
          <ExampleComponent />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App

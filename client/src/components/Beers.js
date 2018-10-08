import React, {Fragment} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Beers extends React.Component {
  state = {beers:[]}

  componentDidMount() {
    axios.get('/api/all_beers')
      // Just to ensure that beers wont be empty
      // .then( res => this.setState({ beers: [ {id:1,name:'TestBeer'}, ...res.data.entries ] }) )
      .then( res => {
        this.setState({ beers: res.data.entries }) 
      // debugger // just to see how github shows modified lines
      })
  }

  render() {
    const { beers } = this.state
    return (
      <div>
        {/* <h1 style='color:green'>Beer List</h1> */}
        <h1 style={{color:'red'}}>Beer List</h1>
        <ul>
          { beers.map( b => {
              <li key={b.id}>
                <Link to={`/beers/${b.name}`} style={{color:'red'}}>
                  {b.name}
                </Link>
              </li>
            })
          }
        </ul>
      </div>
    )
  }


}

export default Beers
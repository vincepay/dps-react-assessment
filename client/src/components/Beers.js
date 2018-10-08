import React, {Fragment} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Beers extends React.Component {
  state = {beers:[]}

  componentDidMount() {
    axios.get('/api/all_beers')
      // .then( res => this.setState({ beers: [ {id:1,name:'TestBeer'}, ...res.data.entries ] }) )
      .then( res => {
        this.setState({ beers: res.data.entries }) 
      debugger
      })
  }

  render() {
    const { beers } = this.state
    debugger
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
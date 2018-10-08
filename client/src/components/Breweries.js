import React, {Fragment} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Breweries extends React.Component {
  state = {breweries:[]}

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => this.setState({ breweries: [ {id:1,name:'TestBrewery'}, res.data] }) )
  }

  render() {
    const { breweries } = this.state
    return (
      <Fragment>
        <ul>
          { breweries.map( b => {
              <li key={b.id}>
                <Link to={`/brewery/${b.name}`}>
                  {b.name}
                </Link>
              </li>
            })
          }
        </ul>
      </Fragment>
    )
  }


}

export default Breweries
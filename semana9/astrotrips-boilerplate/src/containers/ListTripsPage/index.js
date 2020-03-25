import React from 'react';
import { connect } from 'react-redux';
import { fetchListTrips } from '../../actions';

import MenuBar from '../../components/MenuBar';

class ListTripsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getTrips();
  }

  render() {

    const list = this.props.trips === undefined ? false : this.props.trips.map(item => {
      return <li key={item.id}>{item.name}</li>
    })

    return (
      <div>
        <MenuBar />
        <ul>
          {this.props.trips === undefined ? 'Carregando...' : list}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trips: state.trips.trips
})


const mapDispatchToProps = dispatch => {
  return {
    getTrips: () => dispatch(fetchListTrips())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);
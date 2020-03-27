import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { decideCandidate } from '../../actions';

import MenuBar from '../MenuBar';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const WrapperTripDetails = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
`

const WrapperPaper = styled(Paper)`
  max-width: 1200px;
  min-width: 400px;
  padding: 2px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`

class TripDetailsPage extends React.Component {

  componentDidMount() {
    if (window.localStorage.getItem('token') === null) {
      this.props.goToHome()
    }
  }

  render() {
    const trip = this.props.tripDetail;

    return (
      <div>
        <MenuBar />
        <WrapperTripDetails>
          <WrapperPaper>
            <h3>Detalhes</h3>
            <p>Título: {trip.name}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays}</p>
            <p>Data: {trip.date}</p>
            <p>Descrição: {trip.description}</p>

          </WrapperPaper>
          <WrapperPaper>
            <h3>Inscritos</h3>
            <List>
              {trip.candidates.map(candidate => {
                return (
                  <ListItem key={candidate.id}>
                    <ListItemText primary='Nome' secondary={candidate.name}/>
                    <ListItemText primary='Idade' secondary={candidate.age} />
                    <ListItemText primary='Profissão' secondary={candidate.profession} />
                    <ListItemText primary='País' secondary={candidate.country} />
                    <ListItemText primary='Mensagem'secondary={candidate.applicationText} />
                    <Buttons>
                      <Button onClick={() => this.props.decideCandidate(true, trip.id, candidate.id)} variant="contained" color="primary">Aprovar</Button>
                      <Button onClick={() => this.props.decideCandidate(false, trip.id, candidate.id)} variant="contained">Reprovar</Button>
                    </Buttons>
                    <hr />
                  </ListItem>
                )
              })}
            </List>
          </WrapperPaper>
        </WrapperTripDetails>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tripDetail: state.trips.tripDetail
})

const mapDispatchtoProps = dispatch => {
  return {
    decideCandidate: (approve, tripId, candidateId) => dispatch(decideCandidate(approve, tripId, candidateId)),
    goToHome: () => dispatch(push(routes.home))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(TripDetailsPage);
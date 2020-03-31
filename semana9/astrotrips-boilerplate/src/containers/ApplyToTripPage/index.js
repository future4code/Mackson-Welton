import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import MenuBar from '../MenuBar';
import { fetchListTrips, applyToTrip } from '../../actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const WrapperListTrips = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  justify-content: center;
`

const PaperForm = styled(Paper)`
  min-width: 400px;
  padding: 2px;
  text-align: center;
`

const Form = styled.form`
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`

const Input = styled(TextField)`
  width: 250px;
`

class ApplyToTripPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      applicationText: '',
      profession: '',
      country: '',
      planet: ''
    }
  }

  componentDidMount() {
    this.props.getTrips();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    const { name, age, applicationText, profession, country, planet } = this.state;

    return (
      <div>
        <MenuBar />
        <WrapperListTrips>
          <PaperForm>
            {this.props.trips === undefined ? 'Carregando...' :
              <Form onSubmit={() => this.props.applyToTrip({ name, age, applicationText, profession, country, planet })}>
                <Input
                  name='name' type='text' value={name}
                  onChange={this.handleInputChange}
                  label='Nome do Candidato'
                  InputProps={{ inputProps: { pattern: '[A-z.,_-´`áéíóúÁÉÍÓÚàãÃçÇ!? ]{5,}' } }}
                  required={true}
                />
                <Input
                  name='age' type='number' value={age}
                  onChange={this.handleInputChange}
                  label='Idade do Candidato'
                  InputProps={{ inputProps: { min: 18 } }}
                  required={true}
                />
                <Input
                  select name='planet'
                  value={planet}
                  onChange={this.handleInputChange}
                  required={true}
                >
                  {this.props.trips.map(trip => {
                    return <MenuItem key={trip.id} value={trip.id}>{trip.name} - {trip.planet}</MenuItem>;
                  })}
                </Input>
                <Input
                  name='applicationText' type='text' value={applicationText}
                  onChange={this.handleInputChange} label='Por que devemos escolher você?'
                  InputProps={{ inputProps: { pattern: '[A-z.,_-´`áéíóúÁÉÍÓÚàãÃçÇ!? ]{30,}' } }}
                  required={true}
                />
                <Input
                  name='profession' type='text' value={profession}
                  onChange={this.handleInputChange} label='Profissão'
                  InputProps={{ inputProps: { pattern: '[A-z.,_-´`áéíóúÁÉÍÓÚàãÃçÇ!? ]{10,}' } }}
                  required={true} />
                <Input
                  name='country' type='text' value={country}
                  onChange={this.handleInputChange} label='País'
                  InputProps={{ inputProps: { pattern: '[A-z.,_-´`áéíóúÁÉÍÓÚàãÃçÇ!? ]{5,}' } }}
                  required={true} />
                <Button type='submit' variant='contained' color='primary'>Me Candidatar</Button>
              </Form>
            }
          </PaperForm>
        </WrapperListTrips>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trips: state.trips.trips
});

const mapDispatchToProps = dispatch => {
  return {
    getTrips: () => dispatch(fetchListTrips()),
    applyToTrip: dataCandidate => dispatch(applyToTrip(dataCandidate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyToTripPage);
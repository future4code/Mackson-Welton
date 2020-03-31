import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';

import MenuBar from '../MenuBar';
import { createTrip } from '../../actions';

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
  max-width: 700px;
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

class CreateTripPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      planet: '',
      date: '',
      description: '',
      durationInDays: ''
    }
  }

  componentDidMount() {
    if (window.localStorage.getItem('token') === null) {
      this.props.goToHome()
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnSubmit = (tripData) => {
    const dates = new Date(tripData.date.split("-").join("/"));
    const newTrip = {
      ...tripData, 
      date: `${('0' + dates.getDate()).slice(-2)}/${('0' + (dates.getMonth() + 1)).slice(-2)}/${dates.getFullYear()}`
    };
    this.props.setTrip(newTrip)
  }


  render() {

    const { name, planet, date, description, durationInDays } = this.state;

    const currentDate = new Date();
    const dateString =
      `${currentDate.getFullYear()}-${("0" + (currentDate.getMonth() + 1)).slice(-2)}-${currentDate.getDate()}`;

    return (
      <div>
        <MenuBar />
        <WrapperListTrips>
          <PaperForm>
            <Form onSubmit={() => this.handleOnSubmit({name, planet, date, description, durationInDays})}>
              <Input
                name='name' type='text' value={name}
                onChange={this.handleInputChange}
                label='Nome da Viagem'
                InputProps={{ inputProps: { pattern: '[A-z.,_-´`áéíóúÁÉÍÓÚàãÃçÇ!? ]{5,}' } }}
                required={true}
              />
              <Input
                select name='planet'
                value={planet}
                onChange={this.handleInputChange}
                required={true}
              >
                <MenuItem value='Mercúrio'>Mercúrio</MenuItem>
                <MenuItem value='Vênus'>Vênus</MenuItem>
                <MenuItem value='Terra'>Terra</MenuItem>
                <MenuItem value='Marte'>Marte</MenuItem>
                <MenuItem value='Júpiter'>Júpiter</MenuItem>
                <MenuItem value='Saturno'>Saturno</MenuItem>
                <MenuItem value='Urano'>Urano</MenuItem>
                <MenuItem value='Netuno'>Netuno</MenuItem>
              </Input>
              <Input
                name='date' type='date' value={date}
                onChange={this.handleInputChange} InputProps={{ inputProps: { min: dateString } }}
                required={true}
              />
              <Input
                name='description' type='text' value={description}
                onChange={this.handleInputChange} label='Descrição'
                InputProps={{ inputProps: { pattern: '[A-z.,_-´`áéíóúÁÉÍÓÚàãÃçÇ!? ]{30,}' } }}
                required={true}
              />
              <Input
                name='durationInDays' type='number' value={durationInDays}
                onChange={this.handleInputChange} label='Duração da Viagem' InputProps={{ inputProps: { min: '50' } }} />
              <Button type='submit' variant='contained' color='primary'>Criar</Button>
            </Form>
          </PaperForm>
        </WrapperListTrips>
      </div>
    )
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    setTrip: tripData => {
      dispatch(createTrip(tripData))
    },
    goToHome: () => dispatch(push(routes.home))
  }
}

export default connect(null, mapDispatchtoProps)(CreateTripPage);
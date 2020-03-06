import React from "react";
import axios from "axios";

const baseUrl = "https://www.metaweather.com/api"

class SearchWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryState: [],
      stateName: "Brasília",
      stateNames: [{
        brasilia: "Brasília",
        rioDeJaneiro: "Rio de Janeiro",
        salvador: "Salvador",
        saoPaulo: "São Paulo"
      }],
      consolidatedData: []
    }
  }

  componentDidMount() {
    this.fetchCountryState(this.state.stateName);
  }

  componentDidUpdate() {
    this.fetchCountryState(this.state.stateName);
  }

  fetchCountryState = async stateName => {
    try {
      const response = await axios.get(`${baseUrl}/location/search/?query=${stateName}`);
      this.setState({ countryState: response.data });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChangeSelect = (event) => {
    this.setState({
      stateName: event.target.value
    })
  }

  handleClickConsult = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/location/${id}`);
      this.setState({ consolidatedData: response.data.consolidated_weather });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const stateInfo = this.state.countryState.map(item => {
      return (
        <div key={item.woeid}>
          <button onClick={() => { this.handleClickConsult(item.woeid) }}>Consultar clima</button>
        </div>
      )
    })

    const weatherInfo = this.state.consolidatedData.map(item => {

      const urlImg = `https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`
      return (
      <div key={item.id}>
        <p>{item.applicable_date}</p>
        <img src={urlImg} width="30px"/>
      </div>
      )
    })

    return (
      <div>
        <select onChange={this.handleChangeSelect}>
          <option value={this.state.stateNames.brasilia}>Brasília</option>
          <option value={this.state.stateNames.rioDeJaneiro}>Rio de Janeiro</option>
          <option value={this.state.stateNames.salvador}>Salvador</option>
          <option value={this.state.stateNames.saoPaulo}>São Paulo</option>
        </select>
        {stateInfo}
        {weatherInfo}
      </div>);
  }
}

export default SearchWeather;

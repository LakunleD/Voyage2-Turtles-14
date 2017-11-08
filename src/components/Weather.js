import React, {Component} from 'react';
import axios from 'axios';


class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: null,
            location: null,
            desc: null
        }
        this.loadWeather = this.loadWeather.bind(this);
    }

    loadWeather(){
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + this.props.latitude + '&lon=' + this.props.longitude + '&APPID=ac6f25866691f01371c7621cfe724cfb')
            .then ((response) => {

                let weatherResponse = response.data;

                let temp = weatherResponse.main.temp;
                let location = weatherResponse.name;
                let desc = weatherResponse.weather[0].description;

                console.log(temp)
                console.log(location)
                console.log(desc)

                this.setState({temp, location,desc});
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    componentDidMount() {
        this.loadWeather()
    }

    render() {
        return (
            <div>
                {this.state.temp}<br/>
                {this.state.location}<br/>
                {this.state.desc} <br/>
            </div>
        )
    }


}

export default Weather;
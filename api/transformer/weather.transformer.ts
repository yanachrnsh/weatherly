import {WeatherInformationModel} from "@model/weather-information.model";
import {temperatureFormatter} from "@utils/temperatureFormatter";
import {WeatherResponseDto} from "@api/dto/weather.response.dto";


export const toWeatherInformationModel = (weatherResponse: WeatherResponseDto): WeatherInformationModel => {
  const weatherInformation = {
      city: weatherResponse.name,
      weatherDescription: {
          ...weatherResponse.weather[0],
          visibility: weatherResponse.visibility,
          wind: weatherResponse.wind,
          humidity: weatherResponse.main.humidity,
          pressure: weatherResponse.main.pressure,
      },
      temperature: {
          temp: temperatureFormatter(weatherResponse.main.temp),
          feels_like: temperatureFormatter(weatherResponse.main.feels_like),
          temp_min: temperatureFormatter(weatherResponse.main.temp_min),
          temp_max: temperatureFormatter(weatherResponse.main.temp_max),
      }
  };
  return weatherInformation


}
;
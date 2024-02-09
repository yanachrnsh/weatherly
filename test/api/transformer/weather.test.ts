import {WeatherResponseDto} from "@api/dto/weather.response.dto";
import {toWeatherInformationModel} from "@api/transformer/weather.transformer";

describe('transform openweathermap object to weather information model', () => {
    it('1', () => {
        const testWeatherDescription: WeatherResponseDto = {
            "coord": {"lon": 24.0297, "lat": 49.8397},
            "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
            "base": "stations",
            "main": {
                "temp": 276.38,
                "feels_like": 274.24,
                "temp_min": 276.38,
                "temp_max": 276.38,
                "pressure": 1000,
                "humidity": 100,
                "sea_level": 1000,
                "grnd_level": 965
            },
            "visibility": 176,
            "wind": {"speed": 2.2, "deg": 170, "gust": 6.81},
            "clouds": {"all": 100},
            "dt": 1707481644,
            "sys": {"country": "UA", "sunrise": 1707457554, "sunset": 1707492620},
            "timezone": 7200,
            "id": 702550,
            "name": "Lviv",
            "cod": 200
        };


        const result = toWeatherInformationModel(testWeatherDescription);
        console.log('result', result);
    });
});

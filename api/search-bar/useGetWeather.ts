import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WEATHER_API_KEY } from '@env';
import { CityGeoRequestDto } from '@api/dto/city-geo.request.dto';
import { WeatherResponseDto } from '@api/dto/weather.response.dto';
import { WeatherInformationModel } from '@model/weather-information.model';
import { toWeatherInformationModel } from '@api/transformer/weather.transformer';

const getWeather = async (cityGeo: CityGeoRequestDto) => {
	const { latitude, longitude } = cityGeo;

	try {
		const response = await axios
			.get<WeatherInformationModel>(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`,
				{
					transformResponse: response => {
						return toWeatherInformationModel(JSON.parse(response) as WeatherResponseDto);
					},
				}
			)
			.then(response => response.data);

		return response;
	} catch (error) {
		console.error('Error fetching weather data', error);
	}
};

export const useGetWeather = (cityGeo: CityGeoRequestDto) => {
	const query = useQuery({
		queryKey: ['weather', `${cityGeo.latitude}-${cityGeo.longitude}`],
		queryFn: () => getWeather(cityGeo),
	});

	return query;
};

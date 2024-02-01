import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WEATHER_API_KEY } from '@env';
import { CityGeoRequestDto } from './dto/city-geo.request.dto';
import { WeatherResponseDto } from './dto/weather.response.dto';

const getWeather = async (cityGeo: CityGeoRequestDto) => {
	const { lat, lon } = cityGeo;

	try {
		const response = await axios.get<WeatherResponseDto>(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`,
			{}
		);

		const data = response.data;
		return { data };
	} catch (error) {
		console.error('Error fetching weather data', error);
	}
};

export const useGetWeather = (cityGeo: CityGeoRequestDto) => {
	const query = useQuery({
		queryKey: ['weather'],
		queryFn: () => getWeather(cityGeo),
		enabled: false,
	});

	return query;
};

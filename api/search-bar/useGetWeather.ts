import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WEATHER_API_KEY } from '@env';
import { CityGeoRequestDto } from '@api/dto/city-geo.request.dto';
import { WeatherResponseDto } from '@api/dto/weather.response.dto';

const getWeather = async (cityGeo: CityGeoRequestDto) => {
	const { latitude, longitude } = cityGeo;

	try {
		const response = await axios.get<WeatherResponseDto>(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`,
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
		queryKey: ['weather', `${cityGeo.latitude}-${cityGeo.longitude}`],
		queryFn: () => getWeather(cityGeo),
	});

	return query;
};

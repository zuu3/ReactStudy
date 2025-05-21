import { useEffect, useState } from 'react';

interface Weather {
  icon: string;
  main: string;
  description: string;
}

interface WeatherResponse {
  name: string;
  sys: {
    country: string;
  };
  weather: Weather[];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

const sleep = (delay: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, delay));

const fetchWeather = async (): Promise<WeatherResponse> => {
  await sleep(2000);

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Busan&lang=ko&units=metric&appid=daa29dbd3bae8cc0c8bda06073ee4f52`
  );

  if (!res.ok) {
    throw new Error(res.statusText || '날씨 정보를 불러오지 못했습니다.');
  }

  return res.json();
};

export default function QueryPre() {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    setError('');

    fetchWeather()
      .then(res => setData(res))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error)     return <p>Error: {error}</p>;
  if (!data)     return <p>날씨 정보가 없습니다.</p>;

  const weather = data.weather[0];

  return (
    <figure>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
        alt={weather.main}
      />
      <figcaption>
        <p>지역: {data.name}, {data.sys.country}</p>
        <p>날씨: {weather.description}</p>
        <p>온도: {data.main.temp.toFixed(1)}℃</p>
        <p>습도: {data.main.humidity}%</p>
        <p>풍속: {data.wind.speed.toFixed(1)} m/s</p>
      </figcaption>
    </figure>
  );
}
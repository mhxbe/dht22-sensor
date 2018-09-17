const sensor = require('node-dht-sensor');

const DHT_TYPE = 22;
const GPIO_PIN = 4;


sensor.read(DHT_TYPE, GPIO_PIN, (err, temperature, humidity) => {
  console.log(`Temperature: ${temperature}°C`);
  console.log(`Humidity: ${humidity}%`);
});

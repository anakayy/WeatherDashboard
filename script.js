var apiKey = "4304f4875aa2cd2aeb35b9fea64bc893";
var today = moment().format("L");
var searchHistoryList = [];

function currentCondition(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      displayWeather(data, city);
    });
  });
}

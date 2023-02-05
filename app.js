fetch("https://waterservices.usgs.gov/nwis/iv/?format=json&site=02184500&parameterCd=00065,00060")
  .then(response => response.json())
  .then(data => {
    let riverLevel = data.value.timeSeries[0].values[0].value[0].value;
    document.querySelector("#riverLevel").innerHTML = "The current river level of the Blackwater River in Virginia is: " + riverLevel + " feet";
  })
  .catch(error => console.error(error));

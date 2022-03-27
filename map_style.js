var map = L.map('map').setView([51.049999, -114.066666], 11);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'saeidkai/ckzunwfkz00au14qtj6o62zoy',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoic2FlaWRrYWkiLCJhIjoiY2t6aDh6ODRhMTc1NjJvb2J3eGdmbTJzNSJ9.SK0ibPRnLKmFmJ8hoVorXA'
}).addTo(map);

function icons(){
    const green = '#00FF00'

    const greenMarkerHtmlStyles = `
    background-color: ${green};
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`

    const greenIcon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${greenMarkerHtmlStyles}" />`
    })
    const blue = '#0000FF'

    const blueMarkerHtmlStyles = `
    background-color: ${blue};
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`

    const blueIcon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${blueMarkerHtmlStyles}" />`
    })
    const red = '#FF0000'

    const redMarkerHtmlStyles = `
    background-color: ${red};
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`

    const redIcon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${redMarkerHtmlStyles}" />`
    });
    return [blueIcon, greenIcon, redIcon];
}

function pinLocation(lat,long,temp){
    
    const blueIcon = icons()[0];
    const greenIcon = icons()[1];
    const redIcon = icons()[2];
    if (temp<10) {
        var marker = L.marker([lat, long], {
            icon: blueIcon
          }).addTo(map);
    }else if (10<=temp && temp<30){
        var marker = L.marker([lat, long], {
            icon: greenIcon
          }).addTo(map);
    }else if(30<=temp){
        var marker = L.marker([lat, long], {
            icon: redIcon
          }).addTo(map);
    }else{
        var marker = L.marker([lat, long]).addTo(map);
    }
    marker.bindPopup('<h1><p>Temperture: ' + temp + '</p></h1><h1><p>Lat: ' + lat + '</p></h1><h1><p>Long: ' + long+'</p></h1>').openPopup()

}

function geoJsonLocation(myGeoJson){
    lat = myGeoJson['features'][0]['geometry']['coordinates'][0][0];
    long = myGeoJson['features'][0]['geometry']['coordinates'][0][1];
    temp = myGeoJson['features'][0]['properties']['temp'][0][0];

    
    const blueIcon = icons()[0];
    const greenIcon = icons()[1];
    const redIcon = icons()[2];
    if (temp<10) {
        var marker = L.marker([lat, long], {
            icon: blueIcon
          }).addTo(map);
    }else if (10<=temp && temp<30){
        var marker = L.marker([lat, long], {
            icon: greenIcon
          }).addTo(map);
    }else if(30<=temp){
        var marker = L.marker([lat, long], {
            icon: redIcon
          }).addTo(map);
    }else{
        var marker = L.marker([lat, long]).addTo(map);
    }
    marker.bindPopup('<h1><p>Temperture: ' + temp + '</p></h1><h1><p>Lat: ' + lat + '</p></h1><h1><p>Long: ' + long+'</p></h1>').openPopup()

}
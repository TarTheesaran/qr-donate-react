function initMap() {
    // The location of Uluru
    const uluru = {
        lat: 16.4779832,
        lng: 102.8194191
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
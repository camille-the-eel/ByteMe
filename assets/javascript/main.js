// AIzaSyAkRgKvL87NTW0sZv9yDSOpQRPXaVV61h8  google API Key
// 200235024-32c4fc71813961608e163497918dd634 mtb project API key

// Google Multiple Results for brewery url: https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.5407,-77.4360&radius=1000&keyword=brewery&key=AIzaSyAkRgKvL87NTW0sZv9yDSOpQRPXaVV61h8

// https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200235024-32c4fc71813961608e163497918dd634
var mtbObject
function call() {
    var queryURL = "https://www.mtbproject.com/data/get-trails?lat=37.5407&lon=-77.4360&maxDistance=2&key=200235024-32c4fc71813961608e163497918dd634";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        mtbObject = response;
        console.log(mtbObject);
        trailList();
    });
}

function trailList() {
    for (var i = 0; i < mtbObject.trails.length; i++) {
        var trailName = mtbObject.trails[i].name;
        console.log(trailName);
        var trailItem = $("<li>")
        var trailLink = $("<a href='" + mtbObject.trails[i].url + "'></a>");
        trailLink.attr("target", "_blank");
        trailLink.text(trailName);
        trailItem.append(trailLink);
        $("#mtbList").append(trailItem);
    }
}
$(document).ready(function () {
    call();

    // end of doc ready
});
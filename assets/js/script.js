console.log("teststart");

function myFunction(){
    console.log("the submit button was pressed myFunsction");
    var searchTerm = document.querySelector("#inputCity").value;

    fetch(
        "https://geocode.xyz/" + searchTerm + "&auth=12178405404274779136x18400"
    )
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response.data[0]);
    });
}

console.log("testend");
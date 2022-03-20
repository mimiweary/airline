/*let ST = "Sky Team";
let OW = "One World";
let SA = "Star Alliance"

function getInfo(jsonp) {
    fetch('https://kayak.com/h/mobileapis/directory/airlines/homework')
    .then((res) =>{
        return res.jsonp();
    })
}
    .then((post) =>{
        for (let index = 0; index < 1 ; index++)) {
            div.innerHTML +=
            <div class="one">
                <img src="css/images/aa.png" alt="American Airlines small logo"/>American Airlines - Star Alliance
            </div>



        con = con + 1;
}}
fetch alliance, number, website
fetch "site", "alliance", "name"
*/

/*let airlines = document.getElementsByClassName('one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve');

airlines.addEventListener("mouseover", function(event)) {
    var dataTarget = event.target.getAttribute('data-target')
    textInfo.querySelector('[data-index="'+ dataTarget +'"]').style.display='block';
}, (false);

var airlinesLeave = document.getElementsByClassName('one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve');
    airlinesLeave.forEach(function(airlines){
        airline.addEventListener("mouseleave", function( event ) {    
        var dataTarget = event.target.getAttribute('data-target')
        textInfo.querySelector('[data-index="'+ dataTarget +'"]').style.display='none';
}, (false);
})
*/

/*import fetchJsonp from "fetch-jsonp";

fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
    jsonpCallback: "jsonp"
  })
    .then((res) => res.json())
    .then((data) => console.log(data)); */



import fetchJsonp from "fetch-jsonp";

fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
    jsonpCallback: "jsonp"
})
    .then((res) => res.json())
    .then((data) => console.log(data));

let airlines = document.getElementsByClassName('one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve');

    airlines.addEventListener("mouseover", function( _jsonp ) {
        var dataTarget = jsonpCallback.target.getAttribute('site', 'alliance', 'name')
        textInfo.querySelector('[data-index="'+ dataTarget +'"]').style.display='block';
}, (false)
    
    , airlinesLeave = document.getElementsByClassName('one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve')
        airlinesLeave.forEach(function(){
            airlines.addEventListener("mouseleave", function( _jsonp ) {    
            var dataTarget = jsonpCallback.target.getAttribute('data-target')
            textInfo.querySelector('[data-index="'+ dataTarget +'"]').style.display='none';
    }, (false)

}
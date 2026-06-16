const events = [
{
name:"Tech Conference",
date:"20 July 2026",
location:"Bangalore",
price:"₹999",
category:"Technology"
},
{
name:"Music Festival",
date:"10 August 2026",
location:"Hyderabad",
price:"₹1499",
category:"Music"
},
{
name:"Business Summit",
date:"15 September 2026",
location:"Mumbai",
price:"₹799",
category:"Business"
}
];

const eventContainer =
document.getElementById("eventContainer");

function displayEvents(data){

eventContainer.innerHTML="";

data.forEach(event=>{

eventContainer.innerHTML+=`
<div class="card">
<h3>${event.name}</h3>
<p>${event.date}</p>
<p>${event.location}</p>
<p>${event.price}</p>
<p>${event.category}</p>
</div>
`;

});

}

displayEvents(events);

document.getElementById("searchBox")
.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=
events.filter(event=>
event.name.toLowerCase()
.includes(value)
);

displayEvents(filtered);

});

document.getElementById("categoryFilter")
.addEventListener("change",function(){

let category=this.value;

if(category==="All"){
displayEvents(events);
return;
}

let filtered=
events.filter(event=>
event.category===category
);

displayEvents(filtered);

});

document.getElementById("bookingForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name=
document.getElementById("name").value;

let email=
document.getElementById("email").value;

if(name==="" || email===""){
alert("Please fill all required fields");
return;
}

alert("Ticket Booked Successfully!");

this.reset();

});

const events = [
{
id:1,
name:"Tech Conference 2026",
date:"2026-07-20",
location:"Bangalore",
price:999,
category:"Technology"
},
{
id:2,
name:"Music Festival",
date:"2026-08-10",
location:"Hyderabad",
price:1499,
category:"Music"
}
];

events.forEach(event=>{
eventContainer.innerHTML += `
<div class="card">
<h3>${event.name}</h3>
<p>${event.date}</p>
<p>${event.location}</p>
<p>₹${event.price}</p>
</div>
`;
});

document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

if(name==""){
alert("Name Required");
return;
}

alert("Booking Successful");

});

searchBox.addEventListener("keyup",()=>{

let value=
searchBox.value.toLowerCase();

let filtered=
events.filter(event =>
event.name
.toLowerCase()
.includes(value));

displayEvents(filtered);

});

categoryFilter.addEventListener("change",()=>{

let category=
categoryFilter.value;

let filtered=
events.filter(event =>
category==="All" ||
event.category===category);

displayEvents(filtered);

});

const eventDate=
new Date("July 20, 2026");

setInterval(()=>{

let now=
new Date();

let diff=
eventDate-now;

document.getElementById("timer")
.innerHTML=
Math.floor(diff/1000);

},1000);

function darkMode(){
document.body.classList.toggle("dark");
}
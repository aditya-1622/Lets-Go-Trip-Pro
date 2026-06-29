document.getElementById("topBtn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const places = [
{
name:"ANDAMAN AND NICOBAR ISLAND",
image:"ANDAMAN AND NICOBAR ISLAND.jpg",
cost:"3000 Rupees / Per Person",
time:"3 days",
location:"SOUTHEASTERN EDGE OF BAY OF BENGAL"
},

{
name:"BARA IMAMBARA",
image:"BARA IMAMBARA LKO.jfif",
cost:"1200 / Per Person",
time:"1 day",
location:"LUCKNOW UTTAR PRADESH"
},

{
name:"INDIA GATE",
image:"India Gate DELHI.jpg",
cost:"1500 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"KASHI GHAT",
image:"KASHI GANGA GHAT.jpg",
cost:"1400 / Per Person",
time:"1 day",
location:"VARANASI UTTAR PRADESH"
},

{
name:"HAUZ KHAS",
image:"Hauz Khas DELHI.jpg",
cost:"800 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"ISKCON TEMPLE",
image:"ISKCON Temple DELHI.jpg",
cost:"1500 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"AKSHARDHAM TEMPLE",
image:"Akshardha Temple Delhi.jpg",
cost:"800 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"BEAS RIVER",
image:"BEAS RIVER HIMANCHAL.jpg",
cost:"2000 / Per Person",
time:"2 days",
location:"HIMACHAL PRADESH INDIA"
},

{
name:"GANDHI SAGAR DAM",
image:"GANDHI SAGAR DAM UJJAIN.jpg",
cost:"1700 / Per Person",
time:"1 day",
location:"UJJAIN MADHYA PRADESH"
},

{
name:"HILL STATION",
image:"HILL STATION SHIMLA.jpg",
cost:"2500 / Per Person",
time:"2 days",
location:"SHIMLA HIMACHAL PRADESH"
},

{
name:"KAL BHAIRAV TEMPLE",
image:"KAL BHAIRAV TEMPLE.jpg",
cost:"700 / Per Person",
time:"1 day",
location:"UJJAIN MADHYA PRADESH"
},

{
name:"UJJAINI DAM",
image:"UJJAINI DAM.jpg",
cost:"500 / Per Person",
time:"1 day",
location:"UJJAIN MADHYA PRADESH"
},

{
name:"RASHTRAPATI BHAVAN",
image:"Rashtrapati Bhavan DELHI.jpg",
cost:"1500 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"SRINAGAR",
image:"SRINAGAR JAMMU KASHMIR.jpg",
cost:"1600 / Per Person",
time:"1 day",
location:"SRINAGAR JAMMU KASHMIR"
},

{
name:"QUEEN OF HILLS",
image:"QUEEN OF HILLS HIMANCHAL.jpg",
cost:"1500 / Per Person",
time:"1 day",
location:"HIMACHAL PRADESH"
}
];

places.push(

{
name:"PARVATI RIVER",
image:"PARVATI RIVER.jpg",
cost:"1500 / Per Person",
time:"1 day",
location:"HIMACHAL PRADESH"
},

{
name:"PABBAR VALLEY",
image:"PABBAR VALLEY.jpg",
cost:"1000 / Per Person",
time:"1 day",
location:"HIMACHAL PRADESH"
},

{
name:"RAJ GHAT PARK",
image:"Raj Ghat DELHI.jpg",
cost:"600 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"RISHIKESH",
image:"RISHIKESH UTTARAKHAND.jpg",
cost:"1200 / Per Person",
time:"1 day",
location:"UTTARAKHAND"
},

{
name:"SAROJINI NAGAR",
image:"SAROJANI NAGAR MARKET DELHI.jpg",
cost:"Cost depends on tourist",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"QUTUB MINAR",
image:"Qutub Minar DELHI.jpg",
cost:"1000 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"RED FORT",
image:"Red Fort DELHI.jpg",
cost:"1500 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"TAJ MAHAL",
image:"TAJ MAHAL.jpg",
cost:"1500 / Per Person",
time:"1 day",
location:"AGRA UTTAR PRADESH"
},

{
name:"SHIPRA RIVER",
image:"SHIPRA RIVER UJJAIN.jpg",
cost:"1400 / Per Person",
time:"1 day",
location:"UJJAIN MADHYA PRADESH"
},

{
name:"NARMADA RIVER",
image:"NARMADA RIVER UJJAIN.jpg",
cost:"1200 / Per Person",
time:"1 day",
location:"UJJAIN MADHYA PRADESH"
},

{
name:"MANSA DEVI TEMPLE",
image:"MANSA DEVI TEMPLE HIMANCHAL.jpg",
cost:"1200 / Per Person",
time:"1 day",
location:"HIMACHAL PRADESH"
},

{
name:"PHOENIX PLASSIO",
image:"PHOENIX PLASSIO LKO.jfif",
cost:"Taxi charges depend on distance",
time:"1 day",
location:"LUCKNOW UTTAR PRADESH"
},

{
name:"LOTUS TEMPLE",
image:"Lotus Temple DELHI.jpg",
cost:"1300 / Per Person",
time:"1 day",
location:"DELHI INDIA"
},

{
name:"LULU MALL",
image:"LULLU MALL.jfif",
cost:"Taxi charges depend on distance",
time:"1 day",
location:"LUCKNOW UTTAR PRADESH"
},

{
name:"KERALA",
image:"KERALA VIEW.jpg",
cost:"3000 / Per Person",
time:"3 days",
location:"KERALA INDIA"
}

);

const container = document.getElementById("cards-container");

places.forEach(place => {

    container.innerHTML += `
    <div class="card">

        <div class="zoom-img">
            <div class="img-card">
                <img src="${place.image}" alt="${place.name}">
            </div>
        </div>

        <div class="text">
            <h2>${place.name}</h2>

            <p class="cost">${place.cost}</p>

            <div class="card-box">
                <p class="time">${place.time}</p>
                <p class="location">${place.location}</p>
            </div>
        </div>

    </div>
    `;
});


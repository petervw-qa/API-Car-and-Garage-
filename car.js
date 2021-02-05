`use strict`

'use strict';

// C - Create - Fetch POST (CAR CREATE)

const cName = document.querySelector("#name");
const cMake = document.querySelector("#make");
const cModel = document.querySelector("#model");
const cDoors = document.querySelector("#doors");
const cColour = document.querySelector("#colour")

const postToCar = ()=> {
    const ownerName = cName.value;
    const carMake = cMake.value;
    const carModel = cModel.value;
    const carDoors = cDoors.value;
    const carColour = cColour.value;

let data = {
    name:ownerName,
    make:carMake,
    model:carModel,
    doors:carDoors,
    colour:carColour,
    garage:{
        id:1
    }
}
console.log(data)

fetch("http:localhost:9092/car/create",{
    method:`POST`,
    headers:{
        "Content-type":"application/json"
    },
    body: JSON.stringify(data)
})
.then((res)=>res.json())
.then((d)=>console.info(`Request was all good with json response ${d}`))
.catch((err)=> console.error(err));

}

// // R - Read BY ID - Fetch GET (CAR READ)

const getGarageByID = ()=> {

    const params = new URLSearchParams(window.location.search);
    console.log(param);
    for(const param of params){
        console.log(param);
    }
    let id = params.get("id");
    console.log(`the id is ${id}`);
    fetch(`http:localhost:9092/car/read/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          console.error(`status ${response.status}`);
          return;
        }
        response.json().then((data) => console.info(data));
      })
      .catch((err) => console.error(err));
    
    }
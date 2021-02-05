`use strict`

//fetch for a garage

//create variable for createGarage()
const myGarage = {
    name :"London"
}
//create variable const that takes our fetch and create method.

const createGarage = () =>{ 
     fetch(`http://localhost:9092/garage/create`, { 
    method : `POST`,
    headers :{
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(myGarage)
    })
    .then((response) => response.json())
    .then((data) => console.info(`Response succeeded with json ${data}`))
    .catch((err)=> console.error(err));

}

const readAllGarage = () => {
    fetch (`http://localhost:9092/garage/read`)
    .then((response)=> {
        if (response.status !==200){
            console.log(`Unexpected error occurred ${response.status}`);
            return;
        }

        response.json()
        .then((data)=> console.log(data));
    }) .catch((err)=> console.error(err));
}

const getId = new URLSearchParams (window.location.search);
const printById = () => {
    console.log(getId);
    for (const id of getId){
        console.log(id);
    }
}


const readIdGarage = () => {
    let gID = getId.get("gID");
    console.log(`the gID is ${gID}`);
    fetch (`http://localhost:9092/garage/read/${gID}`)
    .then((response) => {
        if (response.status !==200){
            console.log(`Unexpected error has occurred ${response.status}`);
            return;
        }
        response.json()
        .then((data) => console.log(data));
    })
    .catch((err) => console.error(err));
}

const updateGarage = () => {

    fetch (`http://localhost:9092/garage/update/{id}`, {
        method : `PUT`,
        headers : {
            "Content-Type" : "applcation/json"
    },
    body: JSON.stringify(readIdGarage, )
})
}



// import json file
import json_data from './data.json' assert {type: "json"}

// import data as array
import {import_data} from "./import_data.js";

// import RadioStation class
import {RadioStation} from "./RadioStation.js";



// 1) import json file, assign ids, create array of objects

let radios = []
let id = 1;


// 1A) import from data.json

json_data.data.forEach((item)=>{
    radios.push(new RadioStation(id, item.title, item.country))
    ++id;
})


import_data.forEach((item)=>{
    radios.push(new RadioStation(id, item.title, item.country))
    ++id;
})

// 1B) import form import_data.js

import_data.forEach((item)=>{
    radios.push(new RadioStation(id, item.title, item.country))
    ++id;
})


// 2) using objects

// 2A) get a property of particular radio object using getter

console.log(radios.find((radio) => radio.id === 1).get_id())
console.log(radios.find((radio) => radio.id === 1).get_title())
console.log(radios.find((radio) => radio.id === 1).get_country())

console.log(radios.find((radio) => radio.id === 2).get_id())
console.log(radios.find((radio) => radio.id === 2).get_title())
console.log(radios.find((radio) => radio.id === 2).get_country())


// 2B) set a property of particular radio object using setter - example change title of the object

radios.find((radio) => radio.id === 1).set_title("Radiožurnál")
console.log(radios.find((radio) => radio.id === 1).get_title())


// 2C) go through an array of objects

radios.forEach((item)=>{

    console.log(item.get_id())
    console.log(item.get_title())
    console.log(item.get_country())

})

// ---------------------------------------------------------------------------
console.log("All radio objects")
console.log(radios)







import {RadioStation} from "./RadioStation.js";
import {import_data} from "./import_data.js";


// 1) import json file, assign ids, create array of objects

let radios = []
let id = 1;

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


// 2B) get a property of particular radio object using getter - example change title of the object

radios.find((radio) => radio.id === 1).set_title("Radiožurnál")
console.log(radios.find((radio) => radio.id === 1).get_title())


// 2C) go through an array of objects

radios.forEach((item)=>{

    console.log(item.get_id())
    console.log(item.get_title())
    console.log(item.get_country())

})

// ---------------------------------------------------------------------------








export class RadioStation {
    id;
    #title;
    #country;

    // constructor
    constructor(id, title, country) {
        this.id = id;
        this.#title = title;
        this.#country = country;
    }

    // getters

    get_id(){
        return this.id;
    }

    get_title(){
        return this.#title;
    }

    get_country(){
        return this.#country;
    }

    // setters
    set_id(id){
        this.id = id;
    }

    set_title(title){
        this.#title = title;
    }

    set_country(country){
        this.#country = country;
    }

}
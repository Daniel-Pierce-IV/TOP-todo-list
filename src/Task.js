export default class {
    #title;
    #options;
    
    constructor(title, options = {}){
        this.#title = title;
        this.#options = options;

        if(this.#options.isDone === undefined){
            this.#options.isDone = false;
        }
    }

    get title(){
        return this.#title;
    }

    get description(){
        return this.#options.description;
    }

    get deadline(){
        return this.#options.deadline;
    }

    get note(){
        return this.#options.note;
    }

    get priority(){
        return this.#options.priority;
    }

    get subtasks(){
        return [...this.#options.subtasks];
    }

    get isDone(){
        return this.#options.isDone;
    }
}
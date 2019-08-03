export default class Product{
    id: number;
    name?: string; // parametro opcional
    constructor(id:number, name: string){
        this.id = id;
        this.name = name;
    }
}
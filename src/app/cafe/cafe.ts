export class Cafe {
    id: number;
    nombre: String;
    tipo: String;
    region: String;
    sabor: String;
    altura: number;
    imagen: String;

    constructor(
        id: number,
        nombre: String,
        tipo: String,
        region: String,
        sabor: String,
        altura: number,
        imagen: String
    ){
        this.id= id;
        this.nombre= nombre;
        this.tipo= tipo;
        this.region= region;
        this.sabor= sabor;
        this.altura= altura;
        this.imagen= imagen;

    }
}

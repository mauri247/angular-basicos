import { Component } from "@angular/core";

@Component ({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeCompoenet{
    nombre : string = ' Ironman'
    edad: number = 45;

    get nombreCapitalizado() : string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarHeroe(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 20;
    }
}
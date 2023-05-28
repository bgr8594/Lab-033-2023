export interface Lugar {
    nombre: string;

    ubicacion?: any = {latitud:'', longitud:''};

    constructor(){

        this.nombre=''

    }

    public setUbicacion(latitud: string, longitud: string){

        this.ubicacion.latitud= latitud;

        this.ubicacion.longitud = longitud;

    }
}

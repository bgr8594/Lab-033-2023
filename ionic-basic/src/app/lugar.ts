export interface Lugar {
    nombre: string;

    ubicacion?: any = {latitud:'', longitud:''};
    latitud: number=0;
    longitud:number=0;
    
    constructor(){

        this.nombre=''

    }

    public setUbicacion(latitud: string, longitud: string){

        this.ubicacion.latitud= latitud;

        this.ubicacion.longitud = longitud;

    }
}

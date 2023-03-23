import { Injectable } from '@angular/core';
import { Receta } from '../interface/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetas: Receta[]=[
    {
      id: 1,
      nombre: 'Enchiladas suizas',
      image: 'https://assets.unileversolutions.com/recipes-v2/179095.jpg',
      ingredientes: ['8 tortillas de maíz', '2 pechugas de pollo cocidas y deshebradas', '1 taza de crema', '1 taza de queso manchego rallado', '1 taza de salsa verde', 'Aceite de maíz', 'Sal al gusto']
    },
    {
      id: 2,
      nombre: 'Arroz con camarones',
      image: 'https://cdn7.kiwilimon.com/recetaimagen/26250/23265.jpg',
      ingredientes: ['1 libra de camarones pelados y desvenados', '2 tazas de arroz', '4 tazas de agua', '1 pimiento rojo cortado en cubos pequeños', '1 cebolla mediana picada', '3 dientes de ajo picados', '3 cucharadas de aceite de oliva', 'Sal y pimienta al gusto']
    },
    {
      id: 3,
      nombre: 'Salmón a la parrilla con salsa de limón y eneldo',
      image: 'https://www.daisybrand.com/wp-content/uploads/2019/12/GRILLED-SALMON-W-LEMON-DILL-SAUCE-770x628.jpg',
      ingredientes: ['4 filetes de salmón', '2 limones', '2 cucharadas de eneldo fresco picado', '3 dientes de ajo picados', '3 cucharadas de aceite de oliva', 'Sal y pimienta al gusto']
    },
    {
      id: 4,
      nombre: 'Ensalada de aguacate y camarones',
      image: 'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/b3e7187b-b0ab-4ddb-8423-2dcd3396c18b.jpg',
      ingredientes: ['1 libra de camarones pelados y desvenados', '2 aguacates cortados en cubos', '1 taza de maíz dulce', '1 pimiento rojo cortado en cubos pequeños', '1 cebolla mediana picada', '2 dientes de ajo picados', '3 cucharadas de aceite de oliva', 'Sal y pimienta al gusto']
    }
  ];
  

  constructor() { }

  getReceta(idReceta: number){
    return {...this.recetas.find(
      (receta: Receta) =>{
        return receta.id ===idReceta
      }
    )};
  }

  getRecetas(){
    return [...this.recetas];
  }
}

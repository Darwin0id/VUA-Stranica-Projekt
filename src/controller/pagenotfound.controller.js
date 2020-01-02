//IMPORT
import RenderController from '../controller/render.controller';

//AKO STRANICA NE POSTOJI
export default function() 
{
    new RenderController('../templates/error.html', 'app').HTML(); //NAPRAVI RENDER PREDZADANI TEMPLATE
}
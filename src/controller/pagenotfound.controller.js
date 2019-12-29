import RenderController from '../controller/render.controller';

export default function() 
{
    new RenderController('../templates/error.html', 'app').HTML();
}
import { Routes } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

export const routes: Routes = [
    {
        path:'',
        component:ImageListComponent
    },
    {
        path:'image/:id',
        component:ImageDetailsComponent
    }
];

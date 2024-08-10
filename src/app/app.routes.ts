import { RouterLink, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"products",component:ProductsComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"contactus",component:ContactusComponent}

    
];

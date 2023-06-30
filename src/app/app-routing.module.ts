import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BestsellersListComponent } from './components/bestsellers-list/bestsellers-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FollowUsComponent } from './components/follow-us/follow-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '',
    // pathMatch: 'full',
    component: MainBodyComponent,
  },
  {
    path: '',
    component: AboutUsComponent,
  },
  {
    path: '',
    component: BestsellersListComponent,
  },
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: '',
    component: FollowUsComponent,
  },
  {
    path: '',
    component: FooterComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '',
    component: NavigationComponent,
  },
  {
    path: 'product-item',
    component: ProductItemComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

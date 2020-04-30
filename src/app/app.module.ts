import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe,SortByPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductDetailGuard } from './product-detail.guard';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    SortByPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    SigninComponent,
    ForgotComponent,
    CreateaccountComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    

    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'product/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'signin', component: SigninComponent},
      { path: 'forgot', component: ForgotComponent},
      { path: 'createaccount', component: CreateaccountComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

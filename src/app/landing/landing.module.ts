import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingModule} from './landing-routing.module';
import {IndexPageComponent} from './index-page/index-page.component';


@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingModule} from './landing-routing.module';
import {IndexPageComponent} from './index-page/index-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {StakingGuidePageComponent} from './staking-guide-page/staking-guide-page.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    IndexPageComponent,
    StakingGuidePageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class LandingModule {
}

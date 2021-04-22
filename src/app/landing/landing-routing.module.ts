import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexPageComponent} from './index-page/index-page.component';
import {StakingGuidePageComponent} from './staking-guide-page/staking-guide-page.component';

const routes: Routes = [
  {
    path: 'staking',
    component: StakingGuidePageComponent,
  },
  {
    path: '',
    component: IndexPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}

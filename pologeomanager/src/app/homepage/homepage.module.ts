import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage.component';
import { HomepageScrollingImagesModule } from './homepage-scrolling-images/homepage-scrolling-images.module';
import { RegisterModule } from './register/register.module';
import { LogInPanelModule } from './log-in-panel/log-in-panel.module';
import { RegisterPanelModule } from './registerPanel/register-panel.module';
import { VideoModule } from './video/video.module';
import { AccountModule } from './account/account.module';
import { MonitorComponent } from './monitor/monitor.component';
import { MonitorModule } from './monitor/monitor.module';

import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
  HomepageComponent,
  ],

  imports: [
    CommonModule,

    HomepageScrollingImagesModule,
    RegisterModule,
    LogInPanelModule,
    RegisterPanelModule,
    VideoModule,
    AccountModule,
    MonitorModule,

    MatSidenavModule

  ],

  exports:[
    HomepageComponent

  ]
})
export class HomepageModule { }

import { Injectable } from '@angular/core';
import { AlertsComponent } from './components/alerts/alerts.component';
import { HomeComponent } from './components/home/home.component';
import { MilestonesComponent } from './components/milestones/milestones.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { TfrComponent } from './components/tfr/tfr.component';
import { TfrsComponent } from './components/tfrs/tfrs.component';
import { RouteFull } from './RouteFull';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  public static RouteList : RouteFull[] = [{name:'Home',showOnNavigationBar:true,
    path:'Home',component: HomeComponent
  },
  {
    name:'TFRs',showOnNavigationBar:true,path:'tfrs',component: TfrsComponent
  },
  {
    name:'Home',showOnNavigationBar:false,path:'tfr/:id',component: TfrComponent
  },
  {
    name:'Home',showOnNavigationBar:false,path:'tfr',component: TfrComponent
  },
  {
    name:'Milestones',showOnNavigationBar:true,path:'milestones',component: MilestonesComponent
  },
  {
    name:'Alerts',showOnNavigationBar:true,path:'alerts',component: AlertsComponent
  },
  {
    name:'Reports',showOnNavigationBar:true,path:'reporting',component: ReportingComponent
  },
  {
    name:'Permissions',showOnNavigationBar:true,path:'permissions',component: PermissionsComponent
  },

  { name:'Home',showOnNavigationBar:false,path: '**', redirectTo:'home' }];
  constructor() { }
}

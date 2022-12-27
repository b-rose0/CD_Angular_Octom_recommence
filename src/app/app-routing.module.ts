import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordPannelComponent } from './login/forget-password-pannel/forget-password-pannel.component';
import { LoginComponent } from './login/login.component';
import { SignInFormComponent } from './login/sign-in-form/sign-in-form.component';
import { SignUpPannelComponent } from './login/sign-up-pannel/sign-up-pannel.component';
import { PagesComponent } from './pages/pages.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { ConversationComponent } from './_pages/messenger/conversation/conversation.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { FilesComponent } from './_pages/files/files.component';
import { MessengerComponent } from './_pages/messenger/messenger.component';
import { SettingsComponent } from './_pages/settings/settings.component';

const routes: Routes = [
  { path: 'octom', component :  PagesComponent, 
    children: [
      { path: 'dashboard', 
        component: DashboardComponent,
        children: 
        [{path: 'messages/:conversationId', 
          component: ConversationComponent}]
      },
      { path: 'activity', 
        component: ActivityComponent },
      { path: 'ebooks', 
        component: EbooksComponent },
      { path: 'files', 
        component: FilesComponent },
      { path: 'messenger', 
        component: MessengerComponent },
      { path: 'settings', 
        component: SettingsComponent },
      { path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'}
    ]
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full' },
  { path: 'login', 
    component: LoginComponent,
    children: [
      {path: 'signIn', redirectTo: '', pathMatch: 'full'},
      { path: 'forgetPassword',
      component: ForgetPasswordPannelComponent},
    { path: '',
      component: SignInFormComponent},
    { path: 'signUp',
      component: SignUpPannelComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

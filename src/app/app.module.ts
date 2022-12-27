import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './header/notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { CheckboxComponent } from './_components/checkbox/checkbox.component';
import { ButtonComponent } from './_components/button/button.component';
import { InputComponent } from './_components/input/input.component';
import { SignUpPannelComponent } from './login/sign-up-pannel/sign-up-pannel.component';
import { ForgetPasswordPannelComponent } from './login/forget-password-pannel/forget-password-pannel.component';
import { BottomPannelComponent } from './login/bottom-pannel/bottom-pannel.component';
import { SignInFormComponent } from './login/sign-in-form/sign-in-form.component';
import { LoginPannelComponent } from './login/login-pannel/login-pannel.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { FilesComponent } from './_pages/files/files.component';
import { MessengerComponent } from './_pages/messenger/messenger.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { PagesComponent } from './pages/pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConversationInfosComponent } from './_pages/messenger/conversation-infos/conversation-infos.component';
import { ConversationComponent } from './_pages/messenger/conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    NotificationsComponent,
    LoginComponent,
    CheckboxComponent,
    ButtonComponent,
    InputComponent,
    SignUpPannelComponent,
    SignInFormComponent,
    ForgetPasswordPannelComponent,
    BottomPannelComponent,
    LoginPannelComponent,
    DashboardComponent,
    ActivityComponent,
    EbooksComponent,
    FilesComponent,
    MessengerComponent,
    SettingsComponent,
    PagesComponent,
    ConversationInfosComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

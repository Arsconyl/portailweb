import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { UserCardComponent } from './layout/user-card/user-card.component';
import { TrombinoscopeComponent } from './pages/trombinoscope/trombinoscope.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireRemoteConfigModule } from '@angular/fire/remote-config';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import {QuillModule} from 'ngx-quill';

import {MaterialModule} from './modules/material/material.module';

import {environment} from '../environments/environment';
import { HtmleditorComponent } from './htmleditor/htmleditor.component';
import { HtmlarticlesComponent } from './htmlarticles/htmlarticles.component';
import { DropzoneDirective } from './file/directive/dropzone.directive';
import { UploaderComponent } from './file/uploader/uploader.component';
import { UploadTaskComponent } from './file/upload-task/upload-task.component';
import { FileCardComponent } from './file/file-card/file-card.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import { DashboardMatComponent } from './dashboard-mat/dashboard-mat.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HtmlsinglearticleComponent } from './htmlsinglearticle/htmlsinglearticle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserCardComponent,
    TrombinoscopeComponent,
    DashboardComponent,
    HtmleditorComponent,
    HtmlarticlesComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    FileCardComponent,
    EditUserComponent,
    DashboardMatComponent,
    HtmlsinglearticleComponent
  ],
  entryComponents: [EditUserComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireRemoteConfigModule,
    AngularFireStorageModule,
    MaterialModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QuillModule.forRoot({
      placeholder: 'Insérer du texte ici...'
    }),
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    AngularFireAuthGuard,
    AuthGuardService,
    UserService,
    AuthService,
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

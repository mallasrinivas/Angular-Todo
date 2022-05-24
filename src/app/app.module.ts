import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconModule } from '@ant-design/icons-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,NzButtonModule,
    AppRoutingModule,NzFormModule,DragDropModule,MatButtonModule,
    FormsModule,NzCardModule,IconModule,MatIconModule,
    HttpClientModule,NzGridModule,NzInputModule,
    BrowserAnimationsModule,NzIconModule,NzLayoutModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

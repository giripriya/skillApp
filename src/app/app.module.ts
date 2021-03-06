import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SkillSearchComponent } from './skill-search/skill-search.component';
import { SkillDisplayComponent } from './skill-display/skill-display.component';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SkillAddComponent } from './skill-add/skill-add.component';



@NgModule({
  declarations: [
    AppComponent,
    SkillSearchComponent,
    SkillDisplayComponent,
    SkillAddComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, InlineEditorModule, AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

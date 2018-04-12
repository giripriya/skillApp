import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillSearchComponent } from './skill-search/skill-search.component';
import { SkillDisplayComponent } from './skill-display/skill-display.component';




@NgModule({
  declarations: [
    AppComponent,
    SkillListComponent,
    SkillSearchComponent,
    SkillDisplayComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, InlineEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

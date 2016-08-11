import { NgModule } from '@angular/core'
import { BrowserModule  } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { Ng2TableModule } from '../../'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ng2TableModule],
  bootstrap: [AppComponent],
})
export class AppModule { }

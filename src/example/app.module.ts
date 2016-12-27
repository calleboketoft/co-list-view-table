import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { ExampleTableComponent} from './example-table.component'
import { Ng2TableModule } from '../../'

@NgModule({
  declarations: [AppComponent, ExampleTableComponent],
  imports: [BrowserModule, Ng2TableModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

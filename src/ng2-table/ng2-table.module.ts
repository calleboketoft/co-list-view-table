import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Ng2TableComponent } from './ng2-table.component'
import { SearchPipe } from './search.pipe'
import { SearchInputComponent } from './search-input.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    Ng2TableComponent,
    SearchInputComponent,
    SearchPipe
  ],
  exports: [Ng2TableComponent]
})
export class Ng2TableModule { }

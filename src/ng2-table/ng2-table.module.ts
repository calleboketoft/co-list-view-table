import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Ng2TableComponent } from './ng2-table.component'
import { FilterPipe } from './filter.pipe'
import { FilterInputComponent } from './filter-input.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    Ng2TableComponent,
    FilterInputComponent,
    FilterPipe
  ],
  exports: [Ng2TableComponent]
})
export class Ng2TableModule { }

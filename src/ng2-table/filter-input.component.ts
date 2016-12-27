import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'filter-input-cmp',
  styles: [`
    .form-control {
      max-width: 200px;
      font-weight: 400;
    }
  `],
  template: `
    <input type="text"
      [value]="filterValue || ''"
      class="form-control"
      (keyup)="valueChange($event)"
      placeholder="{{placeholder}}">
  `
})
export class FilterInputComponent {
  @Input() field
  @Input() filterValue
  @Input() placeholder = 'Filter'
  @Output() filter = new EventEmitter()

  public valueChange ($event) {
    this.filter.emit({
      field: this.field,
      value: $event.target.value
    })
  }
}

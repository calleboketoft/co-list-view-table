import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
  selector: 'search-input-cmp',
  styles: [`
    .form-control {
      max-width: 200px;
      font-weight: 400;
    }
  `],
  template: `
    <input type='text'
      class='form-control'
      (keyup)='valueChange($event)'
      placeholder='{{placeholder}}'>
  `
})
export class SearchInput {
  @Input() field;
  @Input() placeholder = 'Search';
  @Output() search = new EventEmitter();

  public valueChange ($event) {
    this.search.emit({
      field: this.field,
      value: $event.target.value
    })
  }
}

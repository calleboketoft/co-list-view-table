import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'example-dynamic-component',
  template: `
    <button (click)="buttonClicked($event)">{{ toggle ? 'Hello' : 'Goodbye' }} {{ data }}</button>
  `
})
export class ExampleDynamicComponent {
  @Input() data: any
  @Output() change = new EventEmitter<boolean>()
  public toggle = true

  public buttonClicked($event: Event): void {
    $event.stopPropagation()

    this.toggle = !this.toggle
    this.change.next(this.toggle)
  }
}

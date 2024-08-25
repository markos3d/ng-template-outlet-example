import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
})
export class SelectorComponent<T extends { name: string }> {
  picked: T | undefined;

  @Input()
  label: string | undefined;
  @Input()
  options: T[] = [];

  @Input("selectedTemplate")
  selectedTemplateRef: TemplateRef<any> | undefined;

  @ContentChild("optionTemplate", { static: false })
  optionTemplateRef: TemplateRef<any> | undefined;

  @Output()
  selectionChanged = new EventEmitter<T>();

  selectOption(option: T) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}


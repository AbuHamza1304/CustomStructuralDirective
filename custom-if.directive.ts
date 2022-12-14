import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
})
export class CustomIfDirective implements OnChanges {
  @Input() appCustomIf: boolean = true;

  // In order to create a Structural Directive, we need two things:
    // 1. What to add or remove
    // 2. From where to add or remove

  constructor(
    // what is the template thats need to render
    private templateRef: TemplateRef<any>,
    // where is the template that needs to render
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.appCustomIf) {
      // To show/add the element element in view container
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // To remove the element from the view container
      this.viewContainerRef.clear();
    }
  }
}

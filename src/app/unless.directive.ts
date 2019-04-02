import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // Get điều kiện thông qua @Input
  // Mỗi khi condition thay đổi, muốn execute a method --> implement a setter (method)
  // This still is a property (just a setter of the property) --> là method sẽ đc chạy mỗi khi property thay đổi
  @Input('appUnless') set unless(condition: boolean) { // Mặc định property name là 'unless'
    if ( ! condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // templateRef sẽ trỏ tới cái template lúc đó
  // vcRef (View container reference): the place in the document where we want to render it (nó marks the place where we placed this directive in the document, có thể thấy qua dev tool)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { 

  }

}

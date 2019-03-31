import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Angular tự inject khi nó khởi tạo:
  // - elRef: tham chiếu tới ele chứa directive này.
  // - renderer: có 1 số helper (setStyle(),...) để hỗ trợ mình tương tác với ele lấy được từ trên. Gián tiếp access the DOM
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}

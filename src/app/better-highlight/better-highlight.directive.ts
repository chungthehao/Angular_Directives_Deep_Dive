import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; // initial value

  // Angular tự inject khi nó khởi tạo:
  // - elRef: tham chiếu tới ele chứa directive này.
  // - renderer: có 1 số helper (setStyle(),...) để hỗ trợ mình tương tác với ele lấy được từ trên. Gián tiếp access the DOM
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // Dùng HostListener decorator để bắt sự kiện của ele chưa directive này!
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // C1
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // C2
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // C1
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // C2
    this.backgroundColor = 'transparent';
  }

}

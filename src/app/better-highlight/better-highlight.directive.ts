import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Angular tự inject khi nó khởi tạo:
  // - elRef: tham chiếu tới ele chứa directive này.
  // - renderer: có 1 số helper (setStyle(),...) để hỗ trợ mình tương tác với ele lấy được từ trên. Gián tiếp access the DOM
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    this.backgroundColor = this.defaultColor; // initial value
  }

  // Dùng HostListener decorator để bắt sự kiện của ele chưa directive này!
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // C1
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // C2
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // C1
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // C2
    this.backgroundColor = this.defaultColor;
  }

}

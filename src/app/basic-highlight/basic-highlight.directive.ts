import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

    // Tự lôi cái ele mà direct này được đặt vào (trong tương lai)
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}
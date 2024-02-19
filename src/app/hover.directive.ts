import { Directive, ElementRef, Host, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit{

  // @Input() color:string='red';
  @Input() hinvHover:string='red';


  constructor( private renderer:Renderer2,private element:ElementRef, @Inject(DOCUMENT) private document:Document) { 
    console.log(this.element.nativeElement);
  }
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(this.element.nativeElement,
      'backgroundColor',this.hinvHover)
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    )
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    )
  }
}

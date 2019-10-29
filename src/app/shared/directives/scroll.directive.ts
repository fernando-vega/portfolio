import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appScroll]'
})

export class ScrollDirective {

  private timeoutQueue: number;
  count = 0;
  status = false;

  constructor() {}


  @HostListener('wheel', ['$event'])onWheel(event) {

      if (this.timeoutQueue) {
          clearTimeout(this.timeoutQueue);
      }

      this.timeoutQueue = window.setTimeout(() => {
          if (event.wheelDelta < 0) {
              // DOWN
              this.getNextProject();
          } else {
              // TOP
              this.getPrevProject();
          }
      }, 800);
  }

  @HostListener('touchstart', ['$event']) onTouchStart(event: Event): void {
    if (event) {
      const size = document.childNodes.length + 1;
      if (this.count < size && this.status === false) {
        this.count = this.count + 1;
        this.getNextProject();
        if (this.count === 3) {
          this.status = true;
        }
      } else if (this.status === true) {
        this.count -= 1;
        this.getPrevProject();
        if (this.count === 1) {
          this.status = false;
        }
      }
    }
  }

  getNextProject() {
    const el = document.querySelector('div.active');
    if (el.nextElementSibling != null) {
      el.classList.remove('active');
      el.nextElementSibling.classList.add('active');
    }
  }
  getPrevProject() {
    const el = document.querySelector('div.active');
    if (el.previousElementSibling != null) {
      el.classList.remove('active');
      el.previousElementSibling.classList.add('active');
    }
  }
}

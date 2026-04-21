import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cedric-Ateba';

  cursorX = 0;
  cursorY = 0;
  cursorHover = false;
 
  ngOnInit(): void {
    document.addEventListener('mousemove', (e) => {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
    });
 
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => this.cursorHover = true);
      el.addEventListener('mouseleave', () => this.cursorHover = false);
    });
  }
}

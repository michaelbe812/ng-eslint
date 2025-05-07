import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  title = 'ng-eslint-config';
  @Input() test = '';
}

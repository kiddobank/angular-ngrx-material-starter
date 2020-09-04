import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello-test',
  templateUrl: './hello-test.component.html',
  styleUrls: ['./hello-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloTestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

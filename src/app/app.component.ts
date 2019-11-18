import { Component } from '@angular/core';
import { Idea } from './idea';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>我最喜欢的衣服是{{myIdea.name}}</h2>
  <p>Ideas:</p>
  <ul>
    <li *ngFor="let idea of ideas">
      {{ idea.name }}
    </li>
  </ul>
  <p *ngIf="ideas.length > 3">有好多想买的东西</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '想不出名字的大标题';
  ideas = [
    new Idea(1, '格子长裙'),
    new Idea(2, '毛呢大衣'),
    new Idea(3, '蕾丝纱裙'),
    new Idea(4, '雪纺碎花裙'),
  ];
  myIdea = this.ideas[0];
}

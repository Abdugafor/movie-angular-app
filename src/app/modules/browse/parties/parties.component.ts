import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})

export class PartiesComponent {
  @Input() parties: any = []
}

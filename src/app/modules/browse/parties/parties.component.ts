import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})

export class PartiesComponent {
  @Input() parties: any = []

  onALert() {
    alert('Parties is on development :). See popular movies below')
  }
}

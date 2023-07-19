import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  onConImg(img) {
    if (img.target.files && img.target.files[0]) {

      console.log(img.target.files[0])
  }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss'
})
export class PersonalPageComponent {

  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://as2.ftcdn.net/v2/jpg/02/45/56/35/1000_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg',
    adoptedPets: [
      {
        id: 1,
        name: 'Buddy',
        type: 'Dog',
        image: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/giant-dog-breeds/english-mastiff-cropped.jpg',
      },
      {
        id: 2,
        name: 'Mittens',
        type: 'Cat',
        image: 'https://via.placeholder.com/100',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

}

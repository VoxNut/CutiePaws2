import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss'
})
export class IntroduceComponent {

  loginStatus : boolean = false;

  loginToggle(){
    this.loginStatus = !this.loginStatus;
  }

  ngOnIniit(){
  }

   imageList = [
    {title : "Những bé mèo đang chờ được nhận nuôi",
      content : "mong các bạn hãy cho bé một cơ hội trở thành thành viên trong gia đình bạn",
      image : "https://www.hanoipetadoption.com/admin/user-content/Carousel/09f71287-416c-4d28-9532-6a38f1141f1d.jpeg"},
    {title : "Những bé chó đang chờ được nhận nuôi",
      content : "mong các bạn hãy cho bé một cơ hội trở thành thành viên trong gia đình bạn",
      image : "https://www.hanoipetadoption.com/admin/user-content/Carousel/b7ae8a65-6bf9-4fb8-ae3d-635a887ed5ef.jpeg"},
   ]

   newslist = [
    {title : "Hawkesbury CAS: Positive change for our companions",
      content :"There are some incredibly passionate folks working hard to transform the traditional and outdated model of council pounds into one that prioritises the wellbeing of homeless pets, and they deserve the spotlight shined on them! We recently spoke with Rob Wainhouse, Coordinator for Animal Services and Community Safety, who has been with Hawkesbury Companion Animal Shelter for just over a year. Working with a fantastic team at the shelter, Rob has driven impressive positive change for homeless pets and the wider community",
      image : "https://res.cloudinary.com/petrescue/image/upload/h_330,w_330,c_fill,g_face,f_auto,q_auto:best/c_limit,w_700/v1730089127/k4uclwhnqwprdqyqjtjt.jpg"
    },
    {title : "Why can’t I find the rescue organisation I’m looking for?",
      content :"Wondering why you can’t find the rescue organisation you're looking for on PetRescue? Learn more about why a rescue organisatio",
      image : "https://res.cloudinary.com/petrescue/image/upload/c_fill,f_auto,g_face,h_500,q_80,w_500/yfj7e4p5cwnsldya8rkg.jpg"
    },
    {title : "Why can’t I find the rescue organisation I’m looking for?",
      content :"Wondering why you can’t find the rescue organisation you're looking for on PetRescue? Learn more about why a rescue organisatio",
      image : "https://res.cloudinary.com/petrescue/image/upload/c_fill,f_auto,g_face,h_500,q_80,w_500/yfj7e4p5cwnsldya8rkg.jpg"
    },
    {title : "Why can’t I find the rescue organisation I’m looking for?",
      content :"Wondering why you can’t find the rescue organisation you're looking for on PetRescue? Learn more about why a rescue organisatio",
      image : "https://res.cloudinary.com/petrescue/image/upload/c_fill,f_auto,g_face,h_500,q_80,w_500/yfj7e4p5cwnsldya8rkg.jpg"
    },
    {title : "Why can’t I find the rescue organisation I’m looking for?",
      content :"Wondering why you can’t find the rescue organisation you're looking for on PetRescue? Learn more about why a rescue organisatio",
      image : "https://res.cloudinary.com/petrescue/image/upload/c_fill,f_auto,g_face,h_500,q_80,w_500/yfj7e4p5cwnsldya8rkg.jpg"
    }
  ]

   currentImageIndex: number = 0;

   onPage(event: any) {
     console.log(this.currentImageIndex)
     this.currentImageIndex = event.page;
   }

  turnon : boolean = false ;
turn (){
  this.turnon = !this.turnon
}

}

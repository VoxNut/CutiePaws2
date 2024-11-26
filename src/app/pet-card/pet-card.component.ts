import { I } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent {

  private _snackBar = inject(MatSnackBar) ;

  currentPetidx : number = 0;
  detail : boolean = false;
  indexTab : number = 0;
  shouldScroll : boolean = false;

  messageList: number[] = [];
  RequestedPetList: { idx: number; status: number }[] = [{
    idx : 0, status : 1
  },
  {
    idx : 0, status : 2
  },
];


  list = [
    {
      imageUrl : [
        "https://images.pexels.com/photos/747795/pexels-photo-747795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "https://images.pexels.com/photos/16957417/pexels-photo-16957417/free-photo-of-head-of-cat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      ],
      description :{  
        id : "1",
        name : "Harundris",
        sex : "đực",
        weight : "4kg",
        color : "đen",
        vaccin : "đã tiêm phòng",
        age : "Trưởng thành",
        comment : "bé bị bỏ rơi và được một trạm cứu hộ nhặt được, bé rất ngoan và hiền lành"
      }
    },

      {
        imageUrl : [
         "https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://www.rspca.org.uk/documents/d/rspca/findapetheroocto?imagePreview=1",
          "https://images.f247.com/original/3X/9/a/9a5f64b89250e61acc8d5521f42756d25d895966.jpeg"
        ],
        description :{
          id : "1",
          name : "Harundris",
          sex : "đực",
          weight : "4kg",
          color : "đen",
          vaccin : "đã tiêm phòng",
          age : "Trưởng thành",
          comment : "bé bị bỏ rơi và được một trạm cứu hộ nhặt được, bé rất ngoan và hiền lành"
        }
        },

        {
          imageUrl : [
           "https://www.rspca.org.uk/documents/d/rspca/findapetheroocto?imagePreview=1",
          "https://www.rspca.org.uk/documents/d/rspca/findapetheroocto?imagePreview=1",
            "https://images.f247.com/original/3X/9/a/9a5f64b89250e61acc8d5521f42756d25d895966.jpeg"
          ],
          description :{
            id : "11",
            name : "Harundris",
            sex : "cái",
            weight : "2kg",
            color : "xanh",
            vaccin : "chưa tiêm phòng",
            age : "Trưởng thành",
            comment : "chó đột biến, chưa có thuốc ngừa dại"
          }

  }
  ]




  moreDetail(){
    this.detail = !this.detail;
    this.switchScroll();
  }

  alertSuccess(){
    this._snackBar.dismiss();
    this._snackBar.open("thành công", "đóng");
  }

  next (){
    if(this.indexTab < this.list.length-2)
    this.indexTab = this.indexTab+1;
  }

  back (){
    if(this.indexTab >0)
    this.indexTab = this.indexTab-1;
  } 

  chooseThisPet(){

    if(this.messageList.at(this.currentPetidx) != null){
      window.alert("bạn đã chọn cún này rồi")
    }else {

      this.messageList.push(this.currentPetidx);
    if(this.currentPetidx < this.list.length-1){
    this.nextPet();
    this.detail = false;
    }
    else {
      this.currentPetidx = 0;
    }

    this.alertSuccess();

    }
    
    
  }

  remove(idx : number) {
    this.messageList.slice(idx, 1);
  }

  removePetInQueue(idx : number) {
    this.messageList = this.messageList.filter((num) => num !== idx);
  }


  nextPet(){
    if(this.currentPetidx < this.list.length){
      this.currentPetidx = this.currentPetidx +1;
    this.detail = false;
    }
    else {
      this.currentPetidx = 0;
    }
    this.indexTab =0;
     
  }

  backPet(){
    if(this.currentPetidx > 0 ){
      this.currentPetidx = this.currentPetidx -1;
      this.detail = false;
    }  else {
      this.currentPetidx = 0;
    }
  }

  switchScroll (){
    this.shouldScroll = !this.shouldScroll;
  }

  sendRequest (idx : number){
    this.RequestedPetList.push({idx : idx, status : 0});
  }

}

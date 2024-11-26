import { Component } from '@angular/core';
import { MainServiceService } from './service/mainService/main-service.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor (service : MainServiceService){
     
  }

  
  title = 'TinderCat';

  curIndex : number = 0;
   
  list : User[]= [{id: 1, name : "meow", age : 2, description: "alive", avata:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSoqflgwGT1QkUJqYlA8u_PgbyH0nbz8k4sbs4U4hPCP-U9cV4VsSIt1lUC2QC33uCiY&usqp=CAU", image : ["https://i.ytimg.com/vi/f9P7_qWrf38/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYTiBcKGUwDw==&rs=AOn4CLCia00Blgxx8JVqFbncavEAO_6Maw"]},
  {id: 2, name : "dog", age : 2, description: "alive", avata:"https://i.ytimg.com/vi/7Wg5wz7bLZM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUTuLvs_EZvXppRggLYVG7gFzxVQ", image : ["https://i.ytimg.com/vi/f9P7_qWrf38/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYTiBcKGUwDw==&rs=AOn4CLCia00Blgxx8JVqFbncavEAO_6Maw", "https://i.ytimg.com/vi/7Wg5wz7bLZM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUTuLvs_EZvXppRggLYVG7gFzxVQ"]}]


  test(){
    this.curIndex +=1;
  }
}

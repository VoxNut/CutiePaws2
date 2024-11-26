class home {
    
        constructor(name : string, age : number){
                
        }
}

class seller {
    
    buyHouse(home : home){

    }

    buy(){
        this.buyHouse(new home("home1",23));
        this.buyHouse(["home1", 23])
    }
}
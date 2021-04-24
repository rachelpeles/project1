let t1= new Tree('brosh',1,Season.Fall,false);
let t2= new Tree('dekel',2,Season.Summer,true);
let f3=new Flower('vared',3,Season.Spring,true,Colors.Pink);
let f4=new Flower('shoshana',4,Season.Fall,false,Colors.Red);
let f5=new Flower('sigalit',5,Season.Spring,true,Colors.Pink);
let plant : Plant[] =[t1,t2,f3,f4,f5];
// let list: number[] = [1, 2, 3];

plant.forEach(p => {
    p.life_span();
});


class  Plant{
    name: string;
    plantNumber: number;
    season:Season
    
    constructor(_Name: string,_plantNumber: number,_season:Season) {
      this.name = _Name;
      this.plantNumber=_plantNumber;
      this.season=_season;
    }
    life_span(monse: number = 0) {
      console.log(`${this.name} live ${monse} years.`);
    }
  }


  enum Season {
   Fall,
   Winter,
   Spring,
   Summer
  }






class Tree extends Plant {

    hasFruit:boolean
     constructor(name: string,plantNumber: number,season:Season,_hasFruit:boolean) {
       super(name,plantNumber,season);
       this.hasFruit=_hasFruit;
     }
     life_span(monse:number) {
       console.log("the tree...");
       super.life_span(monse);
     }
   }

   class Flower extends Plant{
    hasSmell:boolean;
    color:Colors
    constructor(name: string,plantNumber: number,season:Season,_hasSmell:boolean,_color) {
        super(name,plantNumber,season);
        this.hasSmell=_hasSmell;
        this.color=_color;
      }
}
enum Colors{
    Red,
    Blue,
    Green,
    Yellow,
    Pink
}






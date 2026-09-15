export class ElectricRat {

  name: string;
  atk : number;
  hp : number; 
 
  constructor(name:string, atk:number, hp:number) {
   if(name === "") {
      throw new Error("Nem lehet üres név");
    }

    if(atk<=0){
      throw new Error("Nem lehet mínusz/nulla támadás");
    }

    if(hp<=0){
      throw new Error("Nem lehet mínusz/nulla élet");
    }




    
    this.name = name;
    this.atk = atk;
    this.hp = hp;


  }

  toCSV(): string{
    return `${this.name};${this.atk};${this.hp}`;

  }


}
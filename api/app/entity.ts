export class Entity {
    constructor(public id:number, public name:string) {}
    
     equals(other: any): boolean {
        if(typeof other === 'Entity')
        {
            var otherEntity = other as Entity;
            
            return otherEntity.id === this.id;
        }
        
        return false;   
     }
}
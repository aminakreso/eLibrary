import { PisacDropdownVM } from "src/app/PisacDropdownVM";
import { ZanrDropdownVM } from "src/app/ZanrDropdownVM";




export class Knjiga {
    public knjigaId:number=0;
    public nazivKnjige:string="";
    public pisacId:number=0;
    public zanrId:number=0;
    public cijena:number=0;
    public naStanju:number=0;
    public kolicina:number=0;
    public eKnjiga:string="";
    public ime:string="";
    public prezime:string="";
    public pisac!:PisacDropdownVM;
    public zanr!:ZanrDropdownVM;


    
   
    
} 

import { Byte } from "@angular/compiler/src/util";

export class Knjiga {
    public knjigaId:number=0;
    public nazivKnjige:string='';
    public pisacId:number=0;
    public Pisac:string='';
    public zanrId:number=0;
    public cijena:number=0;
    public naStanju:Byte=0;
    public kolicina:number=0;
    public eKnjiga:string='';
    
    
    constructor(
        knjigaId:number,
        nazivKnjige:string,
        pisacId:number,
        zanrId:number,
        cijena:number,
        naStanju:Byte,
        kolicina:number,
        eKnjiga:string

    ){}
}

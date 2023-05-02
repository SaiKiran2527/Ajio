import { Component } from '@angular/core';

@Component({
  selector: 'app-tada',
  templateUrl: './tada.component.html',
  styleUrls: ['./tada.component.css']
})
export class TadaComponent {
  
  visi:boolean=false

  visiChange(){
    if(this.visi==true){
      this.visi=false
    }else{
      this.visi=true
    }
  }
  popUp(){
    alert("Kaavalani RCB vs SRH match podham ani antha stress chesa, despite you saying no 🤣. You are always important to me, n I never even for a second intended to go for RCB match (was just pulling your legs, to pull off a surprise). But nuv ninna 'Im not a KL Fan' anagane, gunde 100 pieces ayyindhi😭😂")
    this.visiChange()
  }
}

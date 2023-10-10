import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  data =
    {
      744101: 'Andaman Nicobar Islands',
      507130: 'Andhra Pradesh',
      790001: 'Arunachal Pradesh',
      781001: 'Assam',
      800001: 'Bihar',
      140119: 'Chandigarh'
    };
  list =Object.entries(this.data);
  values = Object.values(this.data);
  state= '';
  pincode='';
  text='';
  onChangeValue(val) {
    let result=this.list.find(l=>l.includes(val));
    if(result && result.length){
      this.pincode=result[0];
      this.state=result[1];
    }
    this.text=`Selected State is ${this.pincode} : ${this.state}`
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trombinoscope',
  templateUrl: './trombinoscope.component.html',
  styleUrls: ['./trombinoscope.component.scss']
})
export class TrombinoscopeComponent implements OnInit {

  protected users = [{
      firstName: 'Arnaud',
      lastName: 'Couderc',
      role: 'rôle',
      phone: '0123456789',
      email: 'exemple@email.com'
    },
    {
      firstName: 'Alexandre',
      lastName: 'Ludwig',
      role: 'rôle',
      phone: '0123456789',
      email: 'exemple@email.com'
    }];
  constructor() {
  }

  ngOnInit() {
  }

}

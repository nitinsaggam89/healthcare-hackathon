import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-grid-three',
  templateUrl: './tile-grid-three.component.html',
  styleUrls: ['./tile-grid-three.component.css']
})
export class TileGridThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataSource = {
    "chart": {
      "caption": "Recommended Portfolio Split",
      "subCaption" : "For a net-worth of $1M",
      "showValues":"1",
      "showPercentInTooltip" : "0",
      "numberPrefix" : "$",
      "enableMultiSlicing":"1",
      "theme": "fusion"
    },
    "data": [{
      "label": "Equity",
      "value": "300000"
    }, {
      "label": "Debt",
      "value": "230000"
    }, {
      "label": "Bullion",
      "value": "180000"
    }, {
      "label": "Real-estate",
      "value": "270000"
    }, {
      "label": "Insurance",
      "value": "20000"
    }]
  }
}

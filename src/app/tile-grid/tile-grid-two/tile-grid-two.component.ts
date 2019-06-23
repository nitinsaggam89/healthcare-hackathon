import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-grid-two',
  templateUrl: './tile-grid-two.component.html',
  styleUrls: ['./tile-grid-two.component.css']
})
export class TileGridTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myDataSource = {
    chart: {
      caption: "Lead sources by industry",
      yaxisname: "Number of Leads",
      aligncaptionwithcanvas: "0",
      plottooltext: "<b>$dataValue</b> leads received",
      theme: "fusion"
    },
    data: [
      {
        label: "Travel & Leisure",
        value: "41"
      },
      {
        label: "Advertising/Marketing/PR",
        value: "39"
      },
      {
        label: "Other",
        value: "38"
      },
      {
        label: "Real Estate",
        value: "32"
      },
      {
        label: "Communications/Cable/Phone",
        value: "26"
      },
      {
        label: "Construction",
        value: "25"
      },
      {
        label: "Entertainment",
        value: "25"
      },
      {
        label: "Staffing Firm/Full Time/Temporary",
        value: "24"
      },
      {
        label: "Transportation/Logistics",
        value: "23"
      },
      {
        label: "Utilities",
        value: "22"
      },
      {
        label: "Aerospace/Defense Products",
        value: "18"
      },
      {
        label: "Banking/Finance/Securities",
        value: "16"
      },
      {
        label: "Consumer Products - Non-Durables",
        value: "15"
      },
      {
        label: "Distribution",
        value: "13"
      },
      {
        label: "Education",
        value: "12"
      },
      {
        label: "Health Products & Services",
        value: "11"
      },
      {
        label: "Hospitality & Hotels",
        value: "10"
      },
      {
        label: "Non-Business/Residential",
        value: "6"
      },
      {
        label: "Pharmaceutical",
        value: "4"
      },
      {
        label: "Printing & Publishing",
        value: "1"
      },
      {
        label: "Professional Services",
        value: "1"
      },
      {
        label: "VAR/ISV",
        value: "1"
      },
      {
        label: "Warranty Administrators",
        value: "1"
      }
    ]
  };
}

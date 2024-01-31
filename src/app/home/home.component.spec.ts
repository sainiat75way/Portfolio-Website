import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          { label: "Dataset 1", data: [] },
          { label: "Dataset 2", data: [] }
        ]
      },
      options: { aspectRatio: 2.5 }
    });
  }
}

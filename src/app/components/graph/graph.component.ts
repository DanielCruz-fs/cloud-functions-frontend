import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnDestroy {

  @Input() results: any[] = [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Movies';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';
  /** */
  // intervalGraph;

  constructor() { 
    /** piece of code to ilustrate how realtime app works */
    // console.log(this.results);
    // this.intervalGraph = setInterval(() => {
    //   console.log('tick');
    //   const newResults = [...this.results];
    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = newResults;
    // }, 1500);
  }

  onSelect(event) {
    console.log(event);
  }
  
  ngOnDestroy() {
    /** */
    // clearInterval(this.intervalGraph);
  }
}

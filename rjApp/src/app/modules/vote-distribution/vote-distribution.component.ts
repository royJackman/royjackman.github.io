import { Component, OnInit } from '@angular/core';
import { VoteDistributionConstants } from './vote-distribution.constants';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_usaHigh from '@amcharts/amcharts4-geodata/usaLow';

@Component({
  selector: 'app-vote-distribution',
  templateUrl: './vote-distribution.component.html',
  styleUrls: ['./vote-distribution.component.less']
})
export class VoteDistributionComponent implements OnInit {
  totalVoteCount = 136669276;
  maxVal = null;
  minVal = null;
  maxLabel = null;
  minLabel = null;
  toolTipText = null;
  chart = null;

  vals: number[];

  constructor(public voteDistributionConstants: VoteDistributionConstants) { }

  ngOnInit() {
    this.generateValues(this.voteDistributionConstants.CalculationType.electoralCollege.id);
  }

  loadMap() {
    this.chart = am4core.create('chartdiv', am4maps.MapChart);
    this.chart.geodata = am4geodata_usaHigh;
    this.chart.projection = new am4maps.projections.AlbersUsa();

    const usaSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    usaSeries.heatRules.push({
      property: 'fill',
      target: usaSeries.mapPolygons.template,
      min: am4core.color('#FD4103'),
      max: am4core.color('#0341FD')
    });
    usaSeries.useGeodata = true;
    usaSeries.data = this.voteDistributionConstants.StateData;

    const heatLegend = this.chart.createChild(am4maps.HeatLegend);
    heatLegend.series = usaSeries;
    heatLegend.align = 'center';
    heatLegend.valign = 'bottom';
    heatLegend.width = am4core.percent(60);
    this.minVal ? heatLegend.minValue = this.minVal : heatLegend.minValue = 0;
    this.maxVal ? heatLegend.maxValue = this.maxVal : heatLegend.maxValue = 1;

    const minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    this.minLabel ? minRange.label.text = this.minLabel : minRange.label.text = 'Left';
    const maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    this.maxLabel ? maxRange.label.text = this.maxLabel : maxRange.label.text = 'Your other left';

    heatLegend.valueAxis.renderer.labels.template.adapter.add('text', function(labelText) {
      return '';
    });

    const polygonTemplate = usaSeries.mapPolygons.template;
    this.toolTipText ? polygonTemplate.tooltipText = this.toolTipText : polygonTemplate.tooltipText = '{name}';
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;
    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#101010');
  }

  generateValues(ratioId: number) {
    if (this.chart) { this.chart.dispose(); }
    if (ratioId === this.voteDistributionConstants.CalculationType.electoralCollege.id) {
      this.voteDistributionConstants.StateData.forEach(element =>
        element.value = (element.votes / element.eVotes));
      this.vals = this.voteDistributionConstants.StateData.map(function(ratio) { return ratio.value; });
      this.minVal = Math.max(...this.vals);
      this.maxVal = Math.min(...this.vals);
      this.minLabel = 'OverPowered';
      this.maxLabel = 'UnderPowered';
      this.toolTipText = '{name}:'
        + '\nTotal Votes:             {votes}'
        + '\nElectoral College votes: {eVotes}'
        + '\nVotes Per E.C. votes:    {value}';
    } else if (ratioId === this.voteDistributionConstants.CalculationType.population.id) {
      this.voteDistributionConstants.StateData.forEach(element =>
        element.value = (element.votes * 100 / this.totalVoteCount));
      this.vals = this.voteDistributionConstants.StateData.map(function(ratio) { return ratio.value; });
      this.minVal = Math.min(...this.vals);
      this.maxVal = Math.max(...this.vals);
      this.minLabel = 'Small Fraction';
      this.maxLabel = 'Large Fraction';
      this.toolTipText = '{name}:'
        + '\nTotal Votes:             {votes}'
        + '\nPercentage of total Vote:{value}';
    }
    this.loadMap();
  }
}

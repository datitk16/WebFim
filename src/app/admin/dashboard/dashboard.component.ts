import { Component} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import * as  ChartConst from 'ng6-o2-chart'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 
  constructor(private breakpointObserver: BreakpointObserver) {
    this.barTypeName       = ChartConst.LINE_CHART_TYPE_NAME;
    this.lineTypeName     	= ChartConst.LINE_CHART_TYPE_NAME;
    this.barTypeName     	= ChartConst.BAR_CHART_TYPE_NAME;
    this.pieTypeName     	= ChartConst.PIE_CHART_TYPE_NAME;
    this.scatterPlotTypeName 	= ChartConst.SCATTER_PLOT_CHART_TYPE_NAME;
    this.histogramTypeName     = ChartConst.HISTOGRAM_CHART_TYPE_NAME;
    this.stackBarTypeName     = ChartConst.STACK_BAR_CHART_TYPE_NAME;
    this.geoMapTypeName     = ChartConst.GEO_MAP_CHART_TYPE_NAME;
    this.geoOrthographicTypeName = ChartConst.GEO_ORTHOGRAPHIC_CHART_TYPE_NAME;
    this.treeMapTypeName     = ChartConst.TREE_MAP_CHART_TYPE_NAME;
    this.packLayoutTypeName 	= ChartConst.PACK_LAYOUT_CHART_TYPE_NAME;
    this.choroplethTypeName 	= ChartConst.CHOROPLETH_CHART_TYPE_NAME;
    this.treeTypeName     	= ChartConst.TREE_CHART_TYPE_NAME;
    this.forceTypeName     	= ChartConst.FORCE_CHART_TYPE_NAME;

    this.initilizeData();
  }

  chartType: string;
  configData: any;
  barDataJson: any;


  geoMapDataJson: any;
  geoOrthographicDataJson: any;
  choroplethDataJson: any;
  scatterPlotDataJson: any;
  lineDataJson: any;
  histogramDataJson: any;
  pieDataJson: any;
  packLayoutDataJson: any;
  treeMapDataJson: any;
  stackBarDataJson: any;
  treeDataJson: any;
  forceDataJson: any;
  DataSetJson: string;

  lineTypeName: string;
  barTypeName: string;
  pieTypeName: string;
  scatterPlotTypeName: string;
  histogramTypeName: string;
  stackBarTypeName: string;
  geoMapTypeName: string;
  geoOrthographicTypeName: string;
  treeMapTypeName: string;
  packLayoutTypeName: string;
  choroplethTypeName: string;
  treeTypeName: string;
  forceTypeName: string;

  
  private initilizeData() {
    // ConfigData = this.httpClient.get('assets/json/ConfigData.json');
    this.configData = {
      // tslint:disable-next-line:quotemark
      "className": {
        'axis': 'axis',
        'axisXBorder': 'axis_x',
        'axisXText': 'axis-x-text',
        'bar': 'bar',
        'barValue': 'bar-value',
        'line': 'line',
        'multiLinePrefix': 'line-',
        'grid': 'grid',
        'pie': 'pie',
        'pieInnerTitle': 'pie-inner-title',
        'pieInnerRadius': 'total',
        'histogram': 'histogram',
        'histogramBar': 'histogram-bar',
        'treemap': 'treemap',
        'treemapLabel': 'treemap-label',
        'packlayout': 'packlayout',
        'packlayoutLabel': 'packlayout-label',
      },
      'label': {
          'display': true,
      },
      'title': {
        'display': false,
        'name': 'Phim',
        'className': 'chart-title',
        'height': 30,
        'leftMargin': -20,
        'bottomMargin': 10
      },
      'maxValue': {
        'auto': true,
        'x': 100,
        'y': 100,
      },
      'legend': {
        'display': true,
        'position':           'right',
        'totalWidth': 80,
        'initXPos': 5,
        'initYPos': 10,
        'rectWidth': 10,
        'rectHeight': 10,
        'xSpacing': 2,
        'ySpacing': 2
      },
      'color': {
        'auto': true, //
        'defaultColorNumber': 10,
        'opacity': 1.0,
        'userColors': [
          'blue',
          'red',
          'green',
          'yellow',
          'PaleGoldenrod',
          'Khaki',
          'DarkKhaki',
          'Gold',
          'Cornsilk',
          'BlanchedAlmond',
          'Bisque',
          'NavajoWhite',
          'Wheat',
          'BurlyWood',
          'Tan',
          'RosyBrown',
          'SandyBrown',
          'Goldenrod',
          'DarkGoldenrod',
          'Peru',
          'Chocolate'
        ],
        'focusColor': 'red',
      },
      'pie': {
        'innerRadius': {
          'percent': 20,
          'title': 'Total'
        },
        'value': {
          'display': true,
        },
        'percent':{
          'display': false,
        }
      },
      'line': {
        'legend': 'lineEnd',
        'interpolate' : 'linear',
      },
      'grid': {
        'x': {
          'display': true,
        },
        'y': {
          'display': true,
        },
      },
      'margin': {
        'top': 30,
        'left': 30,
        'right': 10,
        'bottom': 20,
        'between': 5
      },
      'axis': {
        'rotation': 0,
        'borderLineWidth': 1,
        'xLabel': {
          'leftMargin': 0,
          'bottomMargin': 5
        },
        'yLabel':{
          'leftMargin': 0,
          'bottomMargin': 0
        },
      },
      'animation': {
        'enable': true,
        'duration': 4000,
      },
    };


    this.barDataJson =
    {
      'series': [
        'DT tuần',
        'DT năm'
      ],
      'data': [
        {
          'x': 'tháng 1',
          'y': [92, 73],
        },
        {
          'x': 'tháng 2',
          'y': [69, 45],
        },
        {
          'x': 'tháng 3',
          'y': [70, 100],
        },
        {
          'x': 'tháng 4',
          'y': [43, 66],
        },
        {
          'x': 'tháng 5',
          'y': [60, 70],
        },
        {
          'x': 'tháng 6',
          'y': [55, 63],
        },
      ],
    };

    this.stackBarDataJson =
    {
    	'config':{
        'timeFormat':'%Y',
    	},
    	'series':[
        'year',
        'sell',
    	],
    	'data':[
        {
          'name': 'software',
          'value':[
            {
              'x':'tháng 9',
              'y':18
            },
            {
              'x':'tháng 10',
              'y':22
            },
            {
              'x':'tháng 11',
              'y':30
            },
            {
              'x':'tháng 12',
              'y':31
            },
          ]
        },
        {
          'name': 'hardware',
          'value':[
            {
              'x':'tháng 9',
              'y':15
            },
            {
              'x':'tháng 10',
              'y':16
            },
            {
              'x':'tháng 11',
              'y':10
            },
            {
              'x':'tháng 12',
              'y':21
            },
          ]
        },
        {
          'name': 'device',
          'value':[
            {
              'x':'tháng 9',
              'y':25
            },
            {
              'x':'tháng 10',
              'y':26
            },
            {
              'x':'tháng 11',
              'y':30
            },
            {
              'x':'tháng 12',
              'y':31
            },
          ]
        },
        {
          'name': 'others',
          'value':[
            {
              'x':'tháng 9',
              'y':5
            },
            {
              'x':'tháng 10',
              'y':16
            },
            {
              'x':'tháng 11',
              'y':20
            },
            {
              'x':'tháng 12',
              'y':41
            },
          ]
        },
    	],
    };

    this.histogramDataJson =
    {
    	'range':[0,100],
    	'bins': [0,10,20,30,40,50,60,70,80,90,100],
    	'data':[
        50,95,60,44,60,50,35,20,10,8,
        56,70,65,42,22,33,40,53,52,89,
        90,55,50,55,65,72,45,35,15,45,
        50,95,60,44,60,50,35,20,10,8,
        56,70,65,42,22,33,40,53,52,89,
        90,55,50,55,65,72,45,35,15,45,
        50,95,60,44,60,50,35,20,10,8,
        56,70,65,42,22,33,40,53,52,89,
        90,55,50,55,65,72,45,35,15,45,
    	],
    };

    this.pieDataJson =
    {
    	'data':[
        {
          'name': 'Thẻ VVIP',
          'value':30,
        },
        {
          'name': 'Thẻ VIP',
          'value':25
        },
        {
          'name': 'Thẻ Member',
          'value':16
        },
        {
          'name': 'Khác',
          'value':4
        },
    	],
    };
  }

}

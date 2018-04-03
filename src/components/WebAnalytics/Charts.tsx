import * as React from 'react';
import * as Highcharts from 'highcharts';
import theme from './theme';

Object.assign(Highcharts, {theme: theme});
Highcharts.setOptions(theme);

interface HighchartsProps extends React.HTMLProps<HTMLElement> {
  options: Highcharts.Options;
  callback?: (chart: Highcharts.ChartObject) => void;
}

type State = any;

class HighchartsReact extends React.Component<HighchartsProps, State> {
  public chart: Highcharts.ChartObject;
  private element: HTMLElement;

  componentDidMount() {
    this.chart = Highcharts.chart(this.element, this.props.options, this.props.callback);
    requestAnimationFrame( () => this.chart.reflow());
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render(): JSX.Element {
    //return <div ref={this.render_to.bind(this)} />;
    /*
     * React will call the ref callback with the DOM element when the component
     * mounts, and call it with null when it unmounts. ref callbacks are invoked
     * before componentDidMount or componentDidUpdate lifecycle hooks.

     * Using the ref callback just to set a property on the class is a common
     * pattern for accessing DOM elements. The preferred way is to set the
     * property in the ref callback like in the above example. There is even a
     * shorter way to write it: ref={input => this.textInput = input}.
     *
     */
    return <div ref={ ele => this.element = ele as HTMLElement } {...this.props} />;
  }
}

(HighchartsReact as any).defaultProps = {
  options: {
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    }
  }
};

class SessionsPerWeekArea extends React.Component<Highcharts.Options & React.HTMLProps<HTMLElement>, State> {
  readonly weeks = [
    "W53", "W53", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9",
    "W10", "W11", "W12", "W13", "W14", "W15", "W16", "W17", "W18", "W19",
    "W20", "W21", "W22", "W23", "W24", "W25", "W26", "W27", "W28", "W29",
    "W30", "W31", "W32", "W33", "W35"
  ];

  readonly numbers = [8500.0,
    24791.0, 36071.0, 35102.0, 36563.0, 33932.0, 34382.0, 34754.0, 34184.0, 32443.0,
    35203.0, 34424.0, 40203.0, 49002.0, 40165.0, 40430.0, 43754.0, 42274.0, 56692.0,
    51454.0, 56403.0, 36355.0, 51589.0, 65922.0, 58645.0, 61243.0, 52335.0, 76675.0,
    61771.0, 60305.0, 68252.0, 78864.0, 76993.0, 80511.0, 63994.0, 8766.0, ];

  readonly options = {
    chart: {
      type: 'area'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Sessions by Week of Year'
    },
    yAxis: {
      title: {
        text: null
      },
    },
    xAxis: {
      title: {
        text: 'Week'
      },
      categories: this.weeks
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Session',
      data: this.numbers
    }]
  }

  render() {
    const {ref, ...props} = this.props;
    return <HighchartsReact options={this.options} {...props} />;
  }
}

class ChannelPie extends React.Component<React.HTMLProps<HTMLElement>, State> {
  readonly options: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Traffic Sources'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      labelFormatter: function(): string {
        //let total = this.series.data.map((item: any) => item.y)
                                    //.reduce((acc: any, y: any) => acc + y);
        //return `${(this.y / total * 100).toFixed(2)}% ${this.name}`;
        return `${this.percentage.toFixed(2)}% ${this.name}`;
      }
    } as any,
    series: [{
      name: 'Channel',
      data: [{
        name: 'Organic',
        y: 842000
      }, {
        name: 'Social',
        y: 351000,
      }, {
        name: 'Direct',
        y: 287000
      }, {
        name: 'Paid Search',
        y: 134000
      }, {
        name: 'Referral',
        y: 79000
      }, {
        name: 'Display',
        y: 1000
      }]
    }]
  };

  callback(chart: Highcharts.ChartObject) {
    //let legend = chart.options.legend as Highcharts.LegendOptions;
    //let total = this.options.series[0].data.map(item => item.y)
                                           //.reduce((acc, y) => acc + y);
    //console.log(total);
  }

  render() {
    const {ref, ...props} = this.props;
    return <HighchartsReact options={this.options} {...props} />;
  }
}

class NewUsersBar extends React.Component<React.HTMLProps<HTMLElement>, State> {
  readonly options: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Visitors by User Type'
    },
    legend: {
      enabled: false
    },
    xAxis: {
      categories: ['New', 'Returning']
    },
    yAxis: {
      visible: false
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: "{point.y:.2f}%"
        }
      }
    },
    series: [{
      data: [{
      name: 'New',
        y: 69.7522
      }, {
        name: 'Returning',
        y: 30.2478
      }]
    }]
  };
  render(): JSX.Element {
    const {ref, ...props} = this.props;
    return <HighchartsReact options={this.options} {...props} />;
  }
}

class BounceRateLine extends React.Component<React.HTMLProps<HTMLElement>, State> {
  readonly data = [
    64.494, 60.5904, 63.7479, 62.2128, 63.9621, 59.6645, 57.8338, 58.7643,
    53.0365, 54.1289, 60.7386, 59.963, 55.0308, 60.2108, 56.1412, 60.4782,
    59.9122, 62.8169, 58.4826, 53.8419, 58.9208, 64.2984, 58.9791, 57.5433,
    59.844, 62.9944, 55.6072, 55.2776, 54.7264, 54.6787, 60.8327, 55.0584,
    57.5682, 58.2789, 59.2143, 55.2735
  ];

  readonly weeks = [
    "W 53", "W 53", "W 1", "W 2", "W 3", "W 4", "W 5", "W 6", "W 7", "W 8",
    "W 9", "W 10", "W 11", "W 12", "W 13", "W 14", "W 15", "W 16", "W 17",
    "W 18", "W 19", "W 20", "W 21", "W 22", "W 23", "W 24", "W 25", "W 26",
    "W 27", "W 28", "W 29", "W 30", "W 31", "W 32", "W 33", "W 35"
  ];

  readonly options: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Bounce Rate by Week of Year'
    },
    xAxis: {
      title: {
        text: null
      },
      categories: this.weeks
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        format: '{value:.2f}%'
      }
    },
    series: [{
      name: 'Bounce Rate',
      data: this.data
    }]
  }

  render() {
    const {ref, ...props} = this.props;
    return <HighchartsReact options={this.options} {...props} />;
  }
}

class ConversionRatesTopChannels extends React.Component<React.HTMLProps<HTMLElement>, State> {
  readonly channels = [
    'Organic', 'Referral', 'Paid Search'
  ];

  readonly data = [
    13, 13, 11
  ];

  readonly options: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    tooltip: {
      valueSuffix: '%'
    },
    title: {
      text: 'Top 3 Channels'
    },
    xAxis: {
      title: {
        text: null
      },
      categories: this.channels
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        format: '{value:.2f}%'
      }
    },
    series: [{
      name: 'Conversion Rate',
      data: this.data
    }]
  }

  render() {
    const {ref, ...props} = this.props;
    return <HighchartsReact options={this.options} {...props} />;
  }
}

class ConversionRatesTopCampaign extends React.Component<React.HTMLProps<HTMLElement>, State> {
  readonly campains = [
    'Organic', 'Referral', 'Paid Search'
  ];

  readonly data = [
    20, 13, 13
  ];

  readonly options: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Top 3 Campaigns'
    },
    legend: {
      enabled: false
    },
    tooltip: {
      valueSuffix: '%'
    },
    xAxis: {
      title: {
        text: null
      },
      categories: this.campains
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        format: '{value:.2f}%'
      }
    },
    series: [{
      name: 'Conversion Rate',
      data: this.data
    }]
  }

  render() {
    const {ref, ...props} = this.props;
    return <HighchartsReact options={this.options} {...props} />;
  }
}

class ConversionRatesTopLandingPages extends React.Component<React.HTMLProps<HTMLElement>, State> {
  readonly landing_pages = [
    'Organic', 'Referral', 'Paid Search'
  ];

  readonly data = [
    20, 13, 13
  ];

  readonly options: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Top 3 Lanidng Pages'
    },
    legend: {
      enabled: false
    },
    tooltip: {
      valueSuffix: '%'
    },
    xAxis: {
      title: {
        text: null
      },
      categories: this.landing_pages
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        format: '{value:.2f}%'
      }
    },
    series: [{
      name: 'Conversion Rate',
      data: this.data
    }]
  }

  render() {
    const {ref, ...props} = this.props;
    return <HighchartsReact options={this.options} {...props} />;
  }
}

export default
class Charts extends React.Component {
  render () {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <SessionsPerWeekArea style={{ width: '49%', maxHeight: '32vh' }} />
        <div style={{ width: '2%', maxHeight: '33vh' }} />
        <ChannelPie  style={{ width: '49%', maxHeight: '33vh' }}/>

        <div style={{ width: '100%', height: '1vh' }} />

        <NewUsersBar  style={{ width: '46%', maxHeight: '33vh' }}/>
        <div style={{ width: '2%', maxHeight: '33vh' }} />
        <BounceRateLine  style={{ width: '52%', maxHeight: '33vh' }}/>

        <div style={{ width: '100%', height: '1vh' }} />

        <ConversionRatesTopChannels style={{ width: '32%', maxHeight: '31vh' }}/>
        <div style={{ width: '2%', maxHeight: '31vh' }} />
        <ConversionRatesTopCampaign style={{ width: '32%', maxHeight: '31vh' }}/>
        <div style={{ width: '2%', maxHeight: '31vh' }} />
        <ConversionRatesTopLandingPages style={{ width: '32%', maxHeight: '31vh' }}/>
      </div>
    );
  }
}

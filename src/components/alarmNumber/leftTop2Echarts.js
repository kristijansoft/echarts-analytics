const option = {
  grid: {
      left: '5%',
      right: '5%',
      bottom: '0%',
      top: '10%',
      containLabel: true
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'none'
      },
      formatter: function(params) {
          return params[0].name + '<br/>' +
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10).toFixed(2)).toLocaleString() + ' 个<br/>'
      }
  },
  // backgroundColor: 'rgb(20,28,52)',
  xAxis: {
      show: false,
      type: 'value'
  },
  yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
          show: true,
          textStyle: {
              color: '#fff',
              fontSize:16
          },
      },
      splitLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLine: {
          show: false
      },
      data: ['在线数', '故障数', '移动报警数量']
  }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
          textStyle: {
              color: '#ffffff',
              fontSize: '16'
          },
          formatter: function(value) {
              if (value >= 10000) {
                  return (value / 10000).toLocaleString() + '万';
              } else {
                  return value.toLocaleString();
              }
          },
      },
      data: [200, 100, 50]
  }],
  series: [{
          name: '数量',
          type: 'bar',
          barCateGoryGap:90,
          zlevel: 1,
          itemStyle: {
              normal: {
                  barBorderRadius: 30,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: 'rgb(57,89,255,1)'
                  }, {
                      offset: 1,
                      color: 'rgb(46,200,207,1)'
                  }]),
              },
          },
          barWidth: 20,
          data: [200, 100, 50]
      },
      {
          name: '背景',
          type: 'bar',
          barWidth: 20,
          barGap: '-100%',
          data: [200, 100, 50,],
          itemStyle: {
              normal: {
                  color: 'rgba(24,31,68,1)',
                  barBorderRadius: 30,
              }
          },
      },
  ]
};
export default option
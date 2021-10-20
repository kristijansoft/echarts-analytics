
//字符串截取
var wordLength = (value) => {
  var ret = ""; //拼接加\n返回的类目项
  var maxLength = 4; //每项显示文字个数
  var valLength = value.length; //X轴类目项的文字个数
  var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
  if (rowN > 1) //如果类目项的文字大于3,
  {
      for (var i = 0; i < rowN; i++) {
          var temp = ""; //每次截取的字符串
          var start = i * maxLength; //开始截取的位置
          var end = start + maxLength; //结束截取的位置
          //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
          temp = value.substring(start, end) + "\n";
          ret += temp; //凭借最终的字符串
      }
      return ret;
  } else {
      return value;
  }
}
//
var data = [{
      name: "职工家属",
      value: "12355"
  },
  {
      name: "新增落户农民",
      value: "12093"
  },
  {
      name: "公司员工",
      value: "8874"
  },
  {
      name: "农场职工",
      value: "7427"
  },
  {
      name: "其它",
      value: "4308"
  },

];
//偏移量
var offsetData = [
  [80, 53],
  [35, 73],
  [30, 33],
  [60, 33],
  [10, 48]
];
//symbolSize 散点气泡大小
var symbolSizeData = [28, 35, 75, 75, 35];
//
//循环定义series的data值
var datas = [];
for (var i = 0; i < data.length; i++) {
  var item = data[i];
  //var itemToStyle = datalist[i];

  datas.push({
      name: wordLength(item.name) + "\n" + item.value + "人",
      value: offsetData[i],
      symbolSize: symbolSizeData[i],
      label: {
          normal: {
              textStyle: {
                  fontSize: 14
              }
          }
      },
      itemStyle: {
          normal: {
              color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [{
                      offset: 0,
                      color: "rgba(4,88,120,0)"
                  },
                  {
                      offset: 1,
                      color: "rgba(1,98,156,0.6)"
                  }
              ]),
              opacity: 0.8,
              shadowColor: '#045878',
              shadowBlur: 10,
              shadowOffsetX: 1,
              shadowOffsetY: 1,
          },

      }
  });
}

var option = {
  grid: {
      show: false,
      top: 10,
      bottom: 10
  },
  xAxis: [{
      gridIndex: 0,
      type: "value",
      show: false,
      min: 0,
      max: 100,
      nameLocation: "middle",
      nameGap: 5
  }],
  yAxis: [{
      gridIndex: 0,
      min: 0,
      show: false,
      max: 100,
      nameLocation: "middle",
      nameGap: 30
  }],

  series: [{
      type: "scatter",
      symbol: "circle",
      symbolSize: 120,
      label: {
          normal: {
              show: true,
              formatter: "{b}",
              color: "#fff",
              textStyle: {
                  fontSize: "20"
              }
          }
      },

      itemStyle: {
          normal: {
              color: "#00acea"
          }
      },
      data: datas
  }]
};

export default option
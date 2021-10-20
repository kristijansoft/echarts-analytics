var option = {
  title: {
    text: '报警总数',
    x: 'center',
    y: 'bottom',
    textStyle: {
      fontWeight: 'normal',
      color: 'white',
      fontSize: '16'
    },
},
tooltip: {
  confine:'false',
  position: [10, 10],
  formatter: function(params) {
    return params.name + '：' + params.value
  },
  extraCssText:'width:120px;height:30px;'
},
  series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['80%', '60%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal:{
            show: true,
            position: 'center',
            formatter: function(params){
              return 200
            },
            fontSize: '26',
            fontWeight: 'bold',
            color: 'white'
          }
        },
        emphasis: {
          label: {
            show: false,
            formatter: function(params){
              return params.value
            },
            fontSize: '20',
            fontWeight: 'bold',
          }
        },
        labelLine: {
            show: false
        },
        data: [
            {value: 1048, name: '搜索引擎'},
            {value: 735, name: '直接访问'},
            {value: 580, name: '邮件营销'},
            {value: 484, name: '联盟广告'},
            {value: 300, name: '视频广告'}
        ]
      }
  ]
}
export default option
<!--
 描述: 社区报警
 作者: shixiaolei
 日期: 2021-2-4
-->

<template>
  <div class="wrap-container sn-container leftTop"> 
    <div class="sn-content"> 
      <div class="sn-title">社区报警</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="pd-main"> 
            <div class="pd-main-choice">
              <div>今日</div>
              <div>本周</div>
              <div>本月</div>
              <div>本年</div>
            </div>
            <div class="pd-main-echarts">
              <div id="leftTop1"></div>
              <div id="leftTop2"></div>
            </div>
            <div class="pd-main-title">警告数量</div>
            <!-- 循环 -->
            <div class="pd-main-number">
              <div class="pd-main-number-leftTopFor" v-for="(item,index) in forData" :key="index">
                  <span class="span1" :style="{color: item.color}">{{item.value}}</span> <br/>
                  <span class="span2">{{item.name}}</span>
              </div>
            </div>
            <div class="pd-main-button">
              <div>处理社区报警</div>
            </div>
          </div>  
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
import option from './option'
export default {
  name: "sinan",
  data() {
    return {
      forData:[
        {id:1,name:'按需投放',value:'12',color:'rgb(79,0,12)'},
        {id:2,name:'垃圾数量',value:'32',color:'rgb(79,0,12)'},
        {id:3,name:'垃圾投放',value:'45',color:'rgb(79,0,12)'},
        {id:4,name:'消防资源占用   一级',value:'12',color:'rgb(79,0,12)'},
        {id:5,name:'消防资源占用   二级',value:'12',color:'orange'},
        {id:6,name:'消防资源占用   三级',value:'89',color:'yellow'}
      ]
    }
  },
  mounted(){
    this.$nextTick(()=> {
      this.initEchart()
    })
  },
  methods:{
    initEchart(){
      var myChart = echarts.init(document.getElementById('leftTop1'));
      var myChart2 = echarts.init(document.getElementById('leftTop2'));
      myChart.setOption(option)
      myChart2.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.leftTop {
  left: 50px; 
  top: 110px;
  position: absolute;

  width: 500px; 
  height: 620px;
  background:url(../../assets/leftTall.png) no-repeat;
  background-size: 100% 100%;
  overflow: visible;
  .pd-main {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-choice{
      width: 80%;
      height: 5%;
      display: flex;
      align-items: center;
      margin-top: 10px;
      box-shadow: 0 0 15px rgb(58, 143, 185) inset;;
      div{
        width: 25%;
        height: 100%;
        line-height: 30px;
        font-size: 18px;
        color: white;
        text-align: center;
      }
    }
    &-echarts{
      width: 80%;
      height: 42%;
      display: flex;
      justify-content: center;
      align-items: center;
      #leftTop1{
        width: 100%;
        height: 100%;
      }
      #leftTop2{
        width: 100%;
        height: 100%;
      }
    }
    &-title{
      color: #00c2ff;
      font-size: 18px;
      height:5%;
      width: 80%;
    }
    &-number{
      width: 80%;
      height: 32%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      &-leftTopFor{
        width: 32%;
        height: 50%;
        text-align: center;
        line-height: 35px;
        .span1{
          font-size: 26px;
        }
        .span2{
          padding-left: 10px;
          font-size: 16px;
          color: white;
          word-wrap: break-word;
          word-break: break-all;
          white-space: pre-wrap !important;
        }
      }
    }
    &-button{
      width: 80%;
      height: 16%;
      display: flex;
      justify-content: center;
      align-items: center;
      div{
        width: 50%;
        height: 50%;
        text-align: center;
        font-size: 18px;
        color: white;
        line-height: 48px;
        box-shadow: 0 0 15px rgb(58, 143, 185) inset;
      }
    }
  }
}
</style>

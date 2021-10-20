<!--
 描述: 报警数量
 作者: shixiaolei
 日期: 2021-2-4
-->

<template>
  <div class="wrap-container sn-container leftTop2"> 
    <div class="sn-content"> 
      <div class="sn-title">报警数量</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="pd-main">
            <div class="pd-main-echarts">
              <div id="leftTop2Echarts"></div>
            </div>
            <div class="pd-main-button">
              <div @click="dealEquipment()">处理故障设备</div>
            </div>
          </div>  
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
import option from './leftTop2Echarts'
export default {
  name: "alarmNumber",
  data() {
    return {
    }
  },
  mounted(){
    this.$nextTick(()=> {
      this.initEcharts()
    })
  },
  methods:{
    dealEquipment(){
       this.$router.push({ path:'/equipment'})
    },
    initEcharts(){
      var myChart = echarts.init(document.getElementById('leftTop2Echarts'));
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.leftTop2 {
  left: 50px; 
  top: 750px;
  position: absolute;

  width: 500px; 
  height: 300px;
  background:url(../../assets/leftTall.png) no-repeat;
  background-size: 100% 100%;
  overflow: visible;
  .pd-main {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-echarts{
      width: 80%;
      height: 70%;
      #leftTop2Echarts{
        width: 100%;
        height: 100%;
      }
    }
    &-button{
      width: 80%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;
      div{
        width: 50%;
        height: 45px;
        text-align: center;
        font-size: 18px;
        color: white;
        line-height: 48px;
        box-shadow: 0 0 15px rgb(58, 143, 185) inset;;
      }
    }
  }
}
</style>

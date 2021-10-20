<!--
 描述: 图例
 作者: shixioalei
 日期: 2021-2-4
-->

<template>
  <div class="wrap-container sn-container rightBottom"> 
    <div class="sn-content"> 
      <div class="sn-title">图例</div> 
      <div class="sn-body"> 
        <div class="wrap-container">
          <div class="table1">
            <div id="table1"></div>
          </div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
import option from './lenged'
export default {
  name: "lengend",
  components: {
  },
  data() {
    return {

    }
  },
  computed: {
  },  
  mounted() {
    this.$nextTick(()=> {
      this.initEcharts()
    })
  },
  methods: {
    initEcharts(){
      var myChart = echarts.init(document.getElementById('table1'));
      myChart.setOption(option)
    }
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.rightBottom {
  left: 1370px;
  top: 830px;
  position: absolute;

  width: 500px; 
  height: 220px;
  background:url(../../assets/rightBottom.png) no-repeat;
  background-size: 100% 100%;
  overflow: visible;
  .table1 {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    #table1{
      width: 90%;
      height: 90%;
    }
  }
}
</style>

<!--
 描述: 智能邀约
 作者: shixioalei
 日期: 2021-2-4
-->

<template>
  <div class="wrap-container sn-container rightCenter"> 
    <div class="sn-content"> 
      <div class="sn-title">智能邀约</div> 
      <div class="sn-body"> 
        <div class="wrap-container">
          <div class="smart">
            <div class="smart-for">
              <div>今日完成率: <span>{{one}}</span>%</div>
              <div>更新率: <span>{{two}}</span>%</div>
              <div>邀约数: <span>{{three}}</span>个</div>
              <div>每日更新: <span>{{four}}</span>次</div>
            </div>
            <div class="smart-button">
              <div>线下邀约推荐</div>
              <div>去读更</div>
            </div>
            <div class="smart-a">邀约记录</div>
          </div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>

export default {
  name: "smartVisite",
  components: {
  },
  data() {
    return {
      one:"50",
      two:"50",
      three:"6",
      four:"2",
    }
  },
  computed: {
  },  
  mounted() {
    
  },
  methods: {
    
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.rightCenter {
  left: 1370px;
  top: 570px;
  position: absolute;

  width: 500px; 
  height: 250px;
  background:url(../../assets/rightTop.png) no-repeat;
  background-size: 100% 100%;
  overflow: visible;
  .smart {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-for{
      width: 80%;
      height: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      div{
        width: 50%;
        line-height: 45px;
        height: 50%;
        color: white;
        font-size: 18px;
        span{
          font-size: 22px;
        }
      }
    }
    &-button{
      width: 80%;
      height: 35%;  
      display: flex;
      div{
        width: 50%;
        height: 48px;
        text-align: center;
        font-size: 18px;
        color: white;
        line-height: 48px;
        box-shadow: 0 0 15px rgb(58, 143, 185) inset;
        margin-right: 10px;
      }
    }
    &-a{
      width: 80%;
      height: 20%; 
      font-size: 20px;
      color: #00c2ff;
      text-align: right;
    }
  }
}
</style>

<!--
 描述: 首页
 作者: shixiaolei
 日期: 2021-02-3
-->

<template>
  <div class="home-container">
  	<div class="wrap" ref="editor">
      <div class="top">
        <div class="top-button1">监控地图</div>
        <div class="top-button2">人员地图</div>
      </div>
      <!-- 社区报警 -->
      <sinan/>
      <!-- 报警数量 -->
      <alarmNumber/>
      <!-- 视频监控 -->
      <seamless />
      <!-- 智能邀约 -->
      <smartVisite/>
      <!-- 图例 -->
      <lengend/>
      <pyramid />
    </div>
    
  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils'

export default {
  name: 'Home',
  components: {},
  data() {
  	return {
  		
  	}
  },
  computed: {
  	
  },
  created() {
  },
  mounted() {
    screenSize(this.$refs.editor);
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.home-container {
	position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .wrap {
    transform-origin: 0px 0px 0px;
    background: url(../../assets/img/bj.jpg) no-repeat;
    background-size: contain;
    background-position: 50% 0;
    background-color: rgb(0, 0, 0);
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 1080px;
    overflow: auto;
    .top {
      position: absolute;
      left: 0; 
      top: 0; 
      width: 100%; 
      height: 80px; 
      background-color: transparent; 
      background: url(../../assets/navBar.png) no-repeat center; 
      background-size:60% 70%;
      // background-position: 65% 0;
      border: none; 
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 20px;
      &-button1{
        margin-right: 30px;
      }
      &-button2{
        margin-left: 30px;
      }
    }
  }
}	
</style>

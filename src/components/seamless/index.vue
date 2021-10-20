<!--
 描述: 监控视频
 作者: shixioalei
 日期: 2021-2-4
-->

<template>
  <div class="wrap-container sn-container rightTop"> 
    <div class="sn-content"> 
      <div class="sn-title">监控画面</div> 
      <div class="sn-body"> 
        <div class="wrap-container">
          <div class="videoList">

            <div class="videoList-play">
              <div class="span1">{{videoMessage.location}}</div>
              <div class="videoList-play-video">
               <video
                id="myVideo"
                class="video-js"
                >
                <source
                  :src="videoUrl"
                  type="video/mp4"
                >
                </video>
              </div>
              <div class="span2">小区电话: &nbsp;&nbsp;&nbsp; {{videoMessage.iphone}}</div>
            </div>

            <div class="videoList-button">
              <div class="videoList-button-div1">
                平均在刷率: &nbsp; <span>90</span>%
              </div>
              <div class="videoList-button-div2">视频记录</div>
            </div>
          </div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
// import 'videojs-contrib-hls.js/src/videojs.hlsjs'
export default {
  name: "seamless",
  components: {
  },
  data() {
    return {
      videoMessage:{
        location:"卢浮公馆",
        videoUrl:"",
        iphone:"0532-8876532",
      },
      videoUrl: require('./12.mp4'),//视频地址
    }
  },
  computed: {
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      let myPlayer = this.$video(myVideo, {
        controls: true,
        autoplay: true,
        //是否静音播放
        muted:true,
        //是否流体自适应容器宽高
        fluid:true,
        });
      }
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.rightTop {
  left: 1370px;
  top: 110px;
  position: absolute;

  width: 500px; 
  height: 450px;
  background:url(../../assets/rightTop.png) no-repeat;
  background-size: 100% 100%;
  overflow: visible;
  .videoList {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 15px;
    &-play{
      width: 80%;
      height: 75%;
      .span1{
        font-size: 18px;
        color: white;
        margin-bottom: 6px;
      }
      .span2{
        font-size: 18px;
        color: white;
        margin-top: 12px;
      }
    }
    &-button{
      width: 80%;
      height: 20%;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-div1{
        font-size: 18px;
        span{
          margin: 0;
          padding: 0;
          font-size: 22px;
          width: 22px;
          height: 22px;
        }
      }
      &-div2{
        width: 30%;
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

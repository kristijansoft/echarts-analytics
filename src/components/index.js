/*
 * 描述: 封装组件库
 * 作者: shixiaolei
 * 日期: 2021-2-4
 */

import bgAnimation from './bgAnimation' // 登录界面背景图动画
import sinan from './sinan' // 社区报警
import alarmNumber from './alarmNumber' // 报警数量
import seamless from './seamless' // 视频监控
import smartVisite from './smartVisite' // 智能邀约
import lengend from './lengend' // 图例
import pyramid from './pyramid' // 金字塔动画


const components = {
  bgAnimation,
  sinan,
  alarmNumber,
  seamless,
  smartVisite,
  lengend,
  pyramid,
};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

const Vcomp = {
  ...components,
  install
};


export default Vcomp

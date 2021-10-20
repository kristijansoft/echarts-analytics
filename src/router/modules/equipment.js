import equipment from '../../views/equipment'
export default [
  {
    path: '/equipment',
    name: 'equipment',
    component:equipment,
    meta: {
      title: '处理故障设备'
    },
    children:[
      {  
        path: '/index',
        name: 'dealEquipment',
        component: () => import('@/views/equipment/dd.vue')
      }
    ]
  }
]
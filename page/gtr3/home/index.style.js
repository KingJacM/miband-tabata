import { gettext } from "i18n"
const globalData = getApp()._options.globalData 
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()

export const TEXT_STYLE = {
  // text: gettext('appName'),
  text: "Tabatha/节拍器",
  x: px(150-125),
  y:px(0),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(100),
  color: 0xffffff,
  text_size: px(20),
  text_style: hmUI.text_style.WRAP,
}

export const subtitle ={
  text: "设置Interval",
  y:px(240),
  x: px(170-125),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(100),
  color: 0xffffff,
  text_size: px(20),
  text_style: hmUI.text_style.WRAP,
}

export const addButton = {
  // text: gettext('appName'),
  text: "设置\n间隔",
  x: px(30),
  y:px(20+250),
  w: px(60),
  h: px(60),
  color: 0xffffff,
  text_size: px(18),
  radius: 10,
  normal_color: 0x0986D4,
  press_color:0x97cbff,
  click_func: () => {
     hmApp.gotoPage({ url: 'page/gtr3/home/index2',})
 
  }
  
}

export const buttonStyle = {
  // text: gettext('appName'),
  text: "Start",
  x: px(140-125),
  y:px(340),
  w: DEVICE_WIDTH - px(150) * 2,
  h: px(50),
  
  color: 0xffffff,
  text_size: px(36),
  normal_color: 0x0986D4,
  press_color:0x97cbff,
  radius:10,
  click_func: (button_widget) => {
    hmApp.gotoPage({ url: 'page/gtr3/home/countdown',})
    
    // button_widget.setProperty(hmUI.prop.MORE, {
    //   x: (480 - 400) / 2,
    //   y: 300,
    //   w: 400,
    //   h: 100,
    // })
  }
  
}

export const radioGroupParam={
  x: px(400),
  y: px(200),
  w: px(480),
  h: px(64),
  select_src: 'clicked.png',
  unselect_src: 'unclick.png',
  check_func: (group, index, checked) => {
    console.log('index', index)
    console.log('checked', checked)
  }
}

export const durationStyle={
  x: 180-125,
  y: 300,
  h: 20,
  w: 80,
  
  item_space: 10,
  item_config: [
    {
      type_id: 1,
      item_bg_color: 0xef5350,
      item_bg_radius: 10,
      text_view: [
        {
          x: 0,
          y: 0,
          w: 80,
          h: 40,
          key: "value",
          color: 0xffffff,
          text_size: 20,
        },
      ],
      text_view_count: 1,
      item_height: 40,
    },
  ],
  item_config_count: 1,
  data_array: globalData.interval_list,
  data_count: globalData.interval_list.length,
  
  data_type_config: [
    {
      start: 0,
      end: 1,
      type_id: 1,
    },
  ],
  data_type_config_count: 1,
}

const dataList = [
  { name: "1min",value:1 },
  { name: "2min" ,value:2},
  { name: "5min" ,value:5},
  { name: "10min" ,value:10},
  { name: "15min" ,value:15},
  { name: "20min" ,value:20},
  { name: "30min",value:30 },
  { name: "60min" ,value:60},
];

export const selectDuration={
  x: 180-125,
  y: 40,
  h: 200,
  w: 80,
  item_space: 10,
  item_config: [
    {
      type_id: 1,
      item_bg_color: 0xef5350,
      item_bg_radius: 10,
      text_view: [
        {
          x: 0,
          y: 0,
          w: 80,
          h: 40,
          key: "name",
          color: 0xffffff,
          text_size: 20,
        },
      ],
      text_view_count: 1,
      item_height: 40,
    },
  ],
  
  item_config_count: 1,
  data_array: dataList,
  data_count: dataList.length,
  item_click_func: (item, index) => {
    console.log(`scrollListItemClick index=${index}`);
    globalData.duration = dataList[index].value
    startButton.setProperty(hmUI.prop.MORE,{
      // text: gettext('appName'),
      text: "Start "+ toString(globalData.duration),
      x: px(140-125),
      y:px(340-200),
      w: DEVICE_WIDTH - px(150) * 2,
      h: px(50),
      color: 0xffffff,
      text_size: px(36),
      normal_color: 0xBEBEBE,
      press_color:0x808080,
      click_func: (button_widget) => {
        hmApp.gotoPage({ url: 'page/gtr3/home/countdown',})
     
      }
    })
    
    
  },
  data_type_config: [
    {
      start: 0,
      end: 7,
      type_id: 1,
    },
  ],
  data_type_config_count: 1,
}
import { TEXT_STYLE } from "./index.style";
import { buttonStyle } from "./index.style";
import { radioGroupParam } from "./index.style";
import { subtitle } from "./index.style";
import { addButton } from "./index.style";
let globalData = getApp()._options.globalData

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page two invoked");

    try{

      //hmUI.createWidget(hmUI.widget.IMG,{x:0,y:10,src:"aboutpage.png"})
      // hmUI.createWidget(hmUI.widget.FILL_RECT, {
      //   x: 0,
      //   y: 0,
      //   w: 192,
      //   h: 490,
      //   radius: 20,
      //   color: 0x1f1f1f, //background color
      // });
    let dataList = [
        { name: "1s",value:1 },
        { name: "2s", value:2},
        { name: "5s" , value:5},
        { name: "10s" , value:10},
        { name: "15s" , value:15},
        { name: "20s" , value:20},
        { name: "30s" , value:30},
        { name: "60s" , value:60},
      ];
      for (var i = 0; i < dataList.length; i++) {
        let value = dataList[i].value
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 55,
          y: 20+i * 55,
          text: dataList[i].name,
          w: 80,
          h: 40,
          // color:0x0986D4,
          radius: 10,
          normal_color: 0xadc3c23,
          press_color: 0xffffff,
          click_func: () => {

            globalData.interval_list.push({value:value})
              hmApp.goBack()
          },
        });
      }
      
    }catch(e){
      logger.log("The error is "+e)
    }

  },
  onInit() {
    logger.debug("page2 onInit invoked");
  },

  onDestroy() {
    logger.debug("page2 onDestroy invoked");
  },
});
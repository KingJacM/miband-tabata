import { DEVICE_WIDTH } from "./index.style";
let globalData = getApp()._options.globalData;

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page three invoked");
    console.log("we are iterating"+globalData.interval_list)

    try {
      let option = { minutes: globalData.duration - 1, second: 60 };
      let index = 0
      let timePassed = 0
      hmSetting.setScreenAutoBright(false)
      const result = hmSetting.setBrightScreen(globalData.duration*60)
      console.log("brightscreen result is "+ result)
      const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)
      // hmUI.createWidget(hmUI.widget.FILL_RECT, {
      //   x: 0,
      //   y: 0,
      //   w: 192,
      //   h: 490,
      //   radius: 20,
      //   color: 0xbebebe,
      // });

      const countdown = hmUI.createWidget(hmUI.widget.TEXT, {
        // text: gettext('appName'),
        text: option.minutes+':'+option.second,
        x: px(45),
        y: px(150),
        w: 190,
        h: px(50),
        color: 0xffffff,
        text_size: px(48),
        text_style: hmUI.text_style.WRAP,
      });
      const timer1 = timer.createTimer(0, 1000, function () {
        option.second = option.second - 1;
        if (option.second == 0 && option.minutes == 0) {
          timer.stopTimer(timer1);
          hmSetting.setBrightScreenCancel()
          hmSetting.setScreenAutoBright(true)
          hmApp.startApp({ url: "Settings_displayBrightScreen", native: true });
        }
        //make sure to prevent some edge cases bugs and add some extra condition
        if (option.second == 0 && option.minutes!= 0) {
          option.minutes -= 1;
          option.second = 59;
        }
        

        

        
        if(option.second==0){
          displaySec = "00"
        }else if(option.second<=9){
          displaySec = "0"+parseInt(option.second)
        }else{
          displaySec = option.second
        }
        
        countdown.setProperty(hmUI.prop.MORE,{
            // text: gettext('appName'),
            text: option.minutes+':'+ displaySec,
            x: px(45),
            y: px(150),
            w: 150,
            h: px(100),
            color: 0xffffff,
            text_size: px(48),
            radius:5,
            text_style: hmUI.text_style.WRAP,
          })

         

          //console.log('vibrating at index '+index)
            //console.log('vibrating at '+globalData.interval_list[index].value)

          timePassed+=1
          if(timePassed==globalData.interval_list[index].value){
            //vibrate
            vibrate.stop()
            vibrate.scene = 24
            vibrate.start()
            //--
            console.log('vibrate at index '+index)
            console.log('vibrate at '+globalData.interval_list[index].value)
            timePassed=0 //reset
            index+=1
            if(index==globalData.interval_list.length){
                index=0
              }
          }
          
        
          

          

      });

    

      //
    } catch (e) {
      logger.log("The error is " + e);
    }
    // const endButton = hmUI.createWidget(hmUI.widget.BUTTON, {
    //   // text: gettext('appName'),
    //   text: "Stop ",
    //   x: px(30),
    //   y: px(340),
    //   w: DEVICE_WIDTH - px(150) * 2,
    //   h: px(50),
    //   color: 0xffffff,
    //   text_size: px(36),
    //   normal_color: 0xbebebe,
    //   press_color: 0x808080,
    //   radius:10,
    //   click_func: (button_widget) => {
    //     hmApp.goBack();
    //     timer.stopTimer(timer1);
        
    //   },
    // });

    hmUI.createWidget(hmUI.widget.BUTTON, {
      // text: gettext('appName'),
      text: "Stop",
      x: px(55),
      y: px(350),
      w: px(100),
      h: px(50),
      color: 0xffffff,
      text_size: px(32),
      normal_color: 0x0986D4,
press_color:0x97cbff,
radius:10,
      click_func: () => {
        hmApp.goBack();
        timer.stopTimer(timer1);
        
      },
    });


  },
  onInit() {
    logger.debug("page3 onInit invoked");
  },

  onDestroy() {
    
    logger.debug("page3 onDestroy invoked");
  },
});

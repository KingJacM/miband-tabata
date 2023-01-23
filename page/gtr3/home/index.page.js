import { addButton } from "./index.style";

const globalData = getApp()._options.globalData;

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page build invoked");
    console.log(globalData.interval_list);
    console.log(globalData.duration);

    try {
      // hmUI.createWidget(hmUI.widget.FILL_RECT, {
      //   x: 0,
      //   y: 0,
      //   w: 192,
      //   h: 490,
      //   radius: 20,
      //   color: 0x1f1f1f, //background color
      // });
     

      const dataList1 = [
        { name: "1min", value: 1 },

        { name: "5min", value: 5 },

        { name: "15min", value: 15 },

        { name: "30min", value: 30 },
      ];

      const dataList2 = [
        { name: "2min", value: 2 },

        { name: "10min", value: 10 },

        { name: "20min", value: 20 },

        { name: "60min", value: 60 },
      ];

      for (var i = 0; i < dataList1.length; i++) {
        let value = dataList1[i].value
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 30,
          y: 20+i * 60,
          text: dataList1[i].name,
          w: 60,
          h: 60,
          // color:0x0986D4,
          radius: 30,
          normal_color: 0x999999,
          press_color: 0xffffff,
          click_func: () => {
            globalData.duration = value;
            startButton.setProperty(hmUI.prop.MORE, {
              // text: gettext('appName'),
              text: "Start " + globalData.duration + "m",
              x: px(45),
              y: px(400),
              w: px(100),
              h: px(40),
              color: 0xffffff,
              text_size: px(20),
              normal_color: 0x0986D4,
        press_color:0x97cbff,
        radius:10,
              click_func: () => {
                if(globalData.duration!=0){hmApp.gotoPage({ url: "page/gtr3/home/countdown" });}
              },
            });
          },
        });
      }

      for (var i = 0; i < dataList2.length; i++) {
        let value2 = dataList2[i].value
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 95,
          y: 20+i * 60,
          text: dataList2[i].name,
          w: 60,
          h: 60,
          // color:0x0986D4,
          radius: 30,
          normal_color: 0x999999,
          press_color: 0xffffff,
          click_func: () => {
            globalData.duration = value2;
            console.log(`I clicked ${i} value button named ${dataList2[i].name}`)

       
            startButton.setProperty(hmUI.prop.MORE, {
              // text: gettext('appName'),
              text: "Start " + globalData.duration + "m",
              x: px(45),
        y: px(400),
        w: px(100),
        h: px(40),
        color: 0xffffff,
        text_size: px(20),
        normal_color: 0x0986D4,
  press_color:0x97cbff,
  radius:10,
              click_func: () => {
                if(globalData.duration!=0){hmApp.gotoPage({ url: "page/gtr3/home/countdown" });}
              },
            });
          },
        });
      }

      hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 95,
        y:px(20+250),
        text: "持续\n亮屏",
        w: 60,
        h: 60,
        text_size: px(18),
        radius: 10,
        normal_color: 0x0072e3,
        press_color: 0x97cbff,
        click_func: () => {
          
          hmApp.startApp({ url: "Settings_displayBrightScreen", native: true });
        },
      });

      hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 95,
        y:px(335),
        text: "关于/\n教程",
        w: 60,
        h: 60,
        text_size: px(18),
        radius: 10,
        normal_color: 0x0072e3,
        press_color: 0x97cbff,
        click_func: () => {
          hmApp.gotoPage({ url: "page/gtr3/home/aboutPage" })
          
        },
      });


      hmUI.createWidget(hmUI.widget.BUTTON, addButton);
      const startButton = hmUI.createWidget(hmUI.widget.BUTTON, {
        // text: gettext('appName'),
        text: "Start",
        x: px(45),
        y: px(400),
        w: px(100),
        h: px(40),
        color: 0xffffff,
        text_size: px(20),
        normal_color: 0x0986D4,
  press_color:0x97cbff,
  radius:10,
        click_func: () => {
          if(globalData.duration!=0){hmApp.gotoPage({ url: "page/gtr3/home/countdown" });}
          
        },
      });
    

      for (var i = 0; i < globalData.interval_list.length; i++) {
        hmUI.createWidget(hmUI.widget.TEXT, {
          text: globalData.interval_list[i].value+"s",
          y: 30+px(300) + i * 20,
          x: px(40),
          w: 40,
          h: px(25),
          color: 0xffffff,
          text_size: px(20),
          text_style: hmUI.text_style.WRAP,
        });
      }
    } catch (e) {
      logger.log("The error is " + e);
    }
  },
  onInit() {
    logger.debug("page onInit invoked");
    hmApp.registerGestureEvent(function (event) {
      switch (event) {
        case hmApp.gesture.LEFT:
    
          hmApp.gotoPage({
            url: "page/gtr3/home/aboutPage",
       
          });
          

      }
    })

  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});

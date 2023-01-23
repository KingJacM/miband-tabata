const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page four invoked");

    try{
        // hmUI.createWidget(hmUI.widget.FILL_RECT, {
        //     x: 0,
        //     y: 0,
        //     w: 192,
        //     h: 490,
        //     radius: 20,
        //     color: 0x1f1f1f, //background color
        //   });
    hmUI.createWidget(hmUI.widget.IMG,{x:0,y:0,src:"aboutpage.png"}) //put it in the image folder
      
    }catch(e){
      logger.log("The error is "+e)
    }

  },
  onInit() {
    logger.debug("page4 onInit invoked");
  },

  onDestroy() {
    logger.debug("page4 onDestroy invoked");
  },
});
var passworld = "1234"			//手机密码
device.wakeUp()					//唤醒屏幕
setScreenMetrics(1080, 2400);	//屏幕分辨率
gestures([350, [100, 1400], [300, 400]]);
sleep(1000)
var len = passworld.length
//输入密码
for(var i = 0; i<=len;i = i+1){
    click(passworld[i])
}
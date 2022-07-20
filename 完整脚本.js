var passworld = "1234"			//手机密码
device.wakeUp()					//唤醒屏幕
setScreenMetrics(1080, 2400);	//屏幕分辨率
gestures([350, [100, 400], [300, 1400]]);
gestures([350, [100, 1400], [300, 400]]);
sleep(1000)
var len = passworld.length
//输入密码
for(var i = 0; i<=len;i = i+1){
    click(passworld[i])
}
function TG_Health(){
    home()		//回到主屏
    sleep(500)
    launchApp("企业微信")
    while(!click("健康天天报"));
    sleep(300)
    while(!click("上报提醒"));
    sleep(300)
    while(!click("健康上报"));
    sleep(5000)      //定位延迟根据实际网速设置,5s应该足够
    click("确认")		//如果是重复打卡，点击确认
    sleep(3000)
    while(!click("签到"));
    sleep(3000)      
    //click("已知晓")  //默认两个已知晓全选，用数组区分
    //sleep(300)
    while(!click("已知晓",1));
    sleep(300)
    while(!click("已知晓",3));
    sleep(500)
    while(!click("为疫情防控，"));
    sleep(500)
    while(!click("上述信息是我本人填写"))
    sleep(500)
    click("提交")
    sleep(500)
}
function OpenMusic(){
	launchApp("网易云音乐");    
    sleep(5000)
	click(855, 2170);
    var maxMusic = device.getMusicMaxVolume()
    device.setMusicVolume(maxMusic*0.5)		//设置音量为50
}
//sleep(3000)
TG_Health();	//调用打卡函数
//for循环检测打卡是否成功
for(var i=0;i<=2;i++){
    var k = click("确认");
    if(k){
        toast("签到完成")
        break;
    }if(i == 1) {
        back()
        back()
        TG_Health()
        var k2 = click("确认");
        if(k2){
            break;
        }
    }
    if(i == 2){
        toast("打开音乐")
        OpenMusic();
        break;
    }
    toast(i)
}

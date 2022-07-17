launchApp("网易云音乐");    
sleep(2000);
click(855, 2170);
var maxMusic = device.getMusicMaxVolume()
device.setMusicVolume(maxMusic*0.5)		//设置音量为50
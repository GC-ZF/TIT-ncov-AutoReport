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

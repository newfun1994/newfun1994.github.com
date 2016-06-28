---
layout: post
title:  "React Native 天气查询"
date:   2016-03-25 7:07:06 +0800
categories: React-Native
---

### 天气查询

实现效果

![实现效果]({{ site.image }}/20160325/img.png)

技术点：

1. http请求
2. 自定义字体
3. NavigatorIOS

本文主要介绍如何使用React-Native实现一个查询天气的小demo

首先创建工程 `react-native init RNWeather`

环境还没搭建的请自行谷歌，这里不多做介绍

#### NavigatorIOS

因为我们要使用到`NavigatorIOS`所以index.ios.js作为工程的入口，虽然整个工程就两个文件。

创建查询天气文件`weatherView.js`

并在index.ios.js里面先导入`weatherView.js`文件

`import Index from './weatherView';`


	//index.ios.js
	class RNWeather extends Component {
	  render() {
	    return (
	      <NavigatorIOS
	        style={styles.container}
	        initialRoute={{
	        title: '天气查询',
	        component: Weather
	        }}/>
	    );
	  }
	}
	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	  },
	});	

`注意:`用NavigatorIOS一定要设置`style={ {flex: 1} }`, 否则不会显示任何内容

接下来构建`weatherView.js`

列举一下所需要的基本控件`Text`,`TextInput`,`TouchableOpacity`(按钮)

下面开始布局，关于布局，react native里面只支持横向布局和纵向布局(默认)，这两种组合起来基本可以实现大部分app的页面

查询天气的界面主要分为两个大部分，第一部分是输入框和按钮，第二部分是显示天气状况和温度，这两个部分是采用横向布局

	//整体布局
	<View style={styles.container}>
	  ...
	</View>
	//样式
	const styles = StyleSheet.create({
	  container: {
      marginTop: 65,
      padding: 8,
      },
	});
	
整体布局设置`marginTop: 65`否则会被标题栏挡住64像素内容

	//searchBar搜索框
    <View style={styles.searchBar}>
      <TextInput
        style={styles.cityNameInput}
        onChangeText={(cityName) => this.setState({ cityName }) }
        value={this.state.cityName}
        clearButtonMode='while-editing'
        placeholder='请输入城市名称'
        />
      <TouchableOpacity style={styles.button}
        onPress={() => this.fetchData() }>
        <Text style={styles.buttonText}>
          查询
        </Text>
      </TouchableOpacity>
    </View>  
    
	//样式
	  searchBar: {
	    height: 30,
	    flexDirection: 'row',
      },
      cityNameInput: {
    	height: 30,
    	flex: 9,
    	borderColor: '#00BFFF',
    	borderWidth: 1,
    	paddingLeft: 6,
	  },
	  button: {
	    height: 30,
	    flex: 1,
	    backgroundColor: '#00BFFF',
	    justifyContent: 'center'
	  },
	  buttonText: {
	    fontSize: 14,
	    color: '#FFFFFF',
	    alignSelf: 'center'
	  },
   
 横向布局设置`flexDirection: 'row'`即可，通过`flex`设置视图比例
 
	//weatherView天气状况和温度
	<View style={styles.weatherView}>
	 <View style={styles.weatherLeftView}>
	   <Text style={styles.weatherText}>
	     {this.state.weather}
	   </Text>
	 </View>
	 <View style={styles.weatherRightView}>
	   <Text style={styles.weatherTemp}>
	     当前温度：{this.state.nowTemp}{'\n'}
	     最低温度：{this.state.minTemp}{'\n'}
	     最高温度：{this.state.maxTemp}
	   </Text>
	 </View>
	</View>
	
	//样式
	weatherView: {
      height: 160,
      marginTop: 10,
      flexDirection: 'row',
	  },
	weatherLeftView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffcc',
    },
    weatherRightView: {
	  flex: 1,
	  justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffccff',
    },
    weatherText: {
      fontSize: 40,
      fontFamily: 'MF LiHei (Noncommercial)',
    },
    weatherTemp: {
      fontFamily: 'MF LiHei (Noncommercial)',
      fontSize: 20,
    },
 
布局到此就结束了

#### http请求

接下来进行网络请求，通过`TouchableOpacity` `onPress`属性，调用方法
`onPress={() => this.fetchData() }`

	//首先各个内容默认值,不设置默认值，刚打开的界面会不美观
	constructor(props) {
	  super(props);
	  this.state = {
	    weather: '天气',
	    nowTemp: 0,
	    maxTemp: 0,
	    minTemp: 0,
	    cityName: '上海',
	  };
	}
	
	//网络交互百度APIStore的提供的查询天气接口
	var REQUEST_URL = 'https://apis.baidu.com/apistore/weatherservice/cityname?cityname=';
	fetchData() {
	  fetch(REQUEST_URL + this.state.cityName, {
	    method: 'GET',
	    headers: {
	      'apikey': '75f2768bec9b29f46b3104586e1a724b'
	    }
	  })
	    .then((response) => response.json())
	    .then((responseData) => {
	      if (responseData.errNum == 0) {
	        this.setState({
	          weather: responseData.retData.weather,
	          nowTemp: responseData.retData.temp,
	          minTemp: responseData.retData.l_tmp,
	          maxTemp: responseData.retData.h_tmp,
	        });
	      } else { alert('输入有误!'); }
	    })
	    .done();
	}	
	  
`fetch`完成网络请求后`.then()`会将返回数据赋值给`response`通过箭头函数`=>`执行`response.json()`方法，再将json对象赋值给`responseData`,然后进行后续取值操作。最后通过`setState`来修改相应的值，`setState`执行完成后会重新调用`render()`方法，由此来刷新界面。

#### 自定义字体
 自定义字体在iOS上实现还是比较简单的，和一般的实现方法相同。
 
 1.首先将字体加入到项目中
 
 ![1]({{ site.image }}/20160325/1.jpg)

 
 2.打开Build Phases下的Copy Bundle Resources确定一下刚刚加入到项目里面的字体在这里面，否则请手动添加进去
 
 ![2]({{ site.image }}/20160325/2.jpg)

 
 3.打开Info.plist文件 添加一项Fonts provided by application

将字体文件名加入到这个数组里

![3]({{ site.image }}/20160325/3.jpg)


4.打印出系统所有的字体名称来确定字体名称，字体名称不是字体文件名

通过以下代码可以打印出所有字体

	NSArray *familyNames = [UIFont familyNames];  
	for(NSString *familyName in familyNames)  
	{  
	    NSLog(@"%@", familyName);  
	    NSArray *fontNames = [UIFont fontNamesForFamilyName:familyName];  
	    for(NSString *fontName in fontNames)  
	    {  
	        NSLog(@"\t%@", fontName);  
	    }  
	} 
 
控制台字体太多，找不到，可以先在mac Finder下双击字体文件，不是在xcode里

![4]({{ site.image }}/20160325/4.jpg)


通过标题就可以迅速定位

找到你所使用的字体，在当前字体名下的字体都可以使用

![5]({{ site.image }}/20160325/5.jpg)


	//js
	weatherTemp: {
	  fontFamily: 'MF LiHei (Noncommercial)',
	  fontSize: 20,
	}
	
	//oc
	[UIFont fontWithName:@"MF LiHei (Noncommercial)" size:20];


源码请见 [React-Native-Example](https://github.com/newfun1994/React-Native-Example)



--newfun.上海.2016年3月25日




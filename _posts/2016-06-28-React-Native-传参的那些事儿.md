---
layout: post
title:	"React Native 传参的那些事儿"
data:	2016-06-28 8:22:43 +0800
categories:	React-Nartive
---

本文主要介绍了在React-Native下三种常用的传参方式：

1. 自定义组件传参
2. navigator传参
3. navigator回调

如有缺少请指出

很久一段时间没有写博客了，因为小编在忙于毕业设计，毕业答辩，以及毕业旅行，如今已顺利毕业。哈哈哈哈

首先还是创建工程，这里我就不讲了，不会的自行google。

创建navigator根文件`rootView.js`&&demo不可少的`secondView.js`

#### 自定义组件传参
在React Native里面自定义组是必不可少的，接下来我们就讲一讲 如何来自定义一个组件

在实际开发中Button用的是比较多的一种控件，可是React Native并没有直接提供Button而是提供了Button的许多零件让你来自己组装你想要的按钮。常用的两个核心零件TouchableHighlight和TouchableHighlight，至于两者的区别，在这里暂且保密。

github上有自定义按钮，你为什么还要自己造轮子呢，在特定的环境下别人的Button并不一定是最方便快捷的。

**如何自定义一个组件**

	//button
	class Button extends Component {
		render() {
			return (
				<TouchableOpacity
					style={styles.button}
					onPress={this.props.function}
				>
					<Text style={{color:'#FFF', fontSize:17}}>{this.props.name}</Text>
				</TouchableOpacity>
			);
		}
	}
	
	//Button样式
	const styles = StyleSheet.create({
		button: {
			width: 180,
			height: 40,
			backgroundColor: '#00BFFF',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 5,
			margin: 5
		}
	}
	
**如何使用自定义的组件**

在你要显示的地方直接调用就ok啦

	<Button
	  name="组件传参"
	  function={()=>this.AlertView('nothing')}
	/>
	
**传参呢，说好的传参**

其实代码里面以及显示的很清楚了

在自定义组件中使用`{this.props.name}`来接收要传递的参数

在使用时直接 `<Button name="参数传递"/>`如何传递多个参数，自行寻找，上面的code里面有

自定义组件传参over


小编要干活了，晚上见。

demo请见 [React-Native-Example](https://github.com/newfun1994/React-Native-Example)

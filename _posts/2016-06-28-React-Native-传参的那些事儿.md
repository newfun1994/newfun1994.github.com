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

#### Navigator传参

其实很简单啦，因为as same as上面的组件传参

其实就是把要传的参数塞入component路由里面去。

	//push to nextView
	NextView(componentName) {
		i++;
		const {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name: 'componentName',
				component: componentName,
				params: {
					param1: i,
				}
			});
		}
	}

params1就是传递过去的参数。

参数接收也是十分简单的和第一种情况一样`{this.props.param1}`

#### Navigator回调

在Navigator中没有提供参数回调的方法，但是我们可以采取其他手段实现回调，毕竟是js

我采取的方案回调的原理就是在第一个页面传递一个方法到第二个页面，然后在pop的同时执行传递过来的方法。

	//push to nextView
	NextView(componentName) {
		let _me = this;
		const {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name: 'componentName',
				component: componentName,
				params: {
					callback(param){
						_me.setState({
							callbackParam:param
						});
					}
				}
			});
		}
	}

需要`注意`的是要将当前的`this` 赋值给 `_me` 然后传递 `_me` 下的方法,否则第二个界面会报错,应为this会被第二个界面当做自己的this,于是就redColor咯。

	//pop back and callback
	<TouchableOpacity
		style={styles.button}
		onPress={() => {
			this.props.callback('this callback param!');
			this.props.navigator.pop();
			}
		}
	>
		<Text style={{color:'#FFF', fontSize:17}}>返回</Text>
	</TouchableOpacity>


如有疑问请联系小编。

--newfun.上海.2016年6月29日



demo请见 [React-Native-Example](https://github.com/newfun1994/React-Native-Example)

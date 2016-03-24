
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

var REQUEST_URL = 'https://apis.baidu.com/apistore/weatherservice/cityname?cityname=';

class weatherView extends Component {

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

  //网络交互
  fetchData() {
    fetch(REQUEST_URL + this.state.cityName, {
      method: 'GET',
      headers: {
        'apikey': '75f2768bec9b29f46b3104586e1a724b'
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          weather: responseData.retData.weather,
          nowTemp: responseData.retData.temp,
          minTemp: responseData.retData.l_tmp,
          maxTemp: responseData.retData.h_tmp,
        });
      })
      .done();
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TextInput
            style={styles.cityNameField}
            onChangeText={(cityName) => this.setState({ cityName }) }
            value={this.state.cityName}
            clearButtonMode='while-editing'
            placeholder='请输入城市名称'
            />
          <TouchableHighlight style={styles.searchButton}
            onPress={() => this.fetchData() }
            underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>
              查询
            </Text>
          </TouchableHighlight>
        </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    padding: 8,
    backgroundColor: '#97FFFF',
  },
  searchView: {
    height: 30,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
  },
  searchButton: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 14,
    color: '#48BBEC',
    alignSelf: 'center'
  },
  cityNameField: {
    height: 30,
    flex: 9,
    borderColor: '#0099ff',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 4,
  },
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
});

module.exports = weatherView;


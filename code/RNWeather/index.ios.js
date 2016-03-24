
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';

var Index = require('./weatherView');

class RNWeather extends Component {
    render() {
      return (
        <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: '天气查询',
                    component: Index,
                }}
            />
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
AppRegistry.registerComponent('RNWeather', () => RNWeather);

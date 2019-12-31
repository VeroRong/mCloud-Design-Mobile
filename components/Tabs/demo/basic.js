import React  from 'react'
import {
    View,  StyleSheet ,
} from 'react-native'
import { Tabs } from '../..'

export default class TabViewExample extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        index: 2,
        routes: [
            { key: '1', title: '新闻' },
            { key: '2', title: '视频' },
            { key: '3', title: '篮球' },
            { key: '4', title: '综艺' },
            { key: '5', title: '电影' },
            { key: '6', title: '综6艺' },
            { key: '7', title: '电7影' },
        ],
    };
    _renderScene = ({ route }) => {
        switch (route.key) {
        case '1':
            return  (
                <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
            )
        case '2':
            return  (
                <View style={[styles.container, {
                    backgroundColor: '#673ab7',
                }]}
                />
            )
        case '3':
            return  (
                <View style={[styles.container, {
                    backgroundColor: 'red',
                }]}
                />
            )
        case '4':
            return  (
                <View style={[styles.container, {
                    backgroundColor: 'blue',
                }]}
                />
            )
        case '5':
            return  (
                <View style={[styles.container, {
                    backgroundColor: 'black',
                }]}
                />
            )
        case '6':
            return  (
                <View style={[styles.container, {
                    backgroundColor: 'green',
                }]}
                />
            )
        case '7':
            return  (
                <View style={[styles.container, {
                    backgroundColor: 'yellow',
                }]}
                />
            )
        default:
            return null
        }
    }
    render() {
        return (
            <Tabs
                navigationState={{ ...this.state }}
                TabBarWrapperStyle={{ width: 375 }}
                UIColor="#586BFB"
                labelWidth={70}
                scrollEnabled={true}
                renderScene={this._renderScene}
                onIndexChange_Tabs={(index) => {
                    // eslint-disable-next-line react/no-unused-state
                    this.setState({ index })
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

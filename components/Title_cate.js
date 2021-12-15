import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './Styles'

export class Title_cate extends Component {
    render() {
        return (
            <View>
                <Text style={styles.Title_Content}>{this.props.content}</Text>
            </View>
        )
    }
}

export default Title_cate

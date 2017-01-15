// @flow

import React from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ListviewGridExampleStyle'

// I18n
import I18n from 'react-native-i18n'

class ViewBeerMenuScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.boldLabel}>Yo Dawgs, we need to implement this</Text>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBeerMenuScreen)

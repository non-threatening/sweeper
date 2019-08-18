import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
            </View>
          </View>
          <WebView
            originWhitelist={['*']}
            source={{ html: '<h1>Hello world</h1>' }}
            style={{
              marginTop: 20,
              backgroundColor: 'blue',
              color: 'white',
              height: 200
            }}
          />
          {/* <WebView
            source={{ uri: 'https://infinite.red' }}
            style={{ marginTop: 20, backgroundColor: 'red', height: 200 }}
          /> */}
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.darker
  },
  body: {
    backgroundColor: Colors.black
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.pink
  }
})

export default App

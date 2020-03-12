import React from 'react'
import { Text, View } from 'react-native'

import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export const MasterController = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'plum',
        flex: 1,
        width: width,
        marginBottom: 25,
        paddingVertical: 10
      }}>
      <Text>Thing</Text>
    </View>
  )
}

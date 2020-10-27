import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomePage } from './src/pages/HomePage'
import { ProfilePage } from './src/pages/ProfilePage'
import { ScrollPage } from './src/pages/ScrollPage'
import { ListPage } from './src/pages/ListPage'
import { FetchDataPage } from 'pages/FetchDataPage'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'HomePage' }}
        />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="ScrollPage" component={ScrollPage} />
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="FetchDataPage" component={FetchDataPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

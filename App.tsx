import React from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import SpaceStation from './components/SpaceStation';
import Choice from './components/Choice';
import Details from './components/Details';
import Splash from './components/Splash';

export type StackProps = {
  Splash: undefined;
  SpaceStation: undefined;
  Choice: undefined;
  Details: {fromDate: string; toDate: string};
};
const stackNavigator = createNativeStackNavigator<StackProps>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <stackNavigator.Navigator initialRouteName="Splash">
        <stackNavigator.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <stackNavigator.Screen
          name="SpaceStation"
          component={SpaceStation}
          options={{title: 'Virtual Space Trip'}}
        />
        <stackNavigator.Screen
          name="Choice"
          component={Choice}
          options={{title: 'Select a package'}}
        />
        <stackNavigator.Screen
          name="Details"
          component={Details}
          options={{title: 'Enjoy the view'}}
        />
      </stackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;

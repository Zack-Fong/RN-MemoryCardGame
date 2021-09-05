import React from 'react';
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import store from './src/components/redux/store';

import GameScreen from './src/components/screens/GameScreen';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <GameScreen />
        </SafeAreaProvider>
      </Provider>
    )
  }
}

export default App;
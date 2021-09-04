import React from 'react';
import { Provider } from "react-redux";

import { generateAndShufflePairsOfUniqueNumbers } from './src/common/functions';
import { CARD_DIMENSIONS } from './src/common/constants';

import store from './src/components/redux/store';
import { updateCardPairValues } from './src/components/redux/card/cardAction';

import GameScreen from './src/components/screens/GameScreen';

const CARD_PAIRS_VALUE = generateAndShufflePairsOfUniqueNumbers(CARD_DIMENSIONS.THREE_TIMES_FOUR.NUMBER_OF_CARDS);

class App extends React.Component {
  componentDidMount() {
    store.dispatch(updateCardPairValues(CARD_PAIRS_VALUE));
  }

  render() {
    return (
      <Provider store={store}>
        <GameScreen />
      </Provider>
    )
  }
}

export default App;
import React from 'react';
import { View } from 'react-native';

import store from '../redux/store';

import { isArrayEmpty } from '../../common/functions';

class GameScreen extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View>
                {!isArrayEmpty(store.getState().cardReducer.cardPairValues) ? console.log("Card_pair: ", store.getState().cardReducer.cardPairValues) : null}
            </View>
        )
    }
}
export default GameScreen;
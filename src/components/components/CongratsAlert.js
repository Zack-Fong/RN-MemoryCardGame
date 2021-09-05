import React from 'react';
import { View, Alert } from 'react-native';

import { capitalizeString } from '../../common/functions';
import { CONSTANTS } from '../../common/constants';

class CongratsAlert extends React.Component {
    render() {
        return (
            <View>
                {
                    this.props.isShow ?
                        Alert.alert(
                            capitalizeString(CONSTANTS.CONGRATULATIONS) + "!",
                            "You win this game by " + this.props.stepsTaken + " " + CONSTANTS.STEPS + "!",
                            [
                                {
                                    text: CONSTANTS.TRY_ANOTHER_ROUND,
                                    onPress: () => {
                                        this.props.onPressAlertButton && this.props.onPressAlertButton();
                                    }
                                }
                            ]
                        ) : null
                }
            </View>
        )
    }
}
export default CongratsAlert;
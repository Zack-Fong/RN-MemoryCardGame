import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import store from '../redux/store';
import { updateStepsTaken } from '../redux/step/stepAction';

import { CONSTANTS } from '../../common/constants';
import { generateCardWidth } from '../../common/functions';
import { themes } from '../../common/themes';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    onPressCard = () => {
        if (!this.props.cardInformation.matched && !this.props.isVerifying && !this.props.cardInformation.numberShownToUser) {
            store.dispatch(updateStepsTaken());
            this.props.onPressCard && this.props.onPressCard(this.props.cardIndex);
        }
    }

    render() {
        return (
            <View
                key={this.props.cardIndex}
                style={{
                    marginTop: CONSTANTS.GAP_BETWEEN_CARDS,
                    marginLeft: CONSTANTS.GAP_BETWEEN_CARDS,
                    width: generateCardWidth(),
                    height: this.props.cardHeight,
                    backgroundColor: 'white',
                    borderRadius: 16
                }}
            >
                <TouchableOpacity
                    style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={this.onPressCard}>
                    {
                        this.props.cardInformation.matched || this.props.cardInformation.numberShownToUser ?
                            <View
                                style={[]}
                            >
                                <Text>
                                    {this.props.cardInformation.number}
                                </Text>
                            </View> :
                            <View style={[{
                                width: '94%',
                                height: '97%',
                                backgroundColor: themes.lightBlue,
                                borderRadius: 16,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }]}
                            >
                                <Text style={{ fontSize: 30, fontWeight: 'bold', color: "white" }}>
                                    ?
                                </Text>
                            </View>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}
export default Card;
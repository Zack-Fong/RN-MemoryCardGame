import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FlipCard from "react-native-flip-card-plus";

import store from '../redux/store';
import { updateStepsTaken } from '../redux/step/stepAction';

import { CONSTANTS } from '../../common/constants';
import { generateCardWidth } from '../../common/functions';
import { themes } from '../../common/themes';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flip: false
        }
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
                    height: this.props.cardHeight
                }}
            >
                <FlipCard
                    style={{
                        backgroundColor: this.props.cardInformation.matched || this.props.cardInformation.numberShownToUser ? "white" : themes.lightBlue,
                        borderRadius: 16,

                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%'
                    }}
                    flipHorizontal
                    pressable={true}
                    onPressed={() => {
                        if (!this.props.cardInformation.matched && !this.props.isVerifying && !this.props.cardInformation.numberShownToUser) {
                            store.dispatch(updateStepsTaken());
                            this.props.onPressCard && this.props.onPressCard(this.props.cardIndex);
                        }
                    }}
                    flip={this.props.cardInformation.matched || this.props.cardInformation.numberShownToUser}
                >
                    {/* Face Side */}
                    <View style={{
                        backgroundColor: themes.lightBlue,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: "white" }}>
                            ?
                        </Text>
                    </View>
                    {/* Back Side */}
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text>
                            {this.props.cardInformation.number}
                        </Text>
                    </View>
                </FlipCard>
            </View >

        )
    }
}
export default Card;
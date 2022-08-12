import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from 'react-redux';

import store from '../redux/store';

import { resetStepsTaken } from '../redux/step/stepAction';
import { resetCardPairValues, updateCardPairValues } from '../redux/card/cardAction';

import Card from '../components/Card';
import CongratsAlert from '../components/CongratsAlert';

import { isArrayEmpty, generateCardHeight, uppercaseString, isEqual, isObjectEmpty } from '../../common/functions';

import { CONSTANTS } from '../../common/constants';
import { themes } from '../../common/themes';

const mapStateToProps = state => {
    return {
        cardPairValues: state.cardReducer.cardPairValues,
        steps: state.stepReducer.stepsTaken
    };
};

class GameScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardHeight: generateCardHeight(themes.screenHeight - 40),

            isShowCongratsAlert: false,
            verifyingUserSelection: false,

            currentSelection: {}
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} onLayout={(event) => {
                this.setState({
                    cardHeight: generateCardHeight(event.nativeEvent.layout.height - 40)
                })
            }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: 10,
                        marginRight: CONSTANTS.GAP_BETWEEN_CARDS,
                        height: 40
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            store.dispatch(resetStepsTaken());
                            store.dispatch(resetCardPairValues());

                            this.setState({
                                currentSelection: {},

                                isShowCongratsAlert: false,
                                verifyingUserSelection: false
                            })
                        }}
                    >
                        <Text style={{ color: '#007AFF' }}>
                            {uppercaseString(CONSTANTS.RESTART)}
                        </Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                fontWeight: "bold"
                            }}>
                            {uppercaseString(CONSTANTS.STEPS) + ": "}
                        </Text>
                        <Text
                            style={{
                                color: '#007AFF',
                                fontSize: 20,
                                fontWeight: "bold"
                            }}>
                            {this.props.steps}
                        </Text>
                    </View>

                </View>
                {!isArrayEmpty(this.props.cardPairValues) ?
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: "wrap",
                            justifyContent: 'center',
                            marginRight: CONSTANTS.GAP_BETWEEN_CARDS
                        }}>
                        {
                            this.props.cardPairValues.map((cardPairValue, cardPairValueIndex) => {
                                return (
                                    <Card
                                        cardIndex={cardPairValueIndex}
                                        cardHeight={this.state.cardHeight}
                                        cardInformation={cardPairValue}
                                        isVerifying={this.state.verifyingUserSelection}
                                        onPressCard={(cardPairValueIndex) => {
                                            this.setState({
                                                verifyingUserSelection: true
                                            }, () => {
                                                let cardPairValue = store.getState().cardReducer.cardPairValues[cardPairValueIndex];
                                                cardPairValue.numberShownToUser = true;

                                                let cardPairValues = store.getState().cardReducer.cardPairValues;
                                                let matchedCardPairValues = cardPairValues.filter((CardPairValue) => CardPairValue.matched);

                                                if (isEqual(matchedCardPairValues.length, cardPairValues.length)) {
                                                    this.setState({
                                                        isShowCongratsAlert: true
                                                    })
                                                } else {
                                                    if (!isObjectEmpty(this.state.currentSelection)) {
                                                        if (isEqual(this.state.currentSelection.cardPairValue.number, cardPairValue.number)) {
                                                            cardPairValue.matched = true;
                                                            cardPairValue.numberShownToUser = false;

                                                            this.state.currentSelection.cardPairValue.matched = true;
                                                            this.state.currentSelection.cardPairValue.numberShownToUser = false;

                                                            cardPairValues[cardPairValueIndex] = cardPairValue;
                                                            cardPairValues[this.state.currentSelection.cardPairValueIndex] = this.state.currentSelection.cardPairValue;

                                                            store.dispatch(updateCardPairValues(cardPairValues));

                                                            if (isEqual(matchedCardPairValues.length, cardPairValues.length - 2)) {
                                                                this.setState({
                                                                    isShowCongratsAlert: true
                                                                })
                                                            }

                                                            this.setState({
                                                                currentSelection: {},
                                                                verifyingUserSelection: false
                                                            })
                                                        } else {
                                                            cardPairValues[cardPairValueIndex] = cardPairValue;
                                                            store.dispatch(updateCardPairValues(cardPairValues));

                                                            setTimeout(() => {
                                                                cardPairValues.forEach((CardPairValue) => {
                                                                    CardPairValue.numberShownToUser = false;
                                                                })

                                                                this.setState({
                                                                    currentSelection: {},
                                                                    verifyingUserSelection: false
                                                                }, () => {
                                                                    store.dispatch(updateCardPairValues(cardPairValues));
                                                                })
                                                            }, 1000)
                                                        }
                                                    } else {
                                                        cardPairValues[cardPairValueIndex] = cardPairValue;
                                                        store.dispatch(updateCardPairValues(cardPairValues));

                                                        this.setState({
                                                            currentSelection: { cardPairValue: cardPairValue, cardPairValueIndex: cardPairValueIndex },
                                                            verifyingUserSelection: false
                                                        })
                                                    }
                                                }
                                            })
                                        }}
                                    />
                                )
                            })
                        }
                    </View> : null}

                <CongratsAlert
                    isShow={this.state.isShowCongratsAlert}
                    stepsTaken={this.props.steps}
                    onPressAlertButton={() => {
                        this.setState({
                            currentSelection: {},

                            isShowCongratsAlert: false,
                            verifyingUserSelection: false
                        }, () => {
                            store.dispatch(resetStepsTaken());
                            store.dispatch(resetCardPairValues());
                        })
                    }}
                />

            </SafeAreaView>
        )
    }
}
export default connect(mapStateToProps)(GameScreen);
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import App from '.././utils/Tag';
import { styles } from '../stylecard/styles';
import { textCardsEng } from '../textcard/textCards';

class Flash extends Component {

    state = {
        cards: textCardsEng
    }

    UNSAFE_componentWillMount() {
        const currentCards = this.state.cards;

        this.setState({
            cards: currentCards,
            currentCard: this.getRandomCard(currentCards)
        })

        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })

        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 90],
            outputRange: ['0deg', '180deg'],
        })

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
    }

    flipCard() {
        if (this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 7,
                tension: 40,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 7,
                tension: 40,
                useNativeDriver: true,
            }).start();
        }
    }

    getRandomCard(currentCards) {
        var randomIndex = Math.floor(Math.random() * currentCards.length);
        var card = currentCards[randomIndex];
        if (card === this.state.currentCard) {
            this.getRandomCard(currentCards)
        }

        return (card);
    }

    update() {

        if (this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 20,
                tension: 5000,
                useNativeDriver: true,
            }).start();
        }
        const currentCards = this.state.cards;
        this.setState({
            cards: currentCards,
            currentCard: this.getRandomCard(currentCards)
        });
    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate }
            ]
        }
        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.cardArea}>

                    <Animated.View
                        style={[
                            styles.card,
                            frontAnimatedStyle,
                            { opacity: this.frontOpacity }
                        ]}
                    >
                        <MaterialIcons
                            name="audiotrack"
                            size={24}
                            color="black"
                            style={styles.audiotrack}
                        />
                        <App eng={this.state.currentCard.eng} />
                    </Animated.View>

                    <Animated.View
                        style={[
                            styles.card,
                            styles.cardBack,
                            backAnimatedStyle,
                            { opacity: this.backOpacity }
                        ]}
                    >
                        <App por={this.state.currentCard.por} />

                    </Animated.View>
                </View>

                <View style={styles.containerButton}>

                    <TouchableOpacity
                        onPress={() => this.flipCard()}
                        style={styles.button}
                    >
                        <Text style={styles.buttontext}>

                            <FontAwesome
                                name="rotate-right"
                                size={24}
                                color="black"
                            />

                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.update()}
                        style={styles.button}
                    >
                        <Text style={styles.buttontext}>Próximo</Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Flash;
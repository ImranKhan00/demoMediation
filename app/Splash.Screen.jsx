import * as React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Title } from 'react-native-paper';

class Splash extends React.Component {
    title = "Relax  Lite With Andrew Johnson";
    subtitle = "Tension is who you think you should be. Relaxation is who you are.";

    windowWidth = Dimensions.get('screen').width;
    windowHeight = Dimensions.get('screen').height;
    handleContinue = () => {
        this.props.navigation.navigate('introduction')
    }
    render() {
        return <View style={styles.container}>
            <ImageBackground source={require("../assets/bg.jpg")} style={styles.ImageBackground}>
                <View style={styles.logo}><Image source={require("../assets/logo.jpeg")} style={{ height: 100, width: 150, resizeMode: "cover" }} /></View>
                <View style={styles.titleContainer}><Title style={styles.title}>{this.title}</Title> </View>
                <View style={styles.subtitle}><Text>"{this.subtitle}"</Text><Text>-Chinese Proverb</Text></View>
                <View style={styles.button}>
                    <TouchableOpacity onPressOut={this.handleContinue}>
                        <Image source={require("../assets/button.jpg")} style={{ height: 70, width: 300 }} />
                    </TouchableOpacity> </View>
            </ImageBackground>
        </View>
    }

}

export default Splash;


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    ImageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        paddingTop: 50
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleContainer: {
        flex: 1, marginHorizontal: 50,
        justifyContent: "center",
    },
    title: { textAlign: "center", fontWeight: "700" },
    subtitle: {
        flex: 1, textAlign: "center",
        marginHorizontal: 40
    },
    button: {
        flex: 1,
        alignItems: "center"
    },
    image: {
        width: 250,
        height: 70
    }
})
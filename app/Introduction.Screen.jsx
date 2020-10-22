import * as React from 'react';
import { ImageBackground, View, TouchableOpacity, StyleSheet, Image, Text, Dimensions } from 'react-native';


class Introduction extends React.Component {
    handlePlay = () => {
        this.props.navigation.navigate('relax')
    }
    render() {
        return <View style={styles.container}>
            <ImageBackground source={require("../assets/bg.jpg")} style={styles.ImageBackground}>
                <View style={styles.topbar}>
                    <Image source={require('../assets/face.png')} style={styles.iconImage} />
                    <Image source={require('../assets/setting.png')} style={styles.iconImage} />
                </View>
                <View style={styles.body}>
                    <View style={styles.logo}><Image source={require("../assets/logo.jpeg")} style={{ height: 100, width: 150, resizeMode: "cover" }} /></View>
                    <View style={styles.media}>
                        <Text style={styles.title}>Relax Lite with Andrew Johnson</Text>
                        <View style={styles.sliderContainer}>
                            <Text>00:00</Text>
                            <Image source={require('../assets/bar.png')} style={{ height: 30, width: Dimensions.get("screen").width - 100, resizeMode: "center" }} />
                            <Text>00:00</Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPressOut={this.handlePlay}>
                                <Image source={require("../assets/play.png")} style={{ height: 100, width: 100 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    }

}

export default Introduction;

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
    iconImage: {
        height: 35, width: 35
    },
    topbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        marginHorizontal: 10
    },
    body: {
        flex: 4
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        textAlign: "center"
    },
    sliderContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 30,
        width: Dimensions.get("screen").width
    },
    button: {
        flex: 1,
        alignItems: "center"
    },
    media: {
        flex: 2,
        alignItems: "center",
        justifyContent: "space-around",
    }
});
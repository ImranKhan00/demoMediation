import * as React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements';

class Relax extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPause: true,
            length: 300,
            current: 0,
        }
    }
    // handlePlayButton = () => {
    //     this.setState({ isPause: !this.state.isPause })
    // }
    // componentDidMount() {
    //     if (!this.state.isPause) {
    //         setInterval(() => {
    //             console.log(this.state.current)
    //             if (this.state.current >= this.state.length - 1) this.setState({ isPause: true, current: 0 });
    //             else this.setState({ current: this.state.current + 1 })
    //         }, 1);
    //     }
    // }
    handleContinue = () => {
        this.props.navigation.navigate('splash')
    }
    render() {
        return <View style={styles.container}>
            <ImageBackground source={require("../assets/bg.jpg")} style={styles.ImageBackground}>
                <View style={styles.media}>
                    <Text style={styles.title}>Introduction</Text>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.playtime}>00:00</Text>
                        {/* <Slider
                            value={this.state.current}
                            maximumValue={this.state.length}
                            onValueChange={(value) => this.setState({ value })}
                        /> */}
                        <Image source={require('../assets/bar.png')} style={{ height: 30, width: Dimensions.get("screen").width - 100, resizeMode: "center" }} />
                        <Text style={styles.playtime}>00:00</Text>
                    </View>
                    <View style={styles.button}>
                        <Image source={require("../assets/play.png")} style={{ height: 100, width: 100 }} />
                    </View>
                </View>
                <View style={styles.button}>

                    <TouchableOpacity onPressOut={this.handleContinue}>
                        <Image source={require("../assets/button.jpg")} style={{ height: 70, width: 300 }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    }

}

export default Relax;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around"
    },
    ImageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        paddingTop: 70
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
    },

    button: {
        flex: 1,
        alignItems: "center"
    },
    playtime: {
        textAlign: "center"
    }
});
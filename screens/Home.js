import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require("../assets/bg_image.png")} style={styles.backgroundImg} >
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Iss Tracker App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("issLocation")}>
                        <Text style={styles.routeText}>IssLocation</Text>
                        <Text style={styles.knowMore}>Know More</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require("../assets/iss_icon.png")} style={styles.iconImg} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("meteor")}>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Text style={styles.knowMore}>Know More</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={styles.iconImg} />
                    </TouchableOpacity>
                </ImageBackground>


            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    titleText: {
        fontSize: 35,
        fontWeight: "Bold",
        color: "red",
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white",
    },
    routeText: {
        fontSize: 35,
        fontWeight: "Bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    backgroundImg: {
        flex: 1,
        resizeMode: "cover"
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15,
    },
    bgDigit: {
        position: "absolute",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1,
        color: "rgba(183, 183,183,0.5)",
    },
    iconImg: {
        position: "absolute",
        width: 200,
        height: 200,
        resizeMode: "contain",
        top: -80,
        right: 20,
    }
})
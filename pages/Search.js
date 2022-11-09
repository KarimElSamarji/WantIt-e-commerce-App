import React, {useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Camera} from 'expo-camera';
import NavBar from '../components/NavBar';

function Search({ navigation }) {

    const [startCamera, setStartCamera] = React.useState(false)

    let camera = useRef(Camera);

    const __startCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        if (status === 'granted') {
            // do something
            setStartCamera(true)
        } else {
            Alert.alert("Access denied")
        }
    }

    const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        navigation.navigate('Info');
    }

    return (
        <SafeAreaView style={styles.back}>
            {startCamera ? (
                <Camera
                    style={{ flex: 1, width: "100%" }}
                    ref={(r) => {
                        camera = r
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            flexDirection: 'row',
                            flex: 1,
                            width: '100%',
                            padding: 20,
                            justifyContent: 'space-between'
                        }}
                    >
                        <View
                            style={{
                                alignSelf: 'center',
                                flex: 1,
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity
                                onPress={__takePicture}
                                style={{
                                    width: 70,
                                    height: 70,
                                    bottom: 0,
                                    borderRadius: 50,
                                    backgroundColor: '#fff'
                                }}
                            />
                        </View>
                    </View>
                </Camera>
            ) : (
                <View style={styles.cameraback}>

                    <Text style={styles.title}>Search with your camera !</Text>

                    <View style={styles.intro}>
                        <View style={styles.infoback}>

                            <Text style={styles.info}>
                                Object detection is a computer technology
                                related to computer vision and image processing
                                that deals with detecting instances of semantic
                                objects of a certain class (such as humans, buildings,
                                or cars) in digital images and videos.
                            </Text>

                        </View>

                        <View style={{ display: 'flex', flex: 0.5 }}>
                            <Image source={require('../assets/illu/human00.png')} style={styles.image} />
                        </View>
                    </View >

                    <Text style={styles.info}>
                        All you have to do is to take a photo of about what you want to know more.
                        Then you will dive in it.
                    </Text>

                    <Text style={styles.info}>
                        Put your seat belt on, and Lets GOOO !
                    </Text>

                    <View style={styles.takeback}>
                        <TouchableOpacity style={styles.button} onPress={() => __startCamera()}>
                            <Text style={styles.label}>Take a Photo</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
            <NavBar navigation={navigation} />
        </SafeAreaView>
    );
}

export default Search;
const styles = StyleSheet.create({
    back: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#DFF6FF',
        marginBottom: -35,
    },
    cameraback: {
        display: 'flex',
        flex: 0.9,
        paddingLeft: 10

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#06283D'
    },
    intro: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'

    },
    infoback: {
        display: 'flex',
        flex: 0.5
    },
    info: {
        fontSize: 18,
        color: '#256D85',
        fontWeight: 'bold',
        marginTop: 10
    },

    image: {
        height: 300,
        width: '100%'
    },

    takeback: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 30,
        marginRight: 30
    },
    button: {
        backgroundColor: "#06283D",
        padding: 15,
        borderRadius: 15,
        shadowColor: '#256D85',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
    },
    label: {
        color: "white",
        fontWeight: 'bold'
    }
})
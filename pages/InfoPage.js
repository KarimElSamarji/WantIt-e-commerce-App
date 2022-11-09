import { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';



function InfoPage({ navigation }) {

    const [plus, setPlus] = useState(false);

    return (
        <SafeAreaView style={styles.body}>


            <View style={{ paddingLeft: 10 }}>
                <Text style={styles.title}>Lenovo ideapad520</Text>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Image source={require("../assets/lenovo520/lenovo00.jpg")} style={styles.img} />
                </View>
            </View>
            <View style={{ paddingLeft: 10, marginTop: 20 }}>
                <Text style={styles.info}>Metal body design</Text>
                <Text style={styles.info}>Type-C USB 3.1 Gen 1</Text>
                <Text style={styles.info}>Stylish design</Text>
                <Text style={styles.info}>
                    Un portable remarquable mérite un design remarquable, et ce modèle en est une parfaite illustration.
                    Avec ses bords anguleux et ses surfaces métalliques, l’Ideapad 520
                    présente un châssis repensé pour offrir une vision moderne des esthétiques
                    classiques.
                </Text>

                {!plus && (
                    <TouchableOpacity onPress={() => setPlus(!plus)}><Text style={styles.savoir}>Savoir Plus...</Text></TouchableOpacity>
                )
                }



                {plus && (
                    <Text style={styles.info}>Il est proposé dans trois versions ton sur ton avec finition
                        douce au toucher : gris acier, or champagne et bronze. Nous avons aussi
                        repensé le pavé tactile pour optimiser l’expérience utilisateur avec la
                        prise en charge des gestes à plusieurs doigts. Touchez, cliquez, zoomez :
                        vous sentirez vraiment la différence !</Text>
                )
                }

                {plus && (
                    <TouchableOpacity onPress={() => setPlus(!plus)}><Text style={styles.savoir}>Afficher Moin...</Text></TouchableOpacity>
                )
                }

            </View>

            <View style={styles.takeback}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Results")}>
                    <Text style={styles.label}>Interested</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}

export default InfoPage;

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#06283D'
    },
    img: {
        width: 300,
        height: 200
    },
    info: {
        fontSize: 18,
        color: '#256D85',
        fontWeight: 'bold',
        marginTop: 10
    },
    savoir: {
        color: '#256D85',
        fontWeight: 'bold',
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

import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, Linking } from 'react-native';
import Gallery from '../components/Gallery';




function ProductInfo(props) {

    console.log(Object.values(props.route.params.photos)[0][0]);
    return (
        <SafeAreaView style={styles.back}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.title}>Lenovo ideapad520</Text>
                </View>
                <ScrollView horizontal={true} style={styles.gal} contentContainerStyle={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                    <View>
                        <Gallery photo={Object.values(props.route.params.photos)[0][0]}/>
                    </View>
                    <View>
                        <Gallery photo={Object.values(props.route.params.photos)[0][1]}/>
                    </View>
                    <View>
                        <Gallery photo={Object.values(props.route.params.photos)[0][2]}/>
                    </View>
                    <View>
                        <Gallery photo={Object.values(props.route.params.photos)[0][3]}/>
                    </View>
                </ScrollView>

                <View style={styles.logoback}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Amazon</Text>
                    <Text style={styles.price}>533€</Text>
                </View>

                <View style={styles.descback}>
                    <Text style={styles.desc}>Lenovo IdeaPad Gaming 3 15IHU6 15.6" Full HD (Intel Core i5-11300H, 8Go de RAM extensible 16Go, 512Go SSD,NVIDIA GeForce RTX 3050, Windows 11 Home) Clavier AZERTY rétroéclairé Français - Noir.</Text>
                    <Text style={styles.desc}>Une expérience de jeu inégalée: Jouez, enregistrez et diffusez simultanément sans compromis grâce à un processeur Intel Core i5-11300H 35 W puissant et efficace optimisé pour les performances. Jouez à la plupart des jeux AAA en Full HD. Bénéficiez de vitesses WiFi Gigabit ultrarapides et de connexions fiables avec WiFi 6.</Text>
                    <Text style={styles.rating}>*****</Text>
                </View>
                
                <View style={styles.final}>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.amazon.fr/Lenovo-IdeaPad-15ITL6-Ordinateur-Portable/dp/B09S5XJQC7/ref=sr_1_1?qid=1666088294&refinements=p_15%3ALenovo&s=computers&sr=1-1')}>
                        <Text style={styles.label}>Have Yours</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

export default ProductInfo;
const styles = StyleSheet.create({
    back: {
        display: 'flex',
        flex: 1,
        backgroundColor: "#DFF6FF",
        marginBottom:-35
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#06283D'
    },
    gal: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 5
    },
    logoback: {
        backgroundColor: "#06283D",
        padding: 10,
        borderRadius: 15,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    rating: {
        color: '#FCE700',
        fontSize: 50
    },
    price: {
        color: "#47B5FF",
        fontSize:20,
        fontWeight:'bold'
    },
    descback: {
        padding:10
    },
    desc: {
        fontSize:18
    },
    final:{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:30,
        marginBottom:30
    },
    button:{
        padding:15,
        backgroundColor:"#06283D",
        borderRadius:15
    },
    label:{
        color:'white',
        fontWeight:'bold'
    }

})
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NavBar from '../components/NavBar';
import Product from '../components/Product'
function Results({ navigation }) {
    return (
        <View style={styles.back}>
            <View style={styles.header}>
                <Text style={styles.title}>Laptop Lenovo</Text>
            </View>
            <View style={styles.body}>


                <ScrollView showsVerticalScrollIndicator={false}>
                    <Product navigation={navigation}
                        image={require('../assets/lenovo520/lenovo00.jpg')}
                        title='Lenovo 520'
                        desc='Lenovo IdeaPad 5 15ALC05: Un PC portable pour un style de vie polyvalent...'
                        price='533$'
                        com='Amazon'
                        photos={[require('../assets/lenovo520/lenovo00.jpg'), require('../assets/lenovo520/lenovo01.jpg'), require('../assets/lenovo520/lenovo02.jpg'), require('../assets/lenovo520/lenovo03.jpg')]} />
                    <Product navigation={navigation}
                        image={require('../assets/IdeaPad5/idea00.jpg')}
                        title='IdeaPad5'
                        desc='L’IdeaPad 3 15ADA05 - Noir est un ordinateur portable d’entrée de gamme suffisamment...'
                        price='1125$'
                        com='Fnac'
                        photos={[require('../assets/IdeaPad5/idea00.jpg'), require('../assets/IdeaPad5/idea01.jpg'), require('../assets/IdeaPad5/idea02.jpg')]} />
                    <Product navigation={navigation}
                        image={require('../assets/lenovo530/lenovo11.jpg')}
                        title='Lenovo 530'
                        desc='Apprenez de chez vous et ailleurs avec l ordinateur portable IdeaPad 3 Gen 6. Ses capacités thermiques intelligentes garantissent le refroidissement du système et son fonctionnement silencieux, et son écran éclatant arbore un cadre ultrafin....'
                        price='600$'
                        com='Fnac'
                        photos={[require('../assets/lenovo530/lenovo11.jpg'), require('../assets/lenovo530/lenovo12.jpg'), require('../assets/lenovo530/lenovo13.jpg'), require('../assets/lenovo530/lenovo14.jpg')]} />
                    <Product navigation={navigation}
                        image={require('../assets/lenovo5600/lenovo21.jpg')}
                        title='Lenovo 5600'
                        desc='Dotés de performances incroyables généralement disponibles uniquement....'
                        price='600$'
                        com='Fnac'
                        photos={[require('../assets/lenovo5600/lenovo21.jpg'), require('../assets/lenovo5600/lenovo22.jpg'), require('../assets/lenovo5600/lenovo23.jpg'), require('../assets/lenovo5600/lenovo24.jpg')]} />
                    <Product navigation={navigation}
                        image={require('../assets/IdeaPad3/Idea11.jpg')}
                        title='IdeaPad 3'
                        desc='Taille écran : 17,3" HD+ (1600x900) Processeur : Intel® Core™ i5-10210U...'
                        price='799$'
                        com='Fnac'
                        photos={[require('../assets/IdeaPad3/Idea11.jpg'), require('../assets/IdeaPad3/Idea22.jpg'), require('../assets/IdeaPad3/Idea23.jpg'), require('../assets/IdeaPad3/Idea24.jpg')]} />

                </ScrollView>

            </View>
            <NavBar navigation={navigation} />
        </View>
    )
}
export default Results;
const styles = StyleSheet.create({
    back: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#DFF6FF',
        marginBottom: -35,

    },
    header: {
        display: 'flex',
        backgroundColor: '#47B5FF',
        paddingTop: 35,
        paddingLeft: 20,
        paddingBottom: 5,
        shadowColor: '#256D85',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    body: {
        paddingTop: 5,
        display: 'flex',
        flex: 0.87,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#06283D'
    },
})
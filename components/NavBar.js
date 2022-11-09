import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function NavBar({navigation}) {
    return (
        <View style={styles.back}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.touchLab}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.touchLab}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.touchLab}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    back: {
        display: 'flex',
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: '#06283D',
        position: 'relative',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    touch: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchLab: {
        color: '#F9F5EB',
        fontWeight: 'bold'
    }
})

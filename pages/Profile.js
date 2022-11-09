import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';


function Profile({ navigation }) {
    return (
        <SafeAreaView style={styles.back}>

            <View style={{ display: 'flex', flex: 0.9 }}>
                <View style={{ padding: 20, display: 'flex', flexDirection: 'row' }}>
                    <View style={styles.icon}>
                        <Text>Icon</Text>
                    </View>
                    <View style={{ marginLeft: 20, paddingTop: 25 }}>
                        <Text style={styles.name}>Karim El Samarji</Text>
                        <Text>karim2000elsamarji@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold'}}>My Profile :</Text>
                    
                    <View style={styles.inforow}>
                        <Text style={styles.label}>First Name :</Text>
                        <Text style={styles.value}>Karim</Text>
                    </View>
                    <View style={styles.inforow}>
                        <Text style={styles.label}>Last Name :</Text>
                        <Text style={styles.value}>El Samarji</Text>
                    </View>
                    <View style={styles.inforow}>
                        <Text style={styles.label}>City :</Text>
                        <Text style={styles.value}>France</Text>
                    </View>
                    <View style={styles.inforow}>
                        <Text style={styles.label}>Region :</Text>
                        <Text style={styles.value}>72000 Le Mans</Text>
                    </View>
                    <View style={styles.inforow}>
                        <Text style={styles.label}>Adress :</Text>
                        <Text style={styles.value}>70 Av du General de Gaulle</Text>
                    </View>
                    <View style={styles.inforow}>
                        <Text style={styles.label}>Phone :</Text>
                        <Text style={styles.value}>0768789506</Text>
                    </View>
                </View>


                <View style={styles.final}>
                    <TouchableOpacity style={styles.button}><Text style={styles.labelbut}>LogOut</Text></TouchableOpacity>
                </View>


            </View>
            <NavBar navigation={navigation} />

        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    back: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#DFF6FF',
        marginBottom: -35
    },
    icon: {
        backgroundColor: 'grey',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#06283D'
    },
    body: {
        padding: 10
    },
    inforow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight:10,
        color:'#47B5FF'
    },
    value: {
        fontSize:20,
        fontWeight:'bold'
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
    labelbut:{
        color:'white',
        fontWeight:'bold'
    }
})
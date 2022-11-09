import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
function Splash({navigation}){

    function finish(){
        setTimeout(
           function(){navigation.navigate('Home')} 
        , 3000);
    }

    useEffect(() => {
        finish();
    },[])


    return(
        <View style={styles.back}>
            <View style={{display:'flex',flex:0.5,flexDirection:'row',alignItems:'flex-end'}}>
                <Text style={styles.want}>WANT</Text><Text style={styles.it}>IT</Text>
            </View>
            <View style={{display:'flex',flex:0.5,justifyContent:'flex-end',paddingBottom:100}}>
                <Text style={{color:'white'}}>Developed By <Text style={{color:'#47B5FF'}}>Karim El Samarji</Text> and <Text style={{color:'#47B5FF'}}>Arslane Zemmouri</Text></Text>
            </View>
        </View>
    );
}
export default Splash;
const styles = StyleSheet.create({
    back:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#06283D'
    },
    want:{
        color:'white',
        fontSize:45,
        fontWeight:'bold'
    },
    it :{
        color:'#47B5FF',
        fontSize:45,
        fontWeight:'bold'
    }
})
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, Image } from 'react-native';

function Gallery({photo}) {
    console.log(photo);
    return (
        <View style={styles.back}>
            <Image source={photo} style={styles.image}/>
        </View>
    );
}

export default Gallery;
const styles = StyleSheet.create({
    back: {
        display:'flex',
        flex:1,
        height:300,
        width:300,
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginRight:10,
        overflow:'hidden'
    },
    image:{
        position: 'relative',
        height: '100%',
        width:'100%'
    }
  

})
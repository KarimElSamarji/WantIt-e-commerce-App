import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Product({navigation, title,  desc, image,price,com,photos}) {
    console.log('1'+photos)
    return (
        <TouchableOpacity style={styles.card} onPress={()=> 
            navigation.navigate('ProductInfo',{photos: {photos}})
            
        }>
            <View style={styles.imageback}>
                <Image source={image} style={styles.image}/>
            </View>
            <View style={styles.productbody}>
                <View style={styles.titleback}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.descback}>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
                <View style={styles.originback}>
                    <View>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                    <View>
                        <Text style={styles.origin}>{com}</Text>
                    </View>

                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#06283D',
        flexDirection: 'row',
        display: "flex",
        flex: 1,
        marginBottom: 15,
        marginHorizontal: 10,
        padding: 10,
        position: 'fixe',
        height: 200,
        borderRadius: 15,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,

    }
    , imageback: {
        backgroundColor: '#607EAA',
        display: 'flex',
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow:'hidden'

    },
    productbody: {
        display: 'flex',
        flex: 0.6,
        padding: 10,
    },
    titleback: {
        borderRadius: 5,
        borderBottomWidth: 5,
        borderBottomColor: '#256D85',
        display: 'flex',
        flex: 0.3
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    image:{
        position:'relative',
        width:"100%",
        height:"100%"
    },

    descback: {
        padding: 10,
        display: 'flex',
        flex: 0.5,
    },
    desc: {
        color: "white"
    },
    originback: {
        display: 'flex',
        flexDirection:'row',
        flex: 0.2,
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:5
    },
    price : {
        color:"#47B5FF",
        fontSize: 20,
        fontWeight:'bold'
    },
    origin: {
        color: "white"
    }
})
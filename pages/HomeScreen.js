import React, { Component } from 'react';
import {StyleSheet,View, Text, SafeAreaView, ScrollView} from 'react-native';
import NavBar from '../components/NavBar';
import Product from '../components/Product';

function HomeScreen ({navigation}){

  

    return (
      <SafeAreaView style={styles.back}>
        <View style={styles.body}>
            <ScrollView style={{backgroundColor:'#DFF6FF',}} showsVerticalScrollIndicator={false}>

            <Product navigation={navigation}
            title='Table'
            image={require('../assets/Table/table00.jpg')}
            desc="Promotion valable jusqu'au 06/12/2022"
            price="54$"
            com="Auchan"/>
            <Product navigation={navigation}
            title='Dog bed'
            image={require('../assets/Table/Dog.jpg')}
            desc="Promotion valable jusqu'au 08/11/2022"
            price="28$$"
            com="Auchan"/>
            <Product navigation={navigation}
            title='Poussette'
            image={require('../assets/Table/pawhut.jpg')}
            desc="Poussette buggy pliable chien chat panier et sac de rangement attaches sécurité housse réglable poignée réversible acier Oxford gris chiné noir
            Poussette buggy pliable chien chat panier et sac de rangement attaches sécurité housse réglable poignée réversible acier Oxford gris chiné noir+ de photos
            Cette superbe poussette buggy est conçue pour votre animal de compagnie afin de faciliter vos déplacements : promenade, course, etc.."
            price="148$"
            com="Carrefour"
            />
            <Product navigation={navigation}
            title='Halloween Mug'
            image={require('../assets/Mug.jpg')}
            desc="Tasse créative en céramique, en forme de citrouille, pour le lait, le petit déjeuner, le Dessert, l'avoine, cadeau d'halloween, nouveauté"
            price="16$"
            com="Aliexpress"
            />

          </ScrollView>
        </View>
        <NavBar navigation={navigation}/>
      </SafeAreaView>
    );
  }


export default HomeScreen;

const styles = StyleSheet.create({
  back: {
    display:'flex',
    flex:1,
    backgroundColor:'#DFF6FF',
    marginBottom:-35
  },
  body : {
    display:'flex',
    flex:0.9,
    backgroundColor:'#F9F5EB'
  }
})

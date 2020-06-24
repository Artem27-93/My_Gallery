import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity} from 'react-native';







const zoomImages = ()=>{
  
};

export const Photos = ({images}) =>{
  
    return(
        <View >
            <FlatList key={images.id}
          data={images}
          renderItem={({item}) => {
              return(
                <View style={{margin:10}}>
                <TouchableOpacity style={styles.button} onPress={zoomImages}>
                  <Image style={styles.photo} source={{uri:item.url}} />
                </TouchableOpacity>
                  <Text>Name: random</Text>
                  <Text>Autor: {item.id}</Text>
                </View>
              )
            }}
            numColumns={2}
          keyExtractor={item => item.id}
          
          />
        </View>
            
    )
}

const styles = StyleSheet.create({
    photo:{
        width: 150 ,
        height: 150,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    button: {
      // backgroundColor: '#859a9b',
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35
    }
    
})
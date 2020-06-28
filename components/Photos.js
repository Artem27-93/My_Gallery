import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity,Dimensions} from 'react-native';

export const Photos = ({images,visibleModal}) =>{
  const arr = [...images];
  
    return(
        <View key={arr.id}>
            <FlatList key={arr.id}
          data={arr}
          renderItem={(i) => {
            
              return(
                
                  <View style={{margin:5}}>
                    <TouchableOpacity style={styles.button} onPress={visibleModal}>
                      <Image style={styles.photo} source={{uri:i.item.url}} />
                    </TouchableOpacity>
                    <Text>Name: random</Text>
                    <Text>Autor: {i.item.id}</Text>
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
        width: (Dimensions.get('window').width/2)-4 ,
        height: (Dimensions.get('window').height/3)-12,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    button: {
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35
    }
    
  })
  






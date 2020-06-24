import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export const Header = (props) =>{
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:40,
        height: 100,
        backgroundColor:'#000'
        
    },
    text:{
        color:'#fff',
        fontSize:22

    }
})
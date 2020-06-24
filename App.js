import React, {Component,useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList,Thumbnail} from 'react-native';
import {Header} from './components/Header';
import {Photos} from './components/Photos';
import {Zoom_photo} from './components/Zoom_photo';



const client_id = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
      per_page = 15,
      page = 2
const url = `https://api.unsplash.com/photos/?per_page=${per_page}&page=${page}&client_id=${client_id}`;



export default class App extends Component {
  state = {
    title: "MY GALLERY",
    data: [],
    screen: null
  }
  componentDidMount = async() => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({data: data})
    } catch (e) {
      throw e
    }
  }
  
  
  render(){
   


    const newImages = this.state.data.map(i => ({
      id: i.id,
      url: i.urls.small,
      description: i.description,
      isFavorite: false,
      name:i.categories
  }));
  
  let content = (<Photos images={newImages} states={this.state.screen}/>)
  if (this.state.screen !== null){
    content = <Zoom_photo/>
  }
  
    return (
      <View>
        <Header style={styles.header}  title={this.state.title}/>
        <View>{content}</View>
        
    
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  header:{
    fontFamily:'roboto'
  }
});

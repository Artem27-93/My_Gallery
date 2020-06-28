import React, {Component} from 'react';
import { StyleSheet, Text, View, Modal,Image} from 'react-native';
import {Header} from './components/Header';
import {Photos} from './components/Photos';







const client_id = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
      per_page = 4,
      page = 1
const url = `https://api.unsplash.com/photos/?per_page=${per_page}&page=${page}&client_id=${client_id}`;



export default class App extends Component {
  
  constructor(props){
    super(props)

  this.state = {
    title: "MY GALLERY",
    data: [],
    modalVisible: false

  }
    this.setModalVisible = this.setModalVisible.bind(this)
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
  setModalVisible(){
    this.setState({
    modalVisible: !this.state.modalVisible
    })
  }
  



  render(){
    

    const newImages = this.state.data.map(i => ({
      id: i.id,
      url: i.urls.small
    }));
    
  
    let content = (<Photos  images={newImages} visibleModal = {this.setModalVisible}/>)
  
  
    return (
      <View>
        <Modal 
          style = {styles.modal}
          transparent={false} 
          visible={this.state.modalVisible}
          onRequestClose = {()=>{}}
        ><View>
            <Text onPress = {()=>{this.setModalVisible(false)}}>Close</Text>
            
          </View>
          
        </Modal>
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
  },
  modal:{
    backgroundColor: '#eee'
  }
});

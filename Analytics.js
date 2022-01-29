import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Container,FooterTab,Footer,Content,Button,Header,Body,Left,Right,Title} from 'native-base';


export default class Analytics extends Component{
    render(){
        return(
          <Container  style={styles.container}>
            <Header style={styles.header}>
            
            
            <Body >
            <Title style={{color:'black',fontSize:25,marginHorizontal:20}}>Analytics</Title>
            </Body>

             <Right>
              <Text style={{color:'black',fontWeight:'bold',fontSize:20}} >Spice&Naan</Text>
             </Right>
            </Header>
            <Content>
                <Text style={{color:'black'}}>hello </Text>
                </Content>
                
                <Footer style={{borderTopWidth:1}}>
              <FooterTab style={{flexDirection:'row',backgroundColor:'#F0BA00'}}>
                <Button onPress={()=> this.props.navigation.navigate('Home')}>
                  <Text style={styles.footerButtons}>Home</Text>
                </Button>
                <Button onPress={()=> this.props.navigation.navigate('Priority')}>
                  <Text style={styles.footerButtons}>Priority</Text>
                </Button>
                <Button style={{borderTopWidth:2}} onPress={()=> this.props.navigation.navigate('Analytics')}>
                  <Text style={styles.footerButtons}>Analytics</Text>
                </Button>
                <Button onPress={()=> this.props.navigation.navigate('StoreInfo')}>
                  <Text style={styles.footerButtons}>Store Info</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>    
        )
    }
};
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#e3e2e1',
  },
    paragraph: {
      padding: 10,
      margin: 5,
      borderWidth: 2,
    },
    footerButtons:{
      color:'black',
      fontWeight:'bold',
      
    },
    header:{
      backgroundColor:'#f0ba00',
      
    },
  });
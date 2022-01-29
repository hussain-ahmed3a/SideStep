import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Container,Header,Content,Text,Icon,Left,Right,Body,Tab,Tabs,Title,Button,FooterTab,Footer} from 'native-base';

import ForNow from './ForNow';
import ForLater from './ForLater';



export default class Home extends React.Component{
  
    render(){return(
        <Container style={styles.container}>
            <Header style={styles.header}>
             
            <Body >
            <Title style={{color:'black',fontSize:25,marginHorizontal:20}}>Home</Title>
            </Body>

             <Right>
              <Text style={{color:'black',fontWeight:'bold',fontSize:20}} >Spice&Naan</Text>
             </Right>
            </Header>

            {/* <Content> */}
                <Tabs tabBarUnderlineStyle={{ backgroundColor: "black" }}>
                    <Tab 
                     heading="Today"
                     activeTabStyle={{backgroundColor:'#f0ba00'}}
                     tabStyle={{backgroundColor:'#F0BA00'}} 
                     textStyle={{color:'black',fontWeight:'bold'}}
                     activeTextStyle={{color:'black',fontWeight:'bold',fontSize:20}}
                     tabBarUnderlineStyle={{color:'black'}}>

                      <ForNow />
                    </Tab>

                    <Tab 
                    heading="Another Day" 
                    activeTabStyle={{backgroundColor:'#f0ba00'}} 
                    tabStyle={{backgroundColor:'#f0ba00'}}
                    textStyle={{color:'black',fontWeight:'bold'}}
                    activeTextStyle={{color:'black',fontWeight:'bold',fontSize:20}}
                    tabBarUnderlineStyle={{color:'black'}}>
                    
                      <ForLater />
                    </Tab>

                </Tabs>
            {/* </Content> */}
            <Footer style={{borderTopWidth:1}}>
              <FooterTab style={{flexDirection:'row',backgroundColor:'#F0BA00'}}>
                <Button style={{borderTopWidth:2}} onPress={()=> this.props.navigation.navigate('Home')}>
                  <Text style={styles.footerButtons}>Home</Text>
                </Button>
                <Button onPress={()=> this.props.navigation.navigate('Priority')}>
                  <Text style={styles.footerButtons}>Priority</Text>
                </Button>
                <Button onPress={()=> this.props.navigation.navigate('Analytics')}>
                  <Text style={styles.footerButtons}>Analytics</Text>
                </Button>
                <Button onPress={()=> this.props.navigation.navigate('StoreInfo')}>
                  <Text style={styles.footerButtons}>Store Info</Text>
                </Button>
              </FooterTab>
            </Footer>
        </Container>
    )}
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#e3e2e1',
    },
    header:{
      backgroundColor:'#f0ba00',
      
    },
    
    footerButtons:{
      color:'black',
      fontWeight:'bold',
      
    }
  
  });
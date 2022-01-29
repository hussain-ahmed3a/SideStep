import React, { Component } from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {Container,Button,Footer,FooterTab,Content,Header,Body,Left,Right,Title,Form,Item,Label,Input,Icon} from 'native-base';


export default class StoreInfo extends Component{
  state={
    email:'',
    password:'',
    dob:new Date(),
    gender:'',
    setDatePickerVisibility:false,
    confirmpassword:'',
    message:'',
    toggleSwitch:false,
    icon:'eye-off',
    passwordcheck:true,
  }
  changeicon(){
    if(this.state.icon==='eye-off')
    {
      this.setState({passwordcheck:false,icon:'eye'})
    }
    else
    {
      this.setState({passwordcheck:true,icon:'eye-off'})
    }
  }

  passcheck(){
    if(this.state.email===''||this.state.password===''||this.state.confirmpassword==='')
    {
      this.setState({message:'Empty field'})
    
    }
    else if(this.state.password===this.state.confirmpassword)
    {
      this.props.navigation.navigate('Home')
    }
    else
    {
      this.setState({message:'Passwords do not match'}) 
    }
  };
   showDatePicker(){
    this.setState({setDatePickerVisibility:true});
  };

   hideDatePicker(){
    this.setState({setDatePickerVisibility:false});
  };

   handleConfirm(date){
    this.setState({dob:date});
    this.hideDatePicker();
  };
  switchFunction(){
    this.props.navigation.navigate('SignUps')
  };
  onValueChange2(value) {
    this.setState({
      gender: value
    });
  }
    render(){
        return(
          <Container  style={styles.container}>
              <Header style={styles.header}>
            <Body >
            <Title style={{color:'black',fontSize:25,marginHorizontal:20}}>Store Info</Title>
            </Body>

             <Right>
              <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Spice&Naan</Text>
             </Right>
            </Header>
              <Content>
        
              <Form style={{width:300,marginLeft:40,marginTop:30,borderWidth:1,borderRadius:10}}>
              
              <Item stackedLabel>     
                <Label>Name</Label>
              </Item>  
              <Item stackedLabel>
                <Label>Email</Label>
                
              </Item>

              <Item stackedLabel>
                <Label>Contact</Label>
                
              </Item>
              <Button style={{backgroundColor:'#f0ba00'}} full rounded >
                    <Text style={{color:'black',fontWeight:'bold',fontSize:17}}>Edit</Text>
                  </Button>
              <Text style={{color:'red',textAlign:'center'}}>{this.state.message}</Text>
            </Form>
            <Image style={{height:200,width:200,alignSelf:'center',marginTop:50}}source={require('./assets/istockphoto-828088276-612x612.jpg')}/>
            <Button rounded style={{width:200 , backgroundColor:'#f0ba00',alignSelf:'center',padding:25,marginTop:20}}>
              <Text style={{color:'black',fontSize:17,fontWeight:'bold'}}>
                Download QR Code
              </Text>
            </Button>
                </Content>
                
                <Footer style={{borderTopWidth:1}}>
              <FooterTab style={{flexDirection:'row',backgroundColor:'#F0BA00'}}>
                <Button onPress={()=> this.props.navigation.navigate('Home')}>
                  <Text style={styles.footerButtons}>Home</Text>
                </Button>
                <Button onPress={()=> this.props.navigation.navigate('Priority')}>
                  <Text style={styles.footerButtons}>Priority</Text>
                </Button>
                <Button onPress={()=> this.props.navigation.navigate('Analytics')}>
                  <Text style={styles.footerButtons}>Analytics</Text>
                </Button>
                <Button style={{borderTopWidth:2}} onPress={()=> this.props.navigation.navigate('StoreInfo')}>
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
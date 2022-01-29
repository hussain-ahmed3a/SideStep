import React, { Component } from 'react';
import {Text,View,StyleSheet,Image,Switch} from 'react-native';
import {Form,Item,Label,Input,Container,Content,Button,Icon} from 'native-base';

var testpasswd='hussain';
export default class LogIn extends Component{
  state = {
    email:'',
    password:'',
    checkIncorrect:false,
    toggleSwitch:false,
    user:'customer',
    passwordcheck:true,
    icon:'eye-off',
    testpasswd:'hussain',
    store:[],
  }

  getstorelogin(){
    fetch(`http://192.168.10.10:3000/storelogin/${JSON.stringify(this.state.email)}`)
      .then(response => response.json())
      .then(store => console.log(store))
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

  _check(){
   /* if(this.state.user==='store')
    {
      this.getstorelogin()
    }*/
     if (this.state.password===testpasswd)
     {
       this.props.navigation.navigate('Home')
     }
     else
     {
       this.setState({checkIncorrect:true})
     }
  }
  switchFunction(){
    if(this.state.toggleSwitch===true)
    {
      this.setState({toggleSwitch:false,user:'customer'})
    }
    else
    {
      this.setState({toggleSwitch:true,user:'store'})
    }
  }
    render(){
        return(
          <Container  style={{backgroundColor:'e3e2e1'}}>
            <Image style={{height:110,width:200,alignSelf:'center',marginTop:60}}source={require('./assets/logo.png')}/>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={styles.text}>SIDE-</Text>
            <Text style={styles.text1}>-STEP</Text>
            </View>
            <Content>
            <Form style={{width:300,marginLeft:40,marginTop:50}}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={(text)=>{this.setState({email:text})}}/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry={this.state.passwordcheck} onChangeText={(text)=>{this.setState({password:text})}}/>
                <Icon style={{color:'#f0ba00'}} name={this.state.icon} onPress={() => this.changeicon()}/>
              </Item>
              <Text style={{color:'red'}}>{this.state.checkIncorrect && this.state.password !=''?'incorrect password or username':''}</Text>
              <Button onPress={()=>this._check()} style={{width:200,alignSelf:'center',justifyContent:'center',backgroundColor:'#F0BA00',borderRadius:10,marginTop:50 }}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Login</Text>
              </Button>
            
            </Form>
            <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center',marginTop:50,marginRight:6}}>
              <Text style={{color:this.state.toggleSwitch?'black':'#F0BA00',marginTop:3,fontWeight:'bold',fontSize:this.state.toggleSwitch?13:15}}>CUSTOMER</Text>
            <Switch
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.1 }],marginLeft:10,marginRight:10}}
              trackColor={{ false: 'black', true: '#F0BA00' }}
              thumbColor={this.state.toggleSwitch ? 'black' : '#F0BA00'}
              onValueChange={()=>this.switchFunction()}
              value= {this.state.toggleSwitch}
              />
              <Text style={{color:this.state.toggleSwitch?'#F0BA00':'black',marginTop:3,fontWeight:'bold',fontSize:this.state.toggleSwitch?15:13}}>STORE</Text>
            </View>
            
            {/* <Text style={styles.jsontext}>{JSON.stringify(this.state)}</Text> */}
            </Content>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:50}}>
              <Text style={{color:'black',textAlign:'center',fontSize:18}}>I am a new User  </Text>
              <Button transparent style={{alignSelf:'center',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('SignUp')}>
                <Text style={{color:'#f0ba00',fontSize:20}}>Sign-Up</Text>
              </Button>
            </View>
          </Container>    
        )
    }
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      padding: 10,
      margin: 5,
      borderWidth: 2,
    },
    text:{
      alignSelf:'center',
      color:'#f0ba00',
      fontFamily:'copperplate',
      fontWeight:'900',
      fontSize:50,
      fontStyle:'italic',
      },
    text1:{
      alignSelf:'center',
      color:'black',
      fontFamily:'copperplate',
      fontWeight:'900',
      fontSize:50,
      },
      jsontext:{
        color:'black',
        fontSize:12,
        textAlign:'center'
      }
  });
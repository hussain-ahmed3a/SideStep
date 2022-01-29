import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Form,Item,Label,Input,Container,Button,Right,Icon} from 'native-base';

export default class SignUps extends Component{
  state={
    username:'',
    password:'',
    confirmpassword:'',
    contact:'',
    message:'',
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
    if(this.state.username===''||this.state.password===''||this.state.confirmpassword===''||this.state.contact==='')
    {
      this.setState({message:'Empty Field'})
    }
    else if(this.state.password===this.state.confirmpassword )
    {
      this.props.navigation.navigate('Home')
    }
    else
    {
      this.setState({message:'Passwords do not match'}) 
      this.setState({check:true})
    }
  };
  
  render(){
        return(
          <Container style={{backgroundColor:'e3e2e1'}}>
            
            <Text style={{color:'black',textAlign:'center',fontSize:30,fontWeight:'bold',marginTop:30}}>Sign-Up Page</Text>
            
            <Text style={{color:'black',textAlign:'center',fontSize:18,fontWeight:'bold',marginTop:10}}>STORE</Text>
            
            <Text style={{color:'#f0ba00',margin:15,textAlign:'center',fontSize:20,fontWeight:'bold'}}>Welcome,Please enter your details to get started and skip those pesky lines!</Text>
            
            <Form style={{width:300,marginLeft:40,marginTop:30}}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={(text)=>{this.setState({email:text})}}/>
              </Item>

              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry={this.state.passwordcheck} onChangeText={(text)=>{this.setState({password:text})}}/>
                <Icon style={{color:'#f0ba00'}} name={this.state.icon} onPress={() => this.changeicon()}/>
              </Item>

              <Item floatingLabel>
                <Label>Confirm Password</Label>
                <Input secureTextEntry={this.state.passwordcheck} onChangeText={(text)=>{this.setState({confirmpassword:text})}}/>
                <Icon style={{color:'#f0ba00'}} name={this.state.icon} onPress={() => this.changeicon()}/>
              </Item>
              
              <Item floatingLabel>
                <Label>Contact</Label>
                <Input keyboardType='numeric' secureTextEntry={this.state.passwordcheck} onChangeText={(text)=>{this.setState({contact:text})}}/>
              </Item>
              
              <Text style={{color:'red',textAlign:'center'}}>{this.state.message}</Text>

              <Button style={{width:200,alignSelf:'center',justifyContent:'center',backgroundColor:'#F0BA00',borderRadius:10,marginTop:50}} onPress={()=>this.passcheck()}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>SignUp</Text>
              </Button>
            </Form>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}>
                <Text style={{color:'black',fontSize:18}}>Sign-Up as a customer?</Text>
              <Button transparent onPress={()=>this.props.navigation.navigate('SignUp')}>
                <Text style={{color:'#F0BA00',fontSize:16,fontWeight:'bold'}}> Click Here</Text>
              </Button>
            </View>
              
              {/* <Text style={styles.jsontext}>{JSON.stringify(this.state)}</Text> */}
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:100}}>
                <Text style={{color:'black',textAlign:'center',fontSize:18}}>Already have an account?  </Text>
              <Button transparent style={{alignSelf:'center',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('LogIn')}>
                <Text style={{color:'#f0ba00',fontSize:20}}>Login</Text>
              </Button>
            </View>
          </Container>
          
        )
    }
}

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
    jsontext:{
      color:'black',
      fontSize:12,
      textAlign:'center'
    }
  });
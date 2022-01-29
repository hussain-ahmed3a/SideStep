import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Container,Content,Card,CardItem,Text,Button} from 'native-base';

export default class forNow extends React.Component{
  state={
    storeid:1,
    forAnotherDayList:[],
  }

  getForAnotherDayTickets(){

    fetch(`http://192.168.10.26:3000/ticketanotherday/${this.state.storeid}`)
      .then(response => response.json())
      .then(tickets => this.setState({forAnotherDayList:tickets}))
  }

  callTicket(ticket_number){
    fetch('http://192.168.10.26:3000/callticket', {
       method: 'PUT', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
       headers:{
         'Accept': 'application/json',
             'Content-type': 'application/json'
       }, // You can specify your requisition headers here. That line is optional.
       body:JSON.stringify({ // Here's the fun part. Put your data here.
         "ticket_number": ticket_number,
         "called_time":new Date().toISOString(),
         
       })
     })
     .then(response => response.json()) 
     .then(serverResponse => console.warn(serverResponse))  
 }

 async removeTicket(ticket_number){
  await fetch('http://192.168.10.26:3000/removeticket', {
      method: 'PUT', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
      headers:{
        'Accept': 'application/json',
            'Content-type': 'application/json'
      }, // You can specify your requisition headers here. That line is optional.
      body:JSON.stringify({ // Here's the fun part. Put your data here.
        "ticket_number": ticket_number,
        
      })
    })
    .then(response => response.json())
    .then(serverResponse => console.warn(serverResponse))
    .then(this.setState({forAnotherDayList:[]}))
    
    this.getForAnotherDayTickets()
}

getDate(date){
  date = new Date(date);
let year = date.getFullYear();
let month = date.getMonth()+1;
let dt = date.getDate();

if (dt < 10) {
  dt = '0' + dt;
}
if (month < 10) {
  month = '0' + month;
}
return (dt+'-'+month+'-'+year)

}
  componentDidMount(){
    this.getForAnotherDayTickets();
  }
    render(){
      return(
        
           <Content>
           {this.state.forAnotherDayList.map((item)=>
            <Card key={item.ticket_number} style={styles.cardStyle}>
            <CardItem   style={{justifyContent:'center'}}>
              <Text style={styles.textBig}>{item.c_name}</Text>
            </CardItem>

            <CardItem   style={{justifyContent:'space-between'}}>
              <Text style={styles.textSmall}>Due: {this.getDate(item.estimated_time)}</Text>
              <Text style={styles.textSmall}>Ticket: {item.ticket_number}</Text>
            </CardItem>

            <CardItem footer bordered>
              <Button Full style={{backgroundColor:'#f0ba00',flex:1,justifyContent:'center',borderRadius:5}}
              onPress={()=>this.callTicket(item.ticket_number)}>
                <Text style={styles.textSmall}>Call</Text>
              </Button>
              <Button  Full danger style={{marginLeft:20,flex:1,justifyContent:'center',borderRadius:5}}
              onPress={()=>this.removeTicket(item.ticket_number)}>
                <Text style={styles.textSmall}>remove</Text>
              </Button>
            </CardItem>
            
          </Card> 
           )}  
           

            
              
           </Content>
    )}
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e3e2e1',
      },
      header:{
        backgroundColor:'#f0ba00',
        
      },
      textBig:{
        fontSize:20,
        fontWeight:'bold',
      },
      textSmall:{
        fontWeight:'bold',
        
      },
      cardStyle:{
          borderRadius:5,
          
      }
  
  });
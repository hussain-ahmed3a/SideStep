import * as React from 'react';
import { StyleSheet} from 'react-native';
import {Container,Content,Button,Card,Text,CardItem} from 'native-base';


export default class forNow extends React.Component{

    state={
      storeid:1,
    forNowList:[]
    }

  

     getTodayTickets(){

      fetch(`http://192.168.10.26:3000/tickettoday/${this.state.storeid}`)
        .then(response => response.json())
        .then(tickets => this.setState({forNowList:tickets}))
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
       .then(this.setState({forNowList:[]}))
       
       this.getTodayTickets()
   }


    getTime(date){
        date=new Date(date)
       var hours,ampm,mins;
      if(date.getHours()>12){
         hours=date.getHours()-12;
         hours=hours.toString();
         ampm=' pm';
      }
      else{hours=date.getHours()
        ampm=' am'}

      if(date.getMinutes()<10){
        mins='0'+date.getMinutes().toString()
      }
      else{
        mins=date.getMinutes().toString()
      }
      
      date=hours+':'+mins+ampm;
     return date;
    }

    componentDidMount(){
      this.getTodayTickets()
    }

    render(){return(
      
           <Content>            
          {this.state.forNowList.map((item)=>
           <Card key={item.ticket_number} style={styles.cardStyle}>
           <CardItem   style={{justifyContent:'center',}}>
              <Text style={styles.textBig}>{item.c_name}</Text>
            </CardItem>

            <CardItem   style={{justifyContent:'space-between'}}>
              <Text style={styles.textSmall}>Enqueued: {this.getTime(item.enqueued)}</Text>
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
                 

                 <Text>{this.state.clicked}</Text>       
              
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
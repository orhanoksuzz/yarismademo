import React,{Component} from 'react';
import {ListGroup,Button,ButtonGroup,Table } from 'reactstrap';
import NavigationBar from './navbar';
const jsonData = require('../store/questions.json');
class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            timer:0,
            questions:null
        }
        this.props.screenProps.socket.on('onlineViewers',this.onlineViewers.bind(this));
        this.props.screenProps.socket.on('questionTrueAnswer',this.questionTrueAnswer.bind(this));
        this.props.screenProps.socket.on('questionFalseAnswer',this.questionFalseAnswer.bind(this));
        this.props.screenProps.socket.on('connecteduser',this.onlineViewers.bind(this));
        
      }
  componentDidMount() {
    console.log('socket',this.props.screenProps.socket)
  }
  
  onlineViewers(e){
        console.log('onlineViewers',e);
       
  }   
  questionTrueAnswer(e){
    console.log('questionTrueAnswer',e);

  }   
  questionFalseAnswer(e){
        console.log('questionFalseAnswer',e);
       
  }    
  yayinla = (item) => {
    this.props.screenProps.socket.emit('newquestion',item);
  }
  render(){
      console.log('this.state',this.state);
      return(
        <div   id="content" style={{backgroundColor:'#b2b2b2'}} >
                        
           <NavigationBar  toggleProps={()=>this.props.togle()}     />
            <div   style={{borderWidth:2,borderRadius:12.7,backgroundColor:'white',height:440,display:'flex',flexDirection:'row'}} >
               <div style={{flex:1,overflow: 'auto'}} >
                    <div   style={{height:120,width:'80%',marginLeft:'10%',marginTop:'5%',borderWidth:5,borderRadius:12.7,backgroundColor:'pink'}} >
                        <p > Soru 1: {this.state.questions ?  this.state.questions.questionDetails : null}</p>
                    </div>
                    <ListGroup  style={{width:'80%',marginLeft:'10%',marginTop:'4%'}}  >
                        <Button   style={{marginTop:'2%'}}  >A-) { this.state.questions ?  this.state.questions.questionAnswer.A : null}</Button>
                        <Button   style={{marginTop:'2%'}}  >B-) { this.state.questions ?  this.state.questions.questionAnswer.B : null}</Button>
                        <Button   style={{marginTop:'2%'}}  >C-) { this.state.questions ?  this.state.questions.questionAnswer.C : null}</Button>
                        <Button   style={{marginTop:'2%'}}  >D-) { this.state.questions ?  this.state.questions.questionAnswer.D : null}</Button>
                    </ListGroup>
                    <ButtonGroup   style={{width:'80%',marginLeft:'10%',marginTop:'4%'}} >
                        <Button>Bekleme</Button>
                        <Button>Bitir</Button>                        
                        <Button>Sonuçlar</Button>
                        <Button>Sonra ki Sorusu</Button>
                    </ButtonGroup>
               </div>
               <div style={{flex:1,overflow: 'auto',display:'flex',flexDirection:'column'}} >
                    <div   style={{flex:1,overflow: 'auto',display:'flex'}} >
                        <div   style={{flex:1,display:'flex',flexDirection:'column',marginTop:15}} >
                            <text>  Geri Sayım: {this.state.timer} </text>
                            <text>  Online Kullanıcı Sayısı: {this.state.timer} </text>
                        </div>
                        <div   style={{flex:1,display:'flex',flexDirection:'column',marginTop:15}} >
                             <text>  Doğru Cevap Sayısı: {this.state.timer} </text>
                            <text>  Yanlış Cevap Sayısı: {this.state.timer} </text>
                        </div>
                   
                    
                    </div>
                    <div   style={{flex:4,overflow: 'auto',backgroundColor:'red',marginRight:'5%',marginBottom:'5%'}} >
                    <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Kategori</th>
                                <th>Detay</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                jsonData.map((item,index)=>{
                                    return(
                                        <tr key={index} >
                                        <th scope="row">1</th>
                                        <td>{item.questionCategories}</td>
                                        <td><Button color="info"   onClick={()=>this.setState({questions:item})} >Soruyu Gör</Button></td>
                                        <td> <Button color="success" onClick={()=>this.yayinla(item)}   >Yayınla</Button></td>
                                    </tr>
                                    );
                                })
                            }
                           
                            </tbody>
                        </Table>
                     </div>   
                  
               </div>
            </div>
          

           
        </div>
      );
  }
}
export default Content;
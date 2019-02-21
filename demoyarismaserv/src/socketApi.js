const socketio = require('socket.io');
const io = socketio();
const socketApi = { };
socketApi.io = io;
let questions ;
let count=0;
io.on('connection',(socket)=>{
    console.log('New User Connected',socket.id);

    socket.on('join', (user)=>{  
        console.log('user',user)   
        console.log('socket',socket.id);   
      let newuser = {
          userID:socket.id,
          userName:user.userName,
          userTeam:user.userTeam          
      }  
      console.log('newuser',newuser);
      io.to(newuser.userID).emit('join',newuser);
   
        /*
        setTimeout(()=>{
          
            io.emit('viewon','ready');
        },1000)
        */
    });
   
    socket.on('questionanswer',(answer)=>{
        console.log('answer',answer);
      
            let result = {
                result:answer.questionAnswer===questions.questionTrue ? true : false
            }
            io.to(socket.id).emit('questionanswer',result);
      
    })
    socket.on('newquestion',(question)=>{
        console.log('yeni question',question);
        questions = question;
        io.emit('question',question);
    })   
    socket.on('disconnect', ()=>{ 
   
       
        if("user" in socket){    
           console.log('Disconnect',user);    
           
        }        
    });
  
   
});




module.exports= socketApi;
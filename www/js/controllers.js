angular.module('starter.controllers', [])
.run(function($rootScope){

    $rootScope.userName;
    $rootScope.isConnected = false;
    $rootScope.currentuser ="";
     $rootScope.ReceiveMessage =null;
    
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $rootScope, $ionicHistory, Chats) {
    /*
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" + $rootScope.userName);
  
  $rootScope.producerID;

  $rootScope.chatFrom ="/topic/chat.januka";
  $rootScope.sendID;


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
  Chats.remove(chat);
  };

/*
  //Initiating the ActiveMQ server connection
  $scope.initiate = function() {

      var url = "ws://localhost:61614";
      var username = "admin";
      var passcode = "password";

      client = Stomp.client(url);
      var headers = {
        login: 'mylogin',
        passcode: 'mypasscode',
        // additional header
        'client-id': 'operator0'
      };

      var headersq = {
        'activemq.subscriptionName': 'operator0'
      };


      function constructSessionID(id) {
        return id.replace(/:|-/g, '');
      }

/*
      client.connect(headers,function(frame) {
          
        var producers = [];

       
        var path = constructSessionID(frame.headers.session + "");

        $scope.ReceiveMessage = client.subscribe("/topic/chat.*", function(message) {
        $rootScope.sendID = message.headers.destination;
          //destination = destination + sendID;
          //destination = sendID;
          $rootScope.destination =  message.headers.destination;
            /*
          if ($rootScope.sendID == $rootScope.chatFrom) { 

            //console.log("------------------------------" + destination);
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&" + $rootScope.sendID);

            console.debug(message);
            var msgID = constructSessionID(message.headers["message-id"] + "");
          }
           
            else{
           
            if ($rootScope.destination != $scope.chats) {


            $rootScope.userName = $rootScope.destination.split('/topic/chat.');
            $rootScope.userName = $rootScope.userName[1];
            $rootScope.producerID = $rootScope.userName;
            // producerID = producerID.split(":-");
                        //producerID = producerID[0];

            $rootScope.producerID = constructSessionID($rootScope.producerID);
            console.log("*****************************" + path);
            if (producers.indexOf($rootScope.producerID) == -1) {
              producers.push($rootScope.producerID);


              var newEntry = [{
                name: $rootScope.producerID,
                                       lastText: 'new one',
                                       face: 'img/max.png'
              }];
              var finalObj = $scope.chats.concat(newEntry);
              $scope.chats = finalObj;
              console.log($rootScope.producerID + '*************************** ' + $scope.chats.length);
            }
          }
                 $rootScope.destination = $rootScope.chatFrom;
        }
          
          if (msgID.indexOf(path) > -1) {

            var reply = message.body + ('<p> <font size="1" color="black">' + new Date().toLocaleString() + '</font></p>');
            var des = message.headers["message-id"];

            $('<div class="msg_b"> <div class="profile-pic-right"><img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"></div> <p style="color:black;">' + reply + '</p> </div>').insertBefore('.enter-msg');

          } else {

            var reply = message.body + ('<p> <font size="1" color="white">' + new Date().toLocaleString() + '</font></p>');

            $('<div class="msg_a"> <div class="profile-pic-left"> <img  src="https://s.yimg.com/wv/images/a9696dca20fc0835ff82d7e0c7fc3a91_96.png"></div> <p style="color:white;">' + reply + '</p> </div>').insertBefore('.enter-msg');
          }
       
            }, headersq);
      });
      
      
      console.log($rootScope.destination);
    }
  
    //end of initiation


  $scope.sendMessage = function() {

    var text = $('#user_input').val();

    if (text != '') {
      client.send($rootScope.destination, {}, text); //destination
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" +$rootScope.destination);

      $('#user_input').val("");
    }
    // the client is notified when it is connected to the server.

    console.log("message submitted");
  }


  //Disconnecting the ActiveMQ server connection
  $scope.disconnect = function() {
    var exit = 'DIRROUTETOBOT';
    client.send($rootScope.destination, {}, exit);


    client.disconnect(function() {
      console.log("connection disconnected!");

      $ionicHistory.goBack();
    })
  }
*/
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ChatUsersCtrl', function($scope, $stateParams, Chats, $rootScope) {

$scope.sendMessage = function() {

            var text = $('#user_input').val();

            if (text != '') {
              client.send($rootScope.currentuser, {}, text); 
              console.log("operator message: " +text);

              $('#user_input').val("");
            }
            // the client is notified when it is connected to the server.

            console.log("message submitted");
  }
    
    
    
    
    
  $scope.chats = Chats.all();
    
  $scope.memorizeUser = function(userdestination){
    $rootScope.currentuser = userdestination;
    console.log('function executed');   
  
  } 
  
  $scope.remove = function(chat) {
      Chats.remove(chat);
  };   
  
    function constructSessionID(id) {
      return id.replace(/:|-/g, '');
    }
    
      function generateID(){
        var d = new Date();
        var n = d.getMilliseconds();
        return n;    
    }
    
 $scope.InitConnection =  function() {
     
    var url = "ws://localhost:61614";
    var username = "admin";
    var passcode = "password";
    client = Stomp.client(url);
    
     var headers = {
      login: 'mylogin',
      passcode: 'mypasscode',
      // additional header
      'client-id': 'operator0'
    };

    var headersq = {
      'activemq.subscriptionName': 'operator0'
    };


     if(!$rootScope.isConnected){
            client.connect(headers, function(frame) {
                var producers =[];
                var path = constructSessionID(frame.headers.session + "");
                
 $rootScope.ReceiveMessage = client.subscribe("/topic/chat.*", function(message) {
                $rootScope.sendID = message.headers.destination;
                console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&" + $rootScope.sendID);
                console.debug(message);
                var msgID = constructSessionID(message.headers["message-id"] + "");
                $rootScope.userName = message.headers["destination"].split(".");
                $rootScope.userName = $rootScope.userName[1];



                    if(producers.indexOf($rootScope.userName) == -1){
                            producers.push($rootScope.userName);

                                if($rootScope.userName !=path)  { 
                                        var newEntry = [{
                                        name: $rootScope.userName,
                                        lastText: 'new one',
                                        face: 'img/max.png',
                                        ddestination:message.headers["destination"]
                                         }];

                            $scope.chats = $scope.chats.concat(newEntry);
                            console.log($rootScope.userName + '   *************************** '+$scope.chats.length);
                                 }
                    }
                   if ($rootScope.sendID == $rootScope.currentuser) {     

                         if (msgID.indexOf(path) > -1) {

                          var reply = message.body + ('<p> <font size="1" color="black">' + new Date().toLocaleString() + '</font></p>');
                          var des = message.headers["message-id"];

                    $('<div class="msg_b"> <div class="profile-pic-right"><img src="https://cdn1.iconfinder.com/data/icons/user-         pictures/101/malecostume-512.png"></div> <p style="color:black;">' + reply + '</p> </div>').insertBefore('.enter-msg');

                        } 
                       else {

                        var reply = message.body + ('<p> <font size="1" color="white">' + new Date().toLocaleString() + '</font></p>');

                    $('<div class="msg_a"> <div class="profile-pic-left"> <img  src="https://s.yimg.com/wv/images/a9696dca20fc0835ff82d7e0c7fc3a91_96.png"></div> <p style="color:white;">' + reply + '</p> </div>').insertBefore('.enter-msg');
                       } 
                   }
              }, headersq);
                
                
                
                
            });
 $rootScope.isConnected = true;   
 }
 }
 
$scope.remove($scope.chats);  
 $scope.InitConnection();
    
    

  
  
  
  
  
  console.log($scope.currentuser);  
    
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

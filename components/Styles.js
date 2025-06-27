import React, { useState} from 'react';

import { Button, Text, View, TextInput,ScrollView,Image,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import { NavigationContainer, StackActions, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const radius = Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2;

export default StyleSheet.create({ 

container:{
 flex:1,
 width: Dimensions.get("window").width, //for full screen
 height: Dimensions.get("window").height, //for full screen  
 backgroundColor:"#1D293A",
 //top: "4%",
},
backgroundImage: {
   
  //flex:1,
  width: Dimensions.get("window").width, 
  height: Dimensions.get("window").height,
  //aspectRatio: 1080/1920,  
  
    
  },

  fullview:{

  width:"100%",
  height:"100%",

},


  studioview:{

  width: "100%",
  aspectRatio: 16/9, 
  marginTop:"10%",
  backgroundColor:"white"

},

exit:{

    top:"3%",
    alignSelf: 'flex-start',
    width: "5%", 
    position: 'absolute',
    aspectRatio: 1,
    marginLeft: 4,
  
},

header:{
  top:"15%",
  flexDirection:"row",
  width:"100%",
 //borderWidth:2,
 alignItems:"center",

},

greentickbox:{

flexDirection:"row",
width: "20%",
//borderWidth:2,

},

redtickbox:{
  
flexDirection:"row",
width: "20%",
//borderWidth:2,

},

clockbox:{

flexDirection:"row",
width: "30%",
//borderWidth:2,


},

proofbuttonbox:{

flexDirection:"row",
width: "25%",
height:"80%",
//borderWidth:2,
justifyContent:"center",
backgroundColor:"#5468FF",
borderRadius:20,
alignItems:"center",

},
tick:{
 
 flexDirection:"row",
 width: "50%",
 justifyContent:"center",
 alignItems:"center",
 

},

ticktextbox:{

flexDirection:"row",
width: "50%",
justifyContent:"center",
alignItems:"center",

},

ticktext:{

 color:"white",
 fontSize:RFPercentage(3),
 textAlign:"center",
 justifyContent:"center",

},

timerticktext:{

 color:"#5468FF",
 fontSize:RFPercentage(3),
 textAlign:"center",
 justifyContent:"center",

},

proofbuttontext:{

 color:"white",
 fontSize:RFPercentage(3),
 textAlign:"center",
 justifyContent:"center",
 fontWeight:"bold",

},

clock:{

 flexDirection:"row",
 width: "30%",
 aspectRatio: 1,
 justifyContent:"center",
 marginLeft:"5%",


},

questionpanel:{

   top:"10%",
  width:"100%",
 // height:"15%",
  //borderWidth:2,

},

questiontext:{

 color:"white",
 fontSize:RFPercentage(3),
 textAlign:"center",
 justifyContent:"center",
 fontWeight:"bold",
 


},

attributebox:{

  top:"10%",
  width:"100%",
 // height:"10%",
  //borderWidth:2,


},

attributetext:{

 color:"white",
 fontSize:RFPercentage(2),
 textAlign:"center",
 justifyContent:"center",
 fontWeight:"bold",


},

answerpanel:{

  top:"12%",
  width:"100%",
  height:"50%",
  //borderWidth:2,
  //aspectRatio:1.5,
  
},

scroll:{
 
 flexDirection:"column",
 width:"100%",
 //height:"100%",
 //borderWidth:2,
 //aspectRatio:2,


},

answerbox:{
 
  top:"1%",
  width:"80%",
  borderRadius:20,
  //aspectRatio:2,
  //borderWidth:1,
  alignSelf:"center",
  marginBottom:"5%",
  backgroundColor:"#303D4E",
  justifyContent:"center",
   shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 1,

 
},

footer:{

flexDirection:"row",
position: 'absolute',
top: "85%",
width:"80%",
//aspectRatio:5,
height:"10%",
//borderWidth:2,
alignItems: "center",
alignSelf:  "center",
backgroundColor:"#5468FF",
borderRadius:20,
justifyContent:"center",
//alignSelf:"flex-end",

},

continuediv:{

 width:"60%",
 justifyContent:"center",
 //borderWidth:2, 
 alignItems:"center",

},

nextarrowdiv:{

width:"10%",
 justifyContent:"center",
 //borderWidth:2, 
 aspectRatio:1,

},

modalContainer: {
      flex: 1,
      flexDirection:"row",
      height:"100%",
      width:"100%",
      justifyContent: 'center',
      alignItems: 'center',
	 backgroundColor: 'rgba(52, 52, 52, 0.6)',
	  
	  
    },

    proofbox:{


      borderColor:"black",
      borderWidth:3,  
      borderStyle:"solid", 
      width:"100%", 
      height:"100%",  
      backgroundColor:"white",


    },

    proofText:{

      textAlign:"center",
      fontSize:RFPercentage(2),

},

okButtonProof:{
borderWidth:0,
borderRadius:20,
width:"20%",   
aspectRatio:2,  
marginTop:"1%", 
justifyContent:"center", 
alignSelf:"center",
backgroundColor:"#2994FF",
borderStyle:"solid",


},






oktext:{

    textAlign:"center",
    fontWeight:"bold",
    fontSize: RFPercentage(3),
    paddingTop:"2%",
    color:"white",


},

finalcontainer:{
 flex:1,
 width: Dimensions.get("window").width, //for full screen
 height: Dimensions.get("window").height, //for full screen  
 backgroundColor:"#1D293A",
 //top: "4%",
},
finalbackgroundImage: {
     //flex:1,
  width: Dimensions.get("window").width, 
  height: Dimensions.get("window").height,
  //aspectRatio: 1080/1920,  
  justifyContent:"center",
  alignItems:"center",
    
  },

  progressbar:{
  
   height:Dimensions.get('window').width * 0.6,
   width: Dimensions.get('window').width * 0.6,
   borderWidth: 25 , 
   borderRadius:radius,
   borderColor:"#0EEEFF",
   //justifyContent:"center",
   //alignItems:"center",

  },

  
tickfinal:{
  //position: 'absolute',
  top:"-40%" ,
  width:"70%",
  height:"70%",
  alignSelf:"center",

},

xpshow:{

  width:"60%",
  //aspectRatio:2,
  height:"30%",
  borderRadius: 20,
  backgroundColor:"#5468FF",
  alignSelf:"center",
  justifyContent:"center",
  top:"-25%",

},

xpshowtext:{

color:"white",
 fontSize:RFPercentage(3),
 textAlign:"center",
 justifyContent:"center",
 fontWeight:"bold",
  
},

midview:{

width:"100%",
//height:"5%",
top:"-45%" ,

},

midtext:{

color:"white",
 fontSize:RFPercentage(7),
 textAlign:"center",
 justifyContent:"center",
 fontWeight:"bold",
 

},

smallshowtext:{

color:"grey",
 fontSize:RFPercentage(2),
 textAlign:"center",
 justifyContent:"center",
 fontWeight:"bold",
 

},

crosstick:{

    top:"4%",
    alignSelf: 'flex-end',
    width: "10%", 
    position: 'absolute',
    aspectRatio: 1,


},

jobtext:{

color:"white",
 fontSize:RFPercentage(4),
 textAlign:"center",
 justifyContent:"center",
 marginTop: "8%",
 //fontFamily: "Segoe UI" ,
 fontStyle:"italic",

},

lasttext:{

color:"#C8D4E3",
fontSize:RFPercentage(3),
 textAlign:"center",
 justifyContent:"center",
 //fontFamily: "Segoe UI" ,
 opacity:0.6,

},

finaltimer:{

   flexDirection:"row",
    top:"12%",
    alignSelf: 'flex-end',
    width: "35%",
   // height: "15%",
    position: 'absolute',
   // aspectRatio: 2,
   // borderWidth:2,
    alignItems:'center',
   //justifyContent:'center',
    left:"70%",
 
},

clockicon:{

 //flexDirection:"row",
 width: "15%",
 aspectRatio: 1,
 justifyContent:"center",
 marginLeft:"5%",
// borderWidth:2,

},

timertextbox:{

 flexDirection:"row",
//width: "50%",
justifyContent:"center",
alignItems:"center",
//borderWidth:2,

},

finaltimertext:{

color:"#5468FF",
 fontSize:RFPercentage(3),
 textAlign:"center",
 justifyContent:"center",
 fontWeight:"bold",
  
},

finalfooter:{

flexDirection:"row",
position: 'absolute',
height:"10%",
backgroundColor:"#5468FF",
width:"80%", 
//left:0, 
top:"85%" ,
alignItems: "center",
//justifyContent:"center",
// borderWidth:2,
 justifyContent: 'center',
 borderRadius:10,


},

exitdiv1:{

 flexDirection:"row",
 width:"50%",
 alignItems: "center",
 justifyContent: 'center',
 borderRightWidth:3,
 borderRightColor: "rgba(0, 0, 0, 0.5)",

},

exitdiv2:{

 flexDirection:"row",
 width:"50%",
 alignItems: "center",
 justifyContent: 'center',
 

},

finalfootertext:{

 color:"#1D293A",  
 textAlign:"center", 
justifyContent:"center",
fontSize: RFPercentage(3),
fontWeight:"bold",


},

finalfooterimagediv:{

  width:"20%",
 alignItems: "center",
 justifyContent: 'center',
 aspectRatio:1,
 

},
finalfootertextdiv:{

 //width:"50%",
 alignItems: "center",
 justifyContent: 'center',
 


},




})


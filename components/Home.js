import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions,
  Linking,
} from "react-native";
import {
  NavigationContainer,
  StackActions,
  NavigationActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ui } from "./Holder";
import { banglaDigits } from "./Options";
import { WebView } from "react-native-webview";

let xptextsizevar = 3;
let calc = Dimensions.get("window").width * (50 / 100);
let ratio = Dimensions.get("window").height / Dimensions.get("window").width;
let activecolor = "#2FEC22";
let notactivecolor = "grey";

let engdiv = {
  width: "30%",
  backgroundColor: "#10AB6D",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  justifyContent: "center",
  alignItems: "center",
};

let bandiv = {
  width: "30%",
  backgroundColor: "grey",
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
    backgroundColor: "#1D293A",
    //top: "5%",
  },

  backgroundImage: {
    top: "1%",
    width: Dimensions.get("window").width,
    aspectRatio: 977 / 531,
  },

  subjectdiv: {
    flexDirection: "row",
    top: "6%",
    width: "100%",
    //borderWidth:2,
  },

  subjecttextdiv: {
    width: "60%",
    justifyContent: "flex-start",
    //borderWidth:2,
  },

  subjecttext: {
    paddingLeft: "3%",
    color: "white",
    fontWeight: "bold",
    //fontFamily: "Segoe UI" ,
    fontSize: RFPercentage(2.8),
    /* textShadowColor: 'black',
  textShadowOffset: {width: 3, height: -3},
  textShadowRadius: 10,*/
  },

  xpbox: {
    //flexDirection:"row",
    width: "100%",
    //borderWidth:2,
  },

  xpback: {
    flexDirection: "row",
    alignSelf: "flex-end",
    width: "50%",
    //borderWidth:2,
    //backgroundColor:"#5468FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  xpbackex: {
    flexDirection: "row",
    width: "70%",
    //borderWidth:2,
    backgroundColor: "#278AEF",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  xpiconbox: {
    width: "30%",
    aspectRatio: 1,
  },

  xpnumdiv: {
    width: "60%",
    //borderWidth:2,
    alignItems: "center",
  },

  profilebox: {
    width: "30%",
    aspectRatio: 1,
    paddingRight: "0%",
    right: "30%",
    // borderWidth:2,
    //height:"30%",
  },

  xpnumtext: {
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: RFPercentage(xptextsizevar),
  },

  scroll: {
    top: "6%",
    aspectRatio: 1,
    width: "100%",
    //borderWidth:2,
  },

  fullview: {
    width: "100%",
    height: "100%",
  },

  touch: {
    flex: 1,
    top: 0,
    width: calc,
    aspectRatio: 1,
    marginLeft: 15,
  },

  textdiv: {
    flexDirection: "row",
    position: "absolute",
    height: "10%",
    width: Dimensions.get("window").width,
    //left:0,
    top: "90%",
    alignItems: "center",
    //justifyContent:"center",
    //borderWidth:2,
    justifyContent: "center",
  },

  creditsbox: {
    width: "40%",
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderRightColor: "#303D4E",
    borderLeftColor: "#303D4E",
    justifyContent: "center",
    alignItems: "center",
  },

  credstext: {
    color: "#5468FF",
    textAlign: "center",
    justifyContent: "center",
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
  },

  modalContainer: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },

  paper: {
    width: "50%",
    aspectRatio: 1,
  },

  langdiv: {
    // position:"absolute",
    flexDirection: "row",
    width: "40%",
    top: "2%",
    //borderWidth:2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  supportdiv: {
    width: "18%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: "5%",
  },

  helpmodalContainer: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },

  helpmodalinner: {
    height: "50%",
    width: "80%",
    backgroundColor: "#2994FF",
    justifyContent: "center",
    alignItems: "center",
  },

  helpmodaltext: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: RFPercentage(3),
    fontWeight: "bold",
  },

  credsmodaltext: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: RFPercentage(3),
    fontWeight: "bold",
  },
});

function Home({ navigation }) {
  const [xp, SetXp] = useState(0);
  const [quizxp, SetQuizXp] = useState(0);
  const [paperVisible, setPaperVisible] = useState(false);
  const [phyVisible, setPhyVisible] = useState(false);
  const [chemVisible, setChemVisible] = useState(false);
  const [mathVisible, setMathVisible] = useState(false);
  const [langu, SetLangu] = useState(3);
  const [helpvisible, setHelpvisible] = useState(false);
  const [credsvisible, setCredsVisible] = useState(false);
  const [aboutvisible, setAboutVisible] = useState(false);
  const [webvisible, setwebVisible] = useState(false);
  const [medalActive, setMedalActive] = useState(0);
  const [medalTimeLeft, setMedalTimeLeft] = useState(0);
  const [quizlimit, setQuizLimit] = useState(0);

  let presseng = function Pressenglang() {
    SetLangu(1);
  };
  let pressban = function Pressbanlang() {
    SetLangu(0);
  };

  //profile modal

  function handlePress() {
    setwebVisible(true);
  }
  function handleClose() {
    setwebVisible(false);
  }

  //LANGUAGE DETECTOR

  let banglaxp = "";
  let xpstring = xp.toString();
  let finalxp = xpstring;
  let banglaquizxp = "";
  let quizxpstring = quizxp.toString();
  let finalquizxp = quizxpstring;

  function Converter() {
    for (let i = 0; i < xpstring.length; i++) {
      banglaxp += banglaDigits[xpstring.charAt(i)];
    }
    for (let i = 0; i < quizxpstring.length; i++) {
      banglaquizxp += banglaDigits[quizxpstring.charAt(i)];
    }

    finalxp = banglaxp;
    finalquizxp = banglaquizxp;
    return 0;
  }

  if (langu == 3) {
    AsyncStorage.getItem("langholder").then((value) => {
      value = JSON.parse(value);
      if (value != null) {
        SetLangu(value);
      } else {
        SetLangu(1);
      }
    });
  }

  if (langu == 1) {
    engdiv.backgroundColor = activecolor;
    bandiv.backgroundColor = notactivecolor; //langcode = 1;

    finalxp = xpstring;
    finalquizxp = quizxpstring;

    AsyncStorage.setItem("langholder", JSON.stringify(langu)).then(
      (value) => {}
    );
  }
  if (langu == 0) {
    engdiv.backgroundColor = notactivecolor;
    bandiv.backgroundColor = activecolor; //langcode = 0;

    Converter();

    AsyncStorage.setItem("langholder", JSON.stringify(langu)).then(
      (value) => {}
    );
  }

  //fetching data

  let uifetch = "l" + langu;

  let subjecttextlang = ui[uifetch].subjects;
  let homebackpic = ui[uifetch].homebackpics;
  let physicspic = ui[uifetch].physicspics;
  let chemistrypic = ui[uifetch].chemistrypics;
  let mathpic = ui[uifetch].mathpics;
  let xpdiftext = ui[uifetch].xptexts;
  let creds = ui[uifetch].credits;
  let creditstext = ui[uifetch].creditstexts;
  let aboutext = ui[uifetch].abouttexts;
  let paper1stpic = ui[uifetch].paper1st;
  let paper2ndpic = ui[uifetch].paper2nd;
  let credsline1 = ui[uifetch].creditsline1;
  let credsline2 = ui[uifetch].creditsline2;
  let credsline3 = ui[uifetch].creditsline3;
  let credsline4 = ui[uifetch].creditsline4;
  let credsline5 = ui[uifetch].creditsline5;
  let aboutline1 = ui[uifetch].aboutline1;
  let aboutline2 = ui[uifetch].aboutline2;
  let aboutline3 = ui[uifetch].aboutline3;

  let pagedirect1st = function Getpaper1() {
    AsyncStorage.setItem("paper", JSON.stringify(1)).then((value) => {
      navigation.dispatch(StackActions.replace("Chapters"));
      return 0;
    });
  };

  let pagedirect2nd = function Getpaper2() {
    AsyncStorage.setItem("paper", JSON.stringify(2)).then((value) => {
      navigation.dispatch(StackActions.replace("Chapters"));
      return 0;
    });
  };

  if (phyVisible == true) {
    AsyncStorage.setItem("sub", JSON.stringify("physics")).then((value) => {});
  }

  if (chemVisible == true) {
    AsyncStorage.setItem("sub", JSON.stringify("chemistry")).then(
      (value) => {}
    );
  }
  if (mathVisible == true) {
    AsyncStorage.setItem("sub", JSON.stringify("math")).then((value) => {});
  }

  //Check if Medal Active

  AsyncStorage.getItem("quizlimit").then((value) => {
    value = JSON.parse(value);
    //console.log('home:'+value);
    if (value != null) {
      setQuizLimit(Number(value));
      //console.log(value);
      let savedtime = Number(value);
      const currentTimeInHours = Math.floor(new Date().getTime() / 3600000);
      //console.log("Current:"+currentTimeInHours); // Output the current time in hours
      let check = currentTimeInHours - savedtime;
      let remainingHours = 12 - check;
      // console.log("Diff:"+check);

      if (check >= 12) {
        setMedalActive(1);
        setMedalTimeLeft(0);
      } else {
        setMedalTimeLeft(remainingHours);
        setMedalActive(0);
      }
    }
  });

  //AsyncStorage.removeItem('langholder')//.then((value)=>{ SetXp(JSON.parse(value))});
  AsyncStorage.getItem("xp").then((value) => {
    value = JSON.parse(value);

    if (value != null && value > 0) {
      SetXp(value);
    } else {
      SetXp(0);
      AsyncStorage.setItem("xp", JSON.stringify(0));
    }
  });

  AsyncStorage.getItem("quizxp").then((value) => {
    value = JSON.parse(value);
    //console.log("Quiz:"+ value);

    if (value != null && value > 0) {
      SetQuizXp(value);
    } else {
      SetQuizXp(0);
      AsyncStorage.setItem("quizxp", JSON.stringify(0));
    }
  });

  if (xp > 9999 || quizxp > 9999) {
    xptextsizevar = 2;
  }

  const [email, setEmail] = useState("");

  AsyncStorage.getItem("savedemail").then((value) => {
    if (value != null) {
      value = JSON.parse(value);
      //console.log("check:" + value);
      setEmail(value);

      //sending user data to server
      fetch("https://heliospherestudios.com/updatedatabase.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          xp: xp,
          quizxp: quizxp,
          quizlimit: quizlimit,
        }),
      }).catch((error) => console.error("Error:", error));
    } else {
      AsyncStorage.getItem("tempemail").then((value) => {
        if (value != null) {
          value = JSON.parse(value);
          // console.log("TEMP:"+value);
          setEmail(value);
          AsyncStorage.setItem("savedemail", JSON.stringify(value));
        }
      });
    }
  });

  const [isVisible, setIsVisible] = useState(true);

  /* let splash = setTimeout(() => {
setIsVisible(false);
}, 2000); */

  if (isVisible == true) {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={(WEBVIEW_REF) => (WebViewRef = WEBVIEW_REF)}
          source={{ uri: "https://www.heliospherestudios.com/profile" }}
          onMessage={(event) => {
            //save email,xp,quizxp from webview after login
            const data = JSON.parse(event.nativeEvent.data);

            AsyncStorage.removeItem("savedemail");
            AsyncStorage.removeItem("tempdemail");
            // AsyncStorage.removeItem('quizlimit');

            //console.log(data);

            // console.log("Red flag");

            // AsyncStorage.removeItem('quizlimit');
            //setEmail(data.email);
            // AsyncStorage.setItem('savedemail',JSON.stringify (data.email));
            AsyncStorage.setItem("tempemail", JSON.stringify(data.email));
            AsyncStorage.setItem("xp", JSON.stringify(data.xp));
            AsyncStorage.setItem("quizxp", JSON.stringify(data.quizxp));
            AsyncStorage.setItem("quizlimit", JSON.stringify(data.quizlimit));
            setIsVisible(false);

            // Use the email to send POST data request
          }}
        />
        <Button
          title="Refresh"
          onPress={() => {
            WebViewRef && WebViewRef.reload();
          }}
        />
      </View>
    );
  }
  if (isVisible == false) {
    //clearTimeout(splash);

    return (
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <ScrollView style={styles.container}>
          <View style={styles.xpbox}>
            <View style={styles.xpback}>
              <View style={styles.xpbackex}>
                <TouchableOpacity style={styles.xpiconbox}>
                  <Image
                    style={styles.fullview}
                    source={require("../assets/xpicon.png")}
                  />
                </TouchableOpacity>
                <View style={styles.xpnumdiv}>
                  <Text style={styles.xpnumtext}>
                    {finalxp}/{finalquizxp}
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.profilebox} onPress={handlePress}>
                <Image
                  style={styles.fullview}
                  source={require("../assets/profileicon.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ImageBackground
            style={styles.backgroundImage}
            source={homebackpic}
          />

          <View style={styles.subjectdiv}>
            <View style={styles.subjecttextdiv}>
              <Text style={styles.subjecttext}>
                {subjecttextlang}/{medalActive}/{medalTimeLeft}
              </Text>
            </View>

            <View style={styles.langdiv}>
              <TouchableOpacity
                style={styles.supportdiv}
                onPress={() => setHelpvisible(true)}
              >
                <Image
                  style={styles.fullview}
                  source={require("../assets/helpicon.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={engdiv} onPress={presseng}>
                <Text style={styles.subjecttext}>Eng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={bandiv} onPress={pressban}>
                <Text style={styles.subjecttext}>বাং</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.scroll}>
            <ScrollView horizontal={true} directionalLockEnabled={false}>
              <TouchableHighlight
                style={styles.touch}
                onPress={() => {
                  setPaperVisible(true);
                  setPhyVisible(true);
                }}
              >
                <Image style={styles.fullview} source={physicspic} />
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.touch}
                onPress={() => {
                  setPaperVisible(true);
                  setChemVisible(true);
                }}
              >
                <Image style={styles.fullview} source={chemistrypic} />
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.touch}
                onPress={() => {
                  setPaperVisible(true);
                  setMathVisible(true);
                }}
              >
                <Image style={styles.fullview} source={mathpic} />
              </TouchableHighlight>
            </ScrollView>
          </View>
        </ScrollView>

        <View style={styles.textdiv}>
          <TouchableOpacity
            style={styles.creditsbox}
            onPress={() => setCredsVisible(true)}
          >
            <Text style={styles.credstext}>{creditstext}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.creditsbox}
            onPress={() => setAboutVisible(true)}
          >
            <Text style={styles.credstext}>{aboutext}</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={paperVisible}
          onRequestClose={() => {
            setPhyVisible(false);
          }}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => {
              setPaperVisible(false);
            }}
          >
            <TouchableHighlight style={styles.paper} onPress={pagedirect1st}>
              <Image style={styles.fullview} source={paper1stpic} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.paper} onPress={pagedirect2nd}>
              <Image style={styles.fullview} source={paper2ndpic} />
            </TouchableHighlight>
          </TouchableOpacity>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={helpvisible}
          onRequestClose={() => setHelpvisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => setHelpvisible(false)}
          >
            <View style={styles.helpmodalContainer}>
              <View style={styles.helpmodalinner}>
                <Text style={styles.helpmodaltext}>
                  Select your preferred language{"\n"}
                  (আপনার পছন্দসই ভাষা নির্বাচন করুন){"\n"}
                  Eng = ENGLISH (ইংরেজি){"\n"}
                  বাং = বাংলা (BANGLA)
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={credsvisible}
          onRequestClose={() => setCredsVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => setCredsVisible(false)}
          >
            <View style={styles.helpmodalContainer}>
              <View style={styles.helpmodalinner}>
                <Text style={styles.credsmodaltext}>
                  {credsline1}
                  {"\n"}
                  {credsline2} {"\n"}
                  {"\n"}
                  {credsline3} {"\n"}
                  {credsline4}
                  {"\n"}
                  {"\n"}
                  {credsline5}
                  {"\n"}
                  {"\n"}
                  &copy; Heliosphere Studios
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={aboutvisible}
          onRequestClose={() => setAboutVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => setAboutVisible(false)}
          >
            <View style={styles.helpmodalContainer}>
              <View style={styles.helpmodalinner}>
                <Text style={styles.credsmodaltext}>
                  {aboutline1} {"\n"}
                  {"\n"}{" "}
                </Text>

                <Text
                  style={styles.credsmodaltext}
                  onPress={() =>
                    Linking.openURL("https://www.heliospherestudios.com")
                  }
                >
                  {" "}
                  {aboutline2} {"\n"}
                  {"\n"}{" "}
                </Text>
                <Text
                  style={styles.credsmodaltext}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.facebook.com/Heliosphere-Studios-101469915162475"
                    )
                  }
                >
                  {" "}
                  {aboutline3}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        <Modal visible={webvisible} animationType="slide" transparent={true}>
          <View style={{ flex: 1 }}>
            <WebView
              ref={(WEBVIEW_REF) => (WebViewRef = WEBVIEW_REF)}
              source={{ uri: "https://www.heliospherestudios.com/profile" }}
              onMessage={(event) => {
                //save email,xp,quizxp from webview after login
                const data = JSON.parse(event.nativeEvent.data);
                //console.log(data);
                if (data.email == null) {
                  setIsVisible(true);
                  // console.log("Logged out");
                }
              }}
            />
            <Button
              title="Refresh"
              onPress={() => {
                WebViewRef && WebViewRef.reload();
              }}
            />

            <Button title="Close" onPress={handleClose} />
          </View>
        </Modal>
      </View>
    );
  }
}

export default Home;

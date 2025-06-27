import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  Dimensions,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationContainer,
  NavigationActions,
  StackActions,
} from "@react-navigation/native";
import { chapname, ui } from "./Holder";
import { banglaDigits } from "./Options";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
    backgroundColor: "#1D1D1D",
    //top: "4%",
  },

  backgroundImage: {
    width: Dimensions.get("window").width,
    aspectRatio: 1080 / 380,
  },

  fullview: {
    width: "100%",
    height: "100%",
  },

  exit: {
    top: "3%",
    alignSelf: "flex-start",
    width: "5%",
    position: "absolute",
    aspectRatio: 1,
    marginLeft: 4,
  },

  modalexit: {
    top: "0%",
    alignSelf: "flex-start",
    width: "5%",
    //position: 'absolute',
    aspectRatio: 1,
    marginLeft: 4,
  },

  scroll: {
    top: "5%",
    width: "100%",
  },

  // Chapters Page
  chapbox: {
    flexDirection: "row",
    width: "80%",
    //borderWidth:1,
    marginTop: "5%",
    backgroundColor: "#EE8E18",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  chaptext: {
    color: "#202123",
    fontSize: RFPercentage(5),
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  chapnametext: {
    color: "white",
    fontSize: RFPercentage(3),
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  numbox: {
    width: "20%",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "#EE8E18",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  namebox: {
    justifyContent: "center",
    width: "80%",
    //borderWidth:2,
    //backgroundColor:"#5468FF",
    //borderRadius:10,
  },

  modalContainer: {
    flex: 1,
    // flexDirection:"row",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(238, 142, 24, 1)",
  },

  modalbox: {
    width: "80%",
    backgroundColor: "#EE8E18",
    alignSelf: "center",
    //borderWidth:2,
  },

  modalchaptext: {
    marginLeft: "8%",
    color: "white",
    fontSize: RFPercentage(3),
    //textAlign:"center",
    // justifyContent:"center",
    fontWeight: "bold",
  },

  chapstartpicback: {
    marginTop: "6%",
    width: "90%",
    aspectRatio: 1,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#EE8E18",
    borderRadius: 20,
    //borderWidth:2,
  },

  imageholder: {
    width: "100%",
    alignSelf: "center",
    //borderWidth:2,
    //height:"0%",
    //  aspectRatio:584/585,
  },

  intro: {
    marginTop: "2%",
    width: "100%",
    marginLeft: "8%",
    // borderWidth:2,
  },

  start: {
    marginTop: "2%",
    width: "100%",
    // borderWidth:2,
  },

  startpress: {
    alignSelf: "flex-end",
    width: "40%",
    backgroundColor: "#EE8E18",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:2,
  },
});

export default function Chapters({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chapterno, setChapterno] = useState(0);
  const [check, setCheck] = useState(fetch);
  const [subject, setSubject] = useState("");
  const [paper, setPaper] = useState("");
  const [fetch, setFetch] = useState("");
  const [lang, setLang] = useState(3);

  let cname;
  let qnum;
  let direction = function Nav() {
    navigation.dispatch(StackActions.replace("Controller"));
  };
  let maxxp;

  AsyncStorage.getItem("langholder").then((value) => {
    value = JSON.parse(value);
    setLang(value);
  });

  AsyncStorage.getItem("sub").then((value) => {
    value = JSON.parse(value);
    setSubject(value);
  });

  AsyncStorage.getItem("paper").then((value) => {
    value = JSON.parse(value);
    setPaper(value);

    setFetch(subject + paper);
  });

  let chapfetch = "l" + lang;
  //Chapter Name fetch

  let chaptertext = ui[chapfetch].chaptertexts;
  let maxxptext = ui[chapfetch].maxxptexts;
  let questiontext = ui[chapfetch].questiontexts;
  let starttext = ui[chapfetch].starttexts;

  let phybackpic = chapname[chapfetch].phybackpics;
  let chembackpic = chapname[chapfetch].chembackpics;
  let mathbackpic = chapname[chapfetch].mathbackpics;

  //Physics 1st

  let c101 = chapname[chapfetch].c101;
  let c102 = chapname[chapfetch].c102;
  let c103 = chapname[chapfetch].c103;
  let c104 = chapname[chapfetch].c104;
  let c105 = chapname[chapfetch].c105;
  let c106 = chapname[chapfetch].c106;
  let c107 = chapname[chapfetch].c107;
  let c108 = chapname[chapfetch].c108;
  let c109 = chapname[chapfetch].c109;
  let c1010 = chapname[chapfetch].c1010;
  let c1011 = chapname[chapfetch].c1011; //quiz

  //Physics 2nd

  let c1001 = chapname[chapfetch].c1001;
  let c1002 = chapname[chapfetch].c1002;
  let c1003 = chapname[chapfetch].c1003;
  let c1004 = chapname[chapfetch].c1004;
  let c1005 = chapname[chapfetch].c1005;
  let c1006 = chapname[chapfetch].c1006;
  let c1007 = chapname[chapfetch].c1007;
  let c1008 = chapname[chapfetch].c1008;
  let c1009 = chapname[chapfetch].c1009;
  let c10010 = chapname[chapfetch].c10010;
  let c10011 = chapname[chapfetch].c10011;

  //Chemistry 1st

  let c201 = chapname[chapfetch].c201;
  let c202 = chapname[chapfetch].c202;
  let c203 = chapname[chapfetch].c203;
  let c204 = chapname[chapfetch].c204;
  let c205 = chapname[chapfetch].c205;
  let c206 = chapname[chapfetch].c1011; //quiz

  //Chemistry 2nd

  let c2001 = chapname[chapfetch].c2001;
  let c2002 = chapname[chapfetch].c2002;
  let c2003 = chapname[chapfetch].c2003;
  let c2004 = chapname[chapfetch].c2004;
  let c2005 = chapname[chapfetch].c2005;

  //Math 1st

  let c301 = chapname[chapfetch].c301;
  let c302 = chapname[chapfetch].c302;
  let c303 = chapname[chapfetch].c303;
  let c304 = chapname[chapfetch].c304;
  let c305 = chapname[chapfetch].c305;
  let c306 = chapname[chapfetch].c306;
  let c307 = chapname[chapfetch].c307;
  let c308 = chapname[chapfetch].c308;
  let c309 = chapname[chapfetch].c309;
  let c3010 = chapname[chapfetch].c3010;
  let c3011 = chapname[chapfetch].c1011; //quiz

  //Math 2nd

  let c3001 = chapname[chapfetch].c3001;
  let c3002 = chapname[chapfetch].c3002;
  let c3003 = chapname[chapfetch].c3003;
  let c3004 = chapname[chapfetch].c3004;
  let c3005 = chapname[chapfetch].c3005;
  let c3006 = chapname[chapfetch].c3006;
  let c3007 = chapname[chapfetch].c3007;
  let c3008 = chapname[chapfetch].c3008;
  let c3009 = chapname[chapfetch].c3009;
  let c30010 = chapname[chapfetch].c30010;

  function Converter() {
    let tempqnum = "";
    let qnumstring = qnum.toString();
    if (lang == 1) {
      qnum;
    }

    if (lang == 0) {
      for (let i = 0; i < qnumstring.length; i++) {
        tempqnum += banglaDigits[qnumstring.charAt(i)];
      }

      qnum = tempqnum;
    }
    return 0;
  }

  if (lang == 1) {
    maxxp = "5";
  }
  if (lang == 0) {
    maxxp = "৫";
  }

  function Chapterget() {
    AsyncStorage.setItem("chno", JSON.stringify(chapterno));

    return 0;
  }

  switch (chapterno) {
    case 101:
      cname = c101;
      qnum = 14;
      Chapterget();
      Converter();

      break;
    case 102:
      cname = c102;
      qnum = 21;
      Chapterget();
      Converter();

      break;
    case 103:
      cname = c103;
      qnum = 31;
      Chapterget();
      Converter();

      break;
    case 104:
      cname = c104;
      qnum = 26;
      Chapterget();
      Converter();

      break;
    case 105:
      cname = c105;
      qnum = 16;
      Chapterget();
      Converter();

      break;
    case 106:
      cname = c106;
      qnum = 20;
      Chapterget();
      Converter();

      break;
    case 107:
      cname = c107;
      qnum = 21;
      Chapterget();
      Converter();

      break;
    case 108:
      cname = c108;
      qnum = 13;
      Chapterget();
      Converter();

      break;
    case 109:
      cname = c109;
      qnum = 11;
      Chapterget();
      Converter();

      break;
    case 1010:
      cname = c1010;
      qnum = 13;
      Chapterget();
      Converter();

      break;
    case 1011: // QUIZ Master (Physics 1st)
      cname = c1011;
      qnum = 20;
      Chapterget();
      Converter();

      break;
    case 1001:
      cname = c1001;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 1002:
      cname = c1002;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 1003:
      cname = c1003;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 1004:
      cname = c1004;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 1005:
      cname = c1005;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 1006:
      cname = c1006;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 1007:
      cname = c1007;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 1008:
      cname = c1008;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 1009:
      cname = c1009;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 10010:
      cname = c10010;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 10011:
      cname = c10011;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 201:
      cname = c201;
      qnum = 5;
      Chapterget();
      Converter();

      break;
    case 202:
      cname = c202;
      qnum = 11;
      Chapterget();
      Converter();

      break;
    case 203:
      cname = c203;
      qnum = 10;
      Chapterget();
      Converter();

      break;
    case 204:
      cname = c204;
      qnum = 18;
      Chapterget();
      Converter();

      break;
    case 205:
      cname = c205;
      qnum = 17;
      Chapterget();
      Converter();

      break;
    case 206:
      cname = c206;
      qnum = 20;
      Chapterget();
      Converter();

      break;
    case 2001:
      cname = c2001;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 2002:
      cname = c2002;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 2003:
      cname = c2003;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 2004:
      cname = c2004;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 2005:
      cname = c2005;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 301:
      cname = c301;
      qnum = 6;
      Chapterget();
      Converter();

      break;
    case 302:
      cname = c302;
      qnum = 15;
      Chapterget();
      Converter();

      break;
    case 303:
      cname = c303;
      qnum = 27;
      Chapterget();
      Converter();

      break;
    case 304:
      cname = c304;
      qnum = 12;
      Chapterget();
      Converter();

      break;
    case 305:
      cname = c305;
      qnum = 7;
      Chapterget();
      Converter();

      break;
    case 306:
      cname = c306;
      qnum = 27;
      Chapterget();
      Converter();

      break;
    case 307:
      cname = c307;
      qnum = 26;
      Chapterget();
      Converter();

      break;
    case 308:
      cname = c308;
      qnum = 12;
      Chapterget();
      Converter();

      break;
    case 309:
      cname = c309;
      qnum = 25;
      Chapterget();
      Converter();

      break;
    case 3010:
      cname = c3010;
      qnum = 22;
      Chapterget();
      Converter();

      break;
    case 3011:
      cname = c3011;
      qnum = 20;
      Chapterget();
      Converter();

      break;
    case 3001:
      cname = c3001;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 3002:
      cname = c3002;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 3003:
      cname = c3003;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 3004:
      cname = c3004;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 3005:
      cname = c3005;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 3006:
      cname = c3006;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 3007:
      cname = c3007;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 3008:
      cname = c3008;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 3009:
      cname = c3009;
      qnum = "";
      Chapterget();
      Converter();

      break;
    case 30010:
      cname = c30010;
      qnum = "";
      Chapterget();
      Converter();

      break;
    default:
    // code block
  }

  if (fetch == "physics1") {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image style={styles.fullview} source={phybackpic} />
        </View>

        <TouchableHighlight
          style={styles.exit}
          onPress={() => navigation.dispatch(StackActions.replace("Home"))}
        >
          <Image
            style={styles.fullview}
            source={require("../assets/backwardarrow.png")}
          />
        </TouchableHighlight>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: "20%" }}
        >
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(101);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>1</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c101}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(102);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>2</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c102}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(103);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>3</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c103}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(104);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>4</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c104}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(105);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>5</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c105}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(106);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>6</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c106}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(107);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>7</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c107}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(108);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>8</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c108}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(109);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>9</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c109}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1010);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>10</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1010}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1011);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>Q</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1011}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <ImageBackground
            style={styles.modalContainer}
            source={require("../assets/chapstartback.png")}
          >
            <TouchableHighlight
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={styles.modalexit}
            >
              <Image
                style={styles.fullview}
                source={require("../assets/backwardarrow.png")}
              />
            </TouchableHighlight>

            <View style={styles.modalbox}>
              <View>
                <Text style={styles.modalchaptext}>
                  {chaptertext}: {cname}
                </Text>
              </View>

              <View style={styles.chapstartpicback}>
                <View style={styles.imageholder}>
                  <Image
                    style={styles.fullview}
                    source={require("../assets/physchapstart.png")}
                  />
                </View>
              </View>

              <View style={styles.intro}>
                <Text style={styles.modalchaptext}>
                  {questiontext}: {qnum}
                  {"\n"}
                  {maxxptext}: {maxxp}
                </Text>
              </View>

              <View style={styles.start}>
                <TouchableHighlight
                  onPress={direction}
                  style={styles.startpress}
                >
                  <Text style={styles.modalchaptext}>{starttext}>></Text>
                </TouchableHighlight>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    );
  }

  if (fetch == "physics2") {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image style={styles.fullview} source={phybackpic} />
        </View>

        <TouchableHighlight
          style={styles.exit}
          onPress={() => navigation.dispatch(StackActions.replace("Home"))}
        >
          <Image
            style={styles.fullview}
            source={require("../assets/backwardarrow.png")}
          />
        </TouchableHighlight>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: "20%" }}
        >
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1001);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>1</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1001}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1002);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>2</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1002}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1003);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>3</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1003}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1004);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>4</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1004}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1005);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>5</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1005}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1006);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>6</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1006}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1007);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>7</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1007}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1008);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>8</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1008}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(1009);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>9</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c1009}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(10010);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>10</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c10010}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(10011);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>11</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c10011}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <ImageBackground
            style={styles.modalContainer}
            source={require("../assets/chapstartback.png")}
          >
            <TouchableHighlight
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={styles.modalexit}
            >
              <Image
                style={styles.fullview}
                source={require("../assets/backwardarrow.png")}
              />
            </TouchableHighlight>

            <View style={styles.modalbox}>
              <View>
                <Text style={styles.modalchaptext}>
                  {chaptertext}: {cname}
                </Text>
              </View>

              <View style={styles.chapstartpicback}>
                <View style={styles.imageholder}>
                  <Image
                    style={styles.fullview}
                    source={require("../assets/physchapstart.png")}
                  />
                </View>
              </View>

              <View style={styles.intro}>
                <Text style={styles.modalchaptext}>
                  {questiontext}: {qnum}
                  {"\n"}
                  {maxxptext}: {maxxp}
                </Text>
              </View>

              <View style={styles.start}>
                <TouchableOpacity onPress={direction} style={styles.startpress}>
                  <Text style={styles.modalchaptext}>{starttext}>></Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    );
  }

  if (fetch == "chemistry1") {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image style={styles.fullview} source={chembackpic} />
        </View>

        <TouchableHighlight
          style={styles.exit}
          onPress={() => navigation.dispatch(StackActions.replace("Home"))}
        >
          <Image
            style={styles.fullview}
            source={require("../assets/backwardarrow.png")}
          />
        </TouchableHighlight>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: "20%" }}
        >
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(201);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>1</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c201}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(202);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>2</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c202}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(203);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>3</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c203}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(204);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>4</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c204}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(205);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>5</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c205}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(206);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>Q</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c206}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <ImageBackground
            style={styles.modalContainer}
            source={require("../assets/chapstartback.png")}
          >
            <TouchableHighlight
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={styles.modalexit}
            >
              <Image
                style={styles.fullview}
                source={require("../assets/backwardarrow.png")}
              />
            </TouchableHighlight>

            <View style={styles.modalbox}>
              <View>
                <Text style={styles.modalchaptext}>
                  {chaptertext}: {cname}
                </Text>
              </View>

              <View style={styles.chapstartpicback}>
                <View style={styles.imageholder}>
                  <Image
                    style={styles.fullview}
                    source={require("../assets/chemichapstart.png")}
                  />
                </View>
              </View>

              <View style={styles.intro}>
                <Text style={styles.modalchaptext}>
                  {questiontext}: {qnum}
                  {"\n"}
                  {maxxptext}: {maxxp}
                </Text>
              </View>

              <View style={styles.start}>
                <TouchableOpacity onPress={direction} style={styles.startpress}>
                  <Text style={styles.modalchaptext}>{starttext}>></Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    );
  }

  if (fetch == "chemistry2") {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image style={styles.fullview} source={chembackpic} />
        </View>

        <TouchableHighlight
          style={styles.exit}
          onPress={() => navigation.dispatch(StackActions.replace("Home"))}
        >
          <Image
            style={styles.fullview}
            source={require("../assets/backwardarrow.png")}
          />
        </TouchableHighlight>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: "20%" }}
        >
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(2001);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>1</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c2001}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(2002);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>2</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c2002}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(2003);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>3</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c2003}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(2004);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>4</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c2004}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(2005);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>5</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c2005}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <ImageBackground
            style={styles.modalContainer}
            source={require("../assets/chapstartback.png")}
          >
            <TouchableHighlight
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={styles.modalexit}
            >
              <Image
                style={styles.fullview}
                source={require("../assets/backwardarrow.png")}
              />
            </TouchableHighlight>

            <View style={styles.modalbox}>
              <View>
                <Text style={styles.modalchaptext}>
                  {chaptertext}: {cname}
                </Text>
              </View>

              <View style={styles.chapstartpicback}>
                <View style={styles.imageholder}>
                  <Image
                    style={styles.fullview}
                    source={require("../assets/chemichapstart.png")}
                  />
                </View>
              </View>

              <View style={styles.intro}>
                <Text style={styles.modalchaptext}>
                  {questiontext}: {qnum}
                  {"\n"}
                  {maxxptext}: {maxxp}
                </Text>
              </View>

              <View style={styles.start}>
                <TouchableOpacity onPress={direction} style={styles.startpress}>
                  <Text style={styles.modalchaptext}>{starttext}>></Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    );
  }

  if (fetch == "math1") {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image style={styles.fullview} source={mathbackpic} />
        </View>

        <TouchableHighlight
          style={styles.exit}
          onPress={() => navigation.dispatch(StackActions.replace("Home"))}
        >
          <Image
            style={styles.fullview}
            source={require("../assets/backwardarrow.png")}
          />
        </TouchableHighlight>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: "20%" }}
        >
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(301);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>1</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c301}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(302);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>2</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c302}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(303);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>3</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c303}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(304);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>4</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c304}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(305);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>5</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c305}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(306);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>6</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c306}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(307);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>7</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c307}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(308);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>8</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c308}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(309);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>9</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c309}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3010);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>10</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3010}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3011);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>Q</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3011}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <ImageBackground
            style={styles.modalContainer}
            source={require("../assets/chapstartback.png")}
          >
            <TouchableHighlight
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={styles.modalexit}
            >
              <Image
                style={styles.fullview}
                source={require("../assets/backwardarrow.png")}
              />
            </TouchableHighlight>

            <View style={styles.modalbox}>
              <View>
                <Text style={styles.modalchaptext}>
                  {chaptertext}: {cname}
                </Text>
              </View>

              <View style={styles.chapstartpicback}>
                <View style={styles.imageholder}>
                  <Image
                    style={styles.fullview}
                    source={require("../assets/mathchapstart.png")}
                  />
                </View>
              </View>

              <View style={styles.intro}>
                <Text style={styles.modalchaptext}>
                  {questiontext}: {qnum}
                  {"\n"}
                  {maxxptext}: {maxxp}
                </Text>
              </View>

              <View style={styles.start}>
                <TouchableOpacity onPress={direction} style={styles.startpress}>
                  <Text style={styles.modalchaptext}>{starttext}>></Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    );
  }

  if (fetch == "math2") {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image style={styles.fullview} source={mathbackpic} />
        </View>

        <TouchableHighlight
          style={styles.exit}
          onPress={() => navigation.dispatch(StackActions.replace("Home"))}
        >
          <Image
            style={styles.fullview}
            source={require("../assets/backwardarrow.png")}
          />
        </TouchableHighlight>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: "20%" }}
        >
          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3001);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>1</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3001}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3002);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>2</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3002}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3003);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>3</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3003}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3004);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>4</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3004}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3005);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>5</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3005}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3006);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>6</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3006}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3007);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>7</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3007}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3008);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>8</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3008}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(3009);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>9</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c3009}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chapbox}
            onPress={() => {
              setChapterno(30010);
              setIsModalVisible(true);
            }}
          >
            <View style={styles.numbox}>
              <Text style={styles.chaptext}>10</Text>
            </View>
            <View style={styles.namebox}>
              <Text style={styles.chapnametext}>{c30010}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <ImageBackground
            style={styles.modalContainer}
            source={require("../assets/chapstartback.png")}
          >
            <TouchableHighlight
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={styles.modalexit}
            >
              <Image
                style={styles.fullview}
                source={require("../assets/backwardarrow.png")}
              />
            </TouchableHighlight>

            <View style={styles.modalbox}>
              <View>
                <Text style={styles.modalchaptext}>
                  {chaptertext}: {cname}
                </Text>
              </View>

              <View style={styles.chapstartpicback}>
                <View style={styles.imageholder}>
                  <Image
                    style={styles.fullview}
                    source={require("../assets/mathchapstart.png")}
                  />
                </View>
              </View>

              <View style={styles.intro}>
                <Text style={styles.modalchaptext}>
                  {questiontext}: {qnum}
                  {"\n"}
                  {maxxptext}: {maxxp}
                </Text>
              </View>

              <View style={styles.start}>
                <TouchableOpacity onPress={direction} style={styles.startpress}>
                  <Text style={styles.modalchaptext}>{starttext}>></Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    );
  }

  return <View></View>;
}

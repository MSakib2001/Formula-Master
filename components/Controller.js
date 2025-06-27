import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  Platform,
  Dimensions,
} from "react-native";
import {
  NavigationContainer,
  StackActions,
  NavigationActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../components/Styles";
import {
  option1,
  option2,
  option3,
  option4,
  nextbutton,
  proofbutton,
  adButton,
} from "../components/Options";
import { holder, ui, save } from "./Holder";
import { banglaDigits } from "./Options";
import Constants from "expo-constants";
// import mobileAds, { MaxAdContentRating } from "react-native-google-mobile-ads";
// import {
//  GAMBannerAd,
//  BannerAdSize,
//  BannerAd,
//  TestIds,
// } from "react-native-google-mobile-ads";
import "react-native-gesture-handler";

let rightno;
let wrongno;
let press1;
let press2;
let press3;
let press4;
let next;
let picon;
let question;
let attribute;
let op1;
let op2;
let op3;
let op4;
let proof;
let pic;
let picproof;
let isdisable = true;
let prooftrigger;
let crossno;
let ads;

let randomFetchQno = [],
  randomFetchChap = [],
  randomOrder = [];

export default function Controller({ navigation }) {
  const [quizlimit, setQuizLimit] = useState(0);
  const [besttime, SetBestTime] = useState("");
  const [bestscore, SetBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [mins, setMins] = useState(0);
  const [n, setN] = useState(0);
  const [proofVisible, setProofVisible] = useState(false);
  const [exQuesVisible, setExQuesVisible] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [language, setLanguage] = useState(1);
  let showmins = Math.floor(mins / 60);
  let showsecs = timer;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [final, setFinal] = useState(false);
  const [adstimer, setAdstimer] = useState(true);
  const [finiteFlag, SetFiniteFlag] = useState(false);
  let tempminutes = "";
  let tempseconds = "";
  let scoresheet = {};
  let timesheet = {};

  /*  mobileAds().initialize().then(adapterStatuses => {
      // Initialization complete! 
    });  */
  // const adUnitId = __DEV__
  //  ? TestIds.BANNER
  // : "ca-app-pub-3940256099942544/6300978111";
  //Translation of numbers
  function translator(given) {
    let temptrans = "";
    for (let i = 0; i < given.length; i++) {
      temptrans += banglaDigits[given.charAt(i)];
    }
    return temptrans;
  }
  // CONVERTING TIMER & TICKS DEPENDING ON LANGUAGE

  if (showsecs >= 60 * n) {
    showsecs = showsecs - 60 * n;
  }
  let showminsstring = showmins.toString();
  let showsecsstring = showsecs.toString();

  function Convertermin() {
    for (let i = 0; i < showminsstring.length; i++) {
      tempminutes += banglaDigits[showminsstring.charAt(i)];
    }

    if (language == 1) {
      setMinutes(showmins);
    }
    if (language == 0) {
      setMinutes(tempminutes);
    }
    return 0;

    setSeconds(Math.floor(totalTimeinSec - minutes));
  }

  function Convertersec() {
    for (let i = 0; i < showsecsstring.length; i++) {
      tempseconds += banglaDigits[showsecsstring.charAt(i)];
    }

    if (language == 1) {
      setSeconds(showsecs);
    }
    if (language == 0) {
      setSeconds(tempseconds);
    }
    return 0;
  }

  let counter = setTimeout(() => {
    setN(n + 1);
  }, 60000);

  let timerId = setTimeout(() => {
    setTimer(timer + 1);
    Convertersec();
  }, 1000);

  let minsId = setTimeout(() => {
    setMins(mins + 1);
    Convertermin();
  }, 1000);

  //CORE ALGORITHM FOR Q&A

  const [qno, setQno] = useState(1);
  const [isRightAnswer, setisRightAnswer] = useState(0);
  next = function Next() {
    setQno(qno + 1), setisRightAnswer(0);
    isdisable = true;
  };
  prooftrigger = function Prooftrigger() {
    setProofVisible(true);
  };
  crossno = qno - 1 - score;
  if (crossno < 0) {
    crossno = 0;
  }

  let rightansno;
  let wrongansno;

  let temprightansno = "";
  let tempwrongansno = "";

  let scorestring = score.toString();
  let crossnostring = crossno.toString();

  for (let i = 0; i < scorestring.length; i++) {
    temprightansno += banglaDigits[scorestring.charAt(i)];
  }

  for (let i = 0; i < crossnostring.length; i++) {
    tempwrongansno += banglaDigits[crossnostring.charAt(i)];
  }

  if (isRightAnswer == 0) {
    isdisable = true;

    if (isdisable == true) {
      nextbutton.backgroundColor = "grey";
      proofbutton.backgroundColor = "grey";
    }

    option1.backgroundColor = "#303D4E";
    option2.backgroundColor = "#303D4E";
    option3.backgroundColor = "#303D4E";
    option4.backgroundColor = "#303D4E";
  }

  function Lighting() {
    isdisable = false;
    if (isdisable == false) {
      nextbutton.backgroundColor = "#5468FF";
      proofbutton.backgroundColor = "#5468FF";
    }

    rightno.backgroundColor = "#10AB6D";
    wrongno = [option1, option2, option3, option4];

    for (let j = 0; j < wrongno.length; j++) {
      if (wrongno[j] === rightno) {
        wrongno.splice(j, 1);
        j--;
      }
    }

    for (let i = 0; i < 3; i++) {
      wrongno[i].backgroundColor = "#B13636";
    }

    return 0;
  }

  if (isRightAnswer == 1) {
    Lighting();
  }

  function Link() {
    if (rightno == option1) {
      press1 = function Press1() {
        setisRightAnswer(1);
        setScore(score + 1);
      };
      press2 = function Press2() {
        setisRightAnswer(1);
      };
      press3 = function Press3() {
        setisRightAnswer(1);
      };
      press4 = function Press4() {
        setisRightAnswer(1);
      };
    }

    if (rightno == option2) {
      press1 = function Press1() {
        setisRightAnswer(1);
      };
      press2 = function Press2() {
        setisRightAnswer(1);
        setScore(score + 1);
      };
      press3 = function Press3() {
        setisRightAnswer(1);
      };
      press4 = function Press4() {
        setisRightAnswer(1);
      };
    }

    if (rightno == option3) {
      press1 = function Press1() {
        setisRightAnswer(1);
      };
      press2 = function Press2() {
        setisRightAnswer(1);
      };
      press3 = function Press3() {
        setisRightAnswer(1);
        setScore(score + 1);
      };
      press4 = function Press4() {
        setisRightAnswer(1);
      };
    }

    if (rightno == option4) {
      press1 = function Press1() {
        setisRightAnswer(1);
      };
      press2 = function Press2() {
        setisRightAnswer(1);
      };
      press3 = function Press3() {
        setisRightAnswer(1);
      };
      press4 = function Press4() {
        setisRightAnswer(1);
        setScore(score + 1);
      };
    }
    return 0;
  }

  //RETREIVING LANGUAGE & CHAPTER NO INFO FROM SAVED STORAGE

  AsyncStorage.getItem("chno").then((value) => {
    value = JSON.parse(value);

    setChapter(value);
  });

  AsyncStorage.getItem("langholder").then((value) => {
    value = JSON.parse(value);

    setLanguage(value);
  });

  //Randomize for quiz
  const seed = new Date().getTime();
  Math.random(seed);

  function getRandomNumbersInRange(
    start,
    end,
    count,
    seed = new Date().getTime()
  ) {
    const range = end - start + 1;
    if (range < count) {
      throw new Error("Range must be greater than or equal to count");
    }
    const numbers = [];
    while (numbers.length < count) {
      const randomNum = Math.floor(Math.random(seed) * range) + start;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
      seed++;
    }
    return numbers;
  }
  function repeatValue(value, numTimes) {
    let arr = [];
    for (let i = 0; i < numTimes; i++) {
      arr.push(value);
    }
    return arr;
  }

  let physics1stChapLimits = [14, 21, 31, 26, 16, 20, 16, 13, 11, 13];
  let physics1stQuesLimits = [1, 3, 3, 3, 2, 3, 1, 1, 1, 3];
  let chemistry1stChapLimits = [5, 11, 10, 18, 17];
  let chemistry1stQuesLimits = [2, 5, 4, 5, 5];
  let math1stChapLimits = [6, 15, 27, 12, 7, 27, 26, 12, 25, 22];
  let math1stQuesLimits = [1, 2, 3, 2, 1, 2, 2, 1, 3, 4];

  while (randomOrder.length < 21) {
    // 20 t = the number of unique random numbers you want to generate
    let num = Math.floor(Math.random() * 21); // Generate a random number between 1 and 19
    if (!randomOrder.includes(num)) {
      // Check if the number is already in the array
      randomOrder.push(num); // Add the number to the array if it's not already in there
    }
  }

  if (chapter == 1011) {
    //Physics1st quiz

    for (i = 0; i < physics1stChapLimits.length; i++) {
      let temp;
      temp = getRandomNumbersInRange(
        1,
        physics1stChapLimits[i],
        physics1stQuesLimits[i],
        i
      );
      randomFetchQno = randomFetchQno.concat(temp);
    }
    for (i = 0; i < physics1stQuesLimits.length; i++) {
      let temp = Number("10" + (i + 1));
      let temparray = repeatValue(temp, physics1stQuesLimits[i]);
      randomFetchChap = randomFetchChap.concat(temparray);
    }
  } else if (chapter == 206) {
    //Chemistry1st quiz
    for (i = 0; i < chemistry1stChapLimits.length; i++) {
      let temp;
      temp = getRandomNumbersInRange(
        1,
        chemistry1stChapLimits[i],
        chemistry1stQuesLimits[i],
        i
      );
      randomFetchQno = randomFetchQno.concat(temp);
    }
    for (i = 0; i < chemistry1stQuesLimits.length; i++) {
      let temp = Number("20" + (i + 1));
      let temparray = repeatValue(temp, chemistry1stQuesLimits[i]);
      randomFetchChap = randomFetchChap.concat(temparray);
    }
  } else if (chapter == 3011) {
    //math1st quiz
    for (i = 0; i < math1stChapLimits.length; i++) {
      let temp;
      temp = getRandomNumbersInRange(
        1,
        math1stChapLimits[i],
        math1stQuesLimits[i],
        i
      );
      randomFetchQno = randomFetchQno.concat(temp);
    }
    for (i = 0; i < math1stQuesLimits.length; i++) {
      let temp = Number("30" + (i + 1));
      let temparray = repeatValue(temp, math1stQuesLimits[i]);
      randomFetchChap = randomFetchChap.concat(temparray);
    }
  }

  //FETCHING DATA

  // Physics1st = 10(1..)  Chemistry1st = 20(1..)    Math1st = 30(1..)
  // Physics2nd = 100(1..)  Chemistry2nd = 200(1..)    Math2nd = 300(1..)

  let total;
  let totalshow;
  let temptotal = "";
  let xplang;
  let prooflang;
  let oflang;
  let oklang;
  let exitlang;
  let retrylang;
  let continuelang;
  let backtrigger = function Nav() {
    (randomFetchChap.length = 0),
      (randomFetchQno.length = 0),
      (randomOrder.length = 0),
      navigation.dispatch(StackActions.replace("Chapters"));
  };
  let showfinalpagetext1;
  let showfinalpagetext2;
  let finalpagetext1;
  let finalpagetext2;
  let sadfinalpagetext1;
  let sadfinalpagetext2;
  let adslang;
  let soonlang;
  let finaltrigger = "Home";
  // let fetch = "l" + language + "c" + chapter + "q" + qno;
  let uifetch = "l" + language;
  let fetch;

  let quizFlag = false;

  function Data(flag) {
    quizFlag = flag;
    if (!quizFlag) {
      fetch = "l" + language + "c" + chapter + "q" + qno;
    } else if (quizFlag) {
      fetch =
        "l" +
        language +
        "c" +
        randomFetchChap[randomOrder[qno - 1]] +
        "q" +
        randomFetchQno[randomOrder[qno - 1]];
      //fetch = "l" + language + "c" + randomFetchChap[qno-1] + "q" + randomFetchQno[qno-1];
    }

    rightno = holder[fetch].rightno;
    question = holder[fetch].question;
    attribute = holder[fetch].attribute;
    op1 = holder[fetch].op1;
    op2 = holder[fetch].op2;
    op3 = holder[fetch].op3;
    op4 = holder[fetch].op4;
    proof = holder[fetch].proof;
    pic = holder[fetch].pic;
    picon = function Picon() {
      setExQuesVisible(holder[fetch].picon);
    };
    picproof = holder[fetch].picproof;
    prooflang = ui[uifetch].prooflang;
    continuelang = ui[uifetch].continuelang;
    xplang = ui[uifetch].xptexts;
    oflang = ui[uifetch].oflang;
    oklang = ui[uifetch].oklang;
    exitlang = ui[uifetch].exitlang;
    retrylang = ui[uifetch].retrylang;
    finalpagetext1 = ui[uifetch].finalpagetext1;
    finalpagetext2 = ui[uifetch].finalpagetext2;
    sadfinalpagetext1 = ui[uifetch].sadfinalpagetext1;
    sadfinalpagetext2 = ui[uifetch].sadfinalpagetext2;
    adslang = ui[uifetch].adslang;

    let totalstring = total.toString();

    for (let i = 0; i < totalstring.length; i++) {
      temptotal += banglaDigits[totalstring.charAt(i)];
    }

    if (language == 1) {
      rightansno = score;
      wrongansno = crossno;
      totalshow = total;
    }
    if (language == 0) {
      rightansno = temprightansno;
      wrongansno = tempwrongansno;
      totalshow = temptotal;
    }

    return 0;
  }

  switch (chapter) {
    case 101:
      ads = false;
      total = 14;
      Data(false);
      Link();

      break;
    case 102:
      ads = false;
      total = 21;
      Data(false);
      Link();

      break;
    case 103:
      ads = false;
      total = 31;
      Data(false);
      Link();

      break;
    case 104:
      ads = false;
      total = 26;
      Data(false);
      Link();

      break;
    case 105:
      ads = false;
      total = 16;
      Data(false);
      Link();

      break;
    case 106:
      ads = false;
      total = 20;
      Data(false);
      Link();

      break;
    case 107:
      ads = false;
      total = 16;
      Data(false);
      Link();

      break;
    case 108:
      ads = false;
      total = 13;
      Data(false);
      Link();

      break;
    case 109:
      ads = false;
      total = 11;
      Data(false);
      Link();

      break;
    case 1010:
      ads = false;
      total = 13;
      Data(false);
      Link();

      break;
    case 1011: // QUIZ MASTER(Physics 1st)
      ads = false;
      total = 20;
      Data(true);
      Link();

      break;
    case 201:
      ads = false;
      total = 5;
      Data(false);
      Link();

      break;
    case 202:
      ads = false;
      total = 11;
      Data(false);
      Link();

      break;
    case 203:
      ads = false;
      total = 10;
      Data(false);
      Link();

      break;
    case 204:
      ads = false;
      total = 18;
      Data(false);
      Link();

      break;
    case 205:
      ads = false;
      total = 17;
      Data(false);
      Link();

      break;
    case 206:
      ads = false;
      total = 20;
      Data(true);
      Link();

      break;
    case 301:
      ads = false;
      total = 6;
      Data(false);
      Link();

      break;
    case 302:
      ads = false;
      total = 15;
      Data(false);
      Link();

      break;
    case 303:
      ads = false;
      total = 27;
      Data(false);
      Link();

      break;
    case 304:
      ads = false;
      total = 12;
      Data(false);
      Link();

      break;
    case 305:
      ads = false;
      total = 7;
      Data(false);
      Link();

      break;
    case 306:
      ads = false;
      total = 27;
      Data(false);
      Link();

      break;
    case 307:
      ads = false;
      total = 26;
      Data(false);
      Link();

      break;
    case 308:
      ads = false;
      total = 12;
      Data(false);
      Link();

      break;
    case 309:
      ads = false;
      total = 25;
      Data(false);
      Link();

      break;
    case 3010:
      ads = false;
      total = 22;
      Data(false);
      Link();

      break;
    case 3011:
      ads = false;
      total = 20;
      Data(true);
      Link();

      /* ---- ENTRY BY HRIDDHO ---- */

      break;
    case 3001:
      ads = false;
      total = 12;
      Data(false);
      Link();

      /*  break
    case 3002:
      ads = false;
      total = ;
      Data(false);
      Link();  */

      break;
    case 3003:
      ads = false;
      total = 17;
      Data(false);
      Link();

      break;
    case 3004:
      ads = false;
      total = 11;
      Data(false);
      Link();

      break;
    case 3005:
      ads = false;
      total = 16;
      Data(false);
      Link();

      break;
    case 3006:
      ads = false;
      total = 47;
      Data(false);
      Link();

      break;
    case 3007:
      ads = false;
      total = 24;
      Data(false);
      Link();

      /*   break;
    case 3008:
      ads = false;
      total = ;
      Data(false);
      Link();  */

      break;
    case 3009:
      ads = false;
      total = 33;
      Data(false);
      Link();

      break;
    case 3010:
      ads = false;
      total = 22;
      Data(false);
      Link();

      /* ---- ENTRY BY HRIDDHO ENDS HERE ---- */

      break;
    default:
      ads = false;
      oklang = ui[uifetch].oklang;
      soonlang = ui[uifetch].soonlang;
      return (
        <View
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            justifyContent: "center",
            top: "0%",
            backgroundColor: "#1D293A",
          }}
        >
          <View>
            <Text style={styles.oktext}>{soonlang}!</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginTop: "50%",
              backgroundColor: "#1D293A",
            }}
          ></View>
          <TouchableOpacity
            style={styles.okButtonProof}
            onPress={() => {
              navigation.dispatch(StackActions.replace(finaltrigger));
            }}
          >
            <Text style={styles.oktext}>{oklang}!</Text>
          </TouchableOpacity>
        </View>
      );
  }

  if (qno > total) {
    //final = true
    ads = true;
  }

  if (final == true) {
    adButton.backgroundColor = "#C5D4E7";
    let xpChange;
    let bdtempxpchange = "";
    let tempxpchange = "";
    let xpchangeshow;
    let percent = Math.round((score / total) * 100);
    let percentshow;
    let temppercent = "";
    let percentstring = percent.toString();

    for (let i = 0; i < percentstring.length; i++) {
      temppercent += banglaDigits[percentstring.charAt(i)];
    }

    if (language == 1) {
      percentshow = percent;
    }
    if (language == 0) {
      percentshow = temppercent;
    }

    if (percent >= 0 && percent <= 10) {
      xpChange = -5;
      bdtempxpchange = "-৫";
    }
    if (percent > 10 && percent <= 20) {
      xpChange = -4;
      bdtempxpchange = "-৪";
    }
    if (percent > 20 && percent <= 30) {
      xpChange = -3;
      bdtempxpchange = "-৩";
    }
    if (percent > 30 && percent <= 40) {
      xpChange = -2;
      bdtempxpchange = "-২";
    }
    if (percent > 40 && percent <= 50) {
      xpChange = -1;
      bdtempxpchange = "-১";
    }
    if (percent > 50 && percent <= 60) {
      xpChange = 1;
    }
    if (percent > 60 && percent <= 70) {
      xpChange = 2;
    }
    if (percent > 70 && percent <= 80) {
      xpChange = 3;
    }
    if (percent > 80 && percent <= 90) {
      xpChange = 4;
    }
    if (percent > 90 && percent <= 100) {
      xpChange = 5;
    }

    let xpchangestring = xpChange.toString();

    for (let i = 0; i < xpchangestring.length; i++) {
      tempxpchange += banglaDigits[xpchangestring.charAt(i)];
    }

    if (language == 1) {
      xpchangeshow = xpChange;
    }
    if (language == 0 && percent > 50) {
      xpchangeshow = tempxpchange;
    }
    if (language == 0 && percent <= 50) {
      xpchangeshow = bdtempxpchange;
    }

    if (percent <= 50) {
      showfinalpagetext1 = sadfinalpagetext1;
      showfinalpagetext2 = sadfinalpagetext2;
    }
    if (percent > 50) {
      showfinalpagetext1 = finalpagetext1;
      showfinalpagetext2 = finalpagetext2;
    }

    let xpcounter = function xpCount() {
      AsyncStorage.getItem("quizlimit").then((value) => {
        value = JSON.parse(value);
        //console.log(value);
        let savedtime = Number(value);
        const currentTimeInHours = Math.floor(new Date().getTime() / 3600000);
        // console.log("Current:"+currentTimeInHours); // Output the current time in hours
        let check = currentTimeInHours - savedtime;
        //console.log(check);

        if (check >= 12) {
          console.log("12 H pass");
          //if 12H have passed
          if (chapter == 1011 || chapter == 206 || chapter == 3011) {
            AsyncStorage.getItem("quizxp").then((value) => {
              value = JSON.parse(value);
              //console.log("Medal add");
              AsyncStorage.setItem(
                "quizlimit",
                JSON.stringify(Math.floor(new Date().getTime() / 3600000))
              );
              const update2 = Number(value) + xpChange;
              AsyncStorage.setItem("quizxp", JSON.stringify(update2)).then(
                (value) => {
                  navigation.dispatch(StackActions.replace(finaltrigger));
                }
              );
            });
          } else {
            AsyncStorage.getItem("xp").then((value) => {
              value = JSON.parse(value);
              //console.log("xp add");
              setAdstimer(false);

              const update = Number(value) + xpChange;
              randomFetchChap.length = 0;
              randomFetchQno.length = 0;
              randomOrder.length = 0; // Reset Random arrays

              AsyncStorage.setItem("xp", JSON.stringify(update)).then(
                (value) => {
                  navigation.dispatch(StackActions.replace(finaltrigger));
                }
              );

              //AsyncStorage.removeItem('chno').then((value)=>{setChapter(value)});
            });
          }
        } else {
          //if 12H have not passed
          //console.log("12 H not pass");
          AsyncStorage.getItem("xp").then((value) => {
            value = JSON.parse(value);

            setAdstimer(false);

            const update = Number(value) + xpChange;
            randomFetchChap.length = 0;
            randomFetchQno.length = 0;
            randomOrder.length = 0; // Reset Random arrays

            AsyncStorage.setItem("xp", JSON.stringify(update)).then((value) => {
              navigation.dispatch(StackActions.replace(finaltrigger));
            });

            //AsyncStorage.removeItem('chno').then((value)=>{setChapter(value)});
          });
        }
      });

      return 0;
    };

    let retry = function Retry() {
      AsyncStorage.getItem("quizlimit").then((value) => {
        value = JSON.parse(value);
        // console.log(value);
        let savedtime = Number(value);
        const currentTimeInHours = Math.floor(new Date().getTime() / 3600000);
        // console.log("Current:"+currentTimeInHours); // Output the current time in hours
        let check = currentTimeInHours - savedtime;
        // console.log("Check"+check);

        if (check >= 12) {
          // console.log("12 H pass");
          //if 12H have passed
          if (chapter == 1011 || chapter == 206 || chapter == 3011) {
            AsyncStorage.getItem("quizxp").then((value) => {
              value = JSON.parse(value);
              // console.log("Medal add");
              const update2 = Number(value) + xpChange;
              AsyncStorage.setItem("quizxp", JSON.stringify(update2)).then(
                (value) => {
                  navigation.dispatch(StackActions.replace("Controller"));
                }
              );
              AsyncStorage.setItem(
                "quizlimit",
                JSON.stringify(Math.floor(new Date().getTime() / 3600000))
              );
            });
          } else {
            AsyncStorage.getItem("xp").then((value) => {
              value = JSON.parse(value);
              //console.log("xp add");
              setAdstimer(false);

              const update = Number(value) + xpChange;
              randomFetchChap.length = 0;
              randomFetchQno.length = 0;
              randomOrder.length = 0; // Reset Random arrays

              AsyncStorage.setItem("xp", JSON.stringify(update)).then(
                (value) => {
                  navigation.dispatch(StackActions.replace("Controller"));
                }
              );

              //AsyncStorage.removeItem('chno').then((value)=>{setChapter(value)});
            });
          }
        } else {
          //if 12H have not passed
          // console.log("12 H not pass");
          AsyncStorage.getItem("xp").then((value) => {
            value = JSON.parse(value);

            setAdstimer(false);

            const update = Number(value) + xpChange;
            randomFetchChap.length = 0;
            randomFetchQno.length = 0;
            randomOrder.length = 0; // Reset Random arrays

            AsyncStorage.setItem("xp", JSON.stringify(update)).then((value) => {
              navigation.dispatch(StackActions.replace("Controller"));
            });

            //AsyncStorage.removeItem('chno').then((value)=>{setChapter(value)});
          });
        }
      });
    };

    let finalmin, finalsec;
    let totalTimeinSec = showmins * 60 + showsecs;
    (finalmin = Math.floor(totalTimeinSec / 60)),
      (finalsec = Math.floor(totalTimeinSec - finalmin * 60));

    if (language == 0) {
      finalmin = translator(finalmin.toString());
      finalsec = translator(finalsec.toString());
    }

    //accessing saved best scores
    let chapterString = `chapter${chapter}`;
    let timeString = `time${chapter}`;
    //AsyncStorage.removeItem('savescoreSheet');

    //Retrieve and show time only function
    let timeshow = "";

    if (!timesheet[timeString]) {
      AsyncStorage.getItem("savetimesheet").then((value) => {
        value = JSON.parse(value);
        if (value != null) {
          let timedata = value[timeString];

          let bestmin = Math.floor(timedata / 60);
          let bestsec = Math.floor(timedata - bestmin * 60);

          let holdmin = bestmin.toString();
          let bangmin = translator(holdmin);
          let holdsec = bestsec.toString();
          let bangsec = translator(holdsec);

          language == 0
            ? (timeshow = bangmin.toString() + ":" + bangsec.toString())
            : (timeshow = bestmin.toString() + ":" + bestsec.toString());
        }
      });
    }

    AsyncStorage.getItem("savescoreSheet").then((value) => {
      //console.log(scoresheet);
      if (value != null) {
        value = JSON.parse(value);
        // console.log (value);
        scoresheet = value;
        if (scoresheet && scoresheet[chapterString] > percent) {
          if (language == 0) {
            let hold = scoresheet[chapterString];

            let temp = hold.toString();
            let trans = translator(temp);
            SetBestScore(trans);
          } else {
            SetBestScore(scoresheet[chapterString]);
          }

          SetBestTime(timeshow);
        } else if (scoresheet && scoresheet[chapterString] == percent) {
          SetBestScore(percentshow);
          scoresheet[chapterString] = percent;
          AsyncStorage.setItem("savescoreSheet", JSON.stringify(scoresheet));

          //accessing saved best times

          //AsyncStorage.removeItem('savetimesheet');

          AsyncStorage.getItem("savetimesheet").then((value) => {
            if (value != null) {
              value = JSON.parse(value);
              timesheet = value;

              let temptime = timesheet[timeString];

              let bestmin = Math.floor(temptime / 60);
              let bestsec = Math.floor(temptime - bestmin * 60);
              let holdmin = bestmin.toString();
              let bangmin = translator(holdmin);
              let holdsec = bestsec.toString();
              let bangsec = translator(holdsec);

              if (timesheet && timesheet[timeString] < totalTimeinSec) {
                //delete timesheet[timeString];

                if (language == 0) {
                  SetBestTime(bangmin.toString() + ":" + bangsec.toString());
                } else {
                  SetBestTime(bestmin.toString() + ":" + bestsec.toString());
                }
              } else {
                // delete timesheet[timeString];

                language == 0
                  ? SetBestTime(bangmin.toString() + ":" + bangsec.toString())
                  : SetBestTime(
                      finalmin.toString() + ":" + finalsec.toString()
                    );
                // SetBestTime(minutes.toString()+":"+seconds.toString());
                timesheet[timeString] = totalTimeinSec;
                AsyncStorage.setItem(
                  "savetimesheet",
                  JSON.stringify(timesheet)
                );
              }
            } else {
              timesheet[timeString] = totalTimeinSec;
              AsyncStorage.setItem("savetimesheet", JSON.stringify(timesheet));
              SetBestTime(finalmin.toString() + ":" + finalsec.toString());
            }
          });
        } else {
          SetBestScore(percentshow);
          scoresheet[chapterString] = percent;
          AsyncStorage.setItem("savescoreSheet", JSON.stringify(scoresheet));

          //update best time

          AsyncStorage.getItem("savetimesheet").then((value) => {
            value = JSON.parse(value);
            timesheet = value;
            timesheet[timeString] = totalTimeinSec;
            AsyncStorage.setItem("savetimesheet", JSON.stringify(timesheet));

            //}
          });
        }
      } else {
        SetBestScore(percentshow);
        scoresheet[chapterString] = percent;
        AsyncStorage.setItem("savescoreSheet", JSON.stringify(scoresheet));
      }
    });

    clearTimeout(minsId);
    clearTimeout(timerId);
    clearTimeout(counter);
    return (
      <View style={styles.finalcontainer}>
        <ImageBackground
          style={styles.finalbackgroundImage}
          source={require("../assets/congoback.png")}
        >
          <View style={styles.finaltimer}>
            <View style={styles.clockicon}>
              <Image
                style={styles.fullview}
                source={require("../assets/clock.png")}
              />
            </View>
            <View style={styles.timertextbox}>
              <Text style={styles.finaltimertext}>
                {finalmin}:{finalsec}/{"\n"}
                {besttime}
              </Text>
            </View>
          </View>

          <View style={styles.progressbar}>
            <View style={styles.tickfinal}>
              <Image
                style={styles.fullview}
                source={require("../assets/finaltick.png")}
              />
            </View>

            <View style={styles.midview}>
              <Text style={styles.midtext}>
                {percentshow}%{bestscore}%
              </Text>
              <Text style={styles.smallshowtext}>
                {rightansno} {oflang} {totalshow}
              </Text>
            </View>

            <View style={styles.xpshow}>
              <Text style={styles.xpshowtext}>
                + {xpchangeshow} {xplang}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.jobtext}>{showfinalpagetext1}!</Text>

            <Text style={styles.lasttext}>{showfinalpagetext2}!</Text>
          </View>

          <View style={styles.finalfooter}>
            <TouchableOpacity style={styles.exitdiv1} onPress={xpcounter}>
              <View style={styles.finalfooterimagediv}>
                <Image
                  style={styles.fullview}
                  source={require("../assets/exiticon.png")}
                />
              </View>
              <View style={styles.finalfootertextdiv}>
                <Text style={styles.finalfootertext}>{exitlang}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exitdiv2} onPress={retry}>
              <View style={styles.finalfooterimagediv}>
                <Image
                  style={styles.fullview}
                  source={require("../assets/retryicon.png")}
                />
              </View>
              <View style={styles.finalfootertextdiv}>
                <Text style={styles.finalfootertext}>{retrylang}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }

  if (adstimer == false) {
    adButton.backgroundColor = "#2994FF";
  }
  // Load Ads manager

  if (ads == true) {
    clearTimeout(minsId);
    clearTimeout(timerId);
    clearTimeout(counter);
    //setAdstimer(true);

    let adscounter = setTimeout(() => {
      setAdstimer(false);
    }, 5000);
    //clearTimeout(adscounter);
    return (
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          justifyContent: "center",
          top: "0%",
          backgroundColor: "#1D293A",
        }}
      >
        <View>
          <Text style={styles.oktext}>{adslang}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "10%",
            backgroundColor: "#1D293A",
          }}
        >
          <View>
            {/*<BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    /> */}
          </View>

          <TouchableOpacity
            style={adButton}
            disabled={adstimer}
            onPress={() => {
              setFinal(true);
            }}
          >
            <Text style={styles.oktext}>{oklang}!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //Reset Random arrays at backtrigger

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/mainback.png")}
      >
        <TouchableHighlight style={styles.exit} onPress={backtrigger}>
          <Image
            style={styles.fullview}
            source={require("../assets/backwardarrow.png")}
          />
        </TouchableHighlight>

        <View style={styles.header}>
          <View style={styles.greentickbox}>
            <View style={styles.tick}>
              <Image
                style={styles.fullview}
                source={require("../assets/greentick.png")}
              />
            </View>
            <View style={styles.ticktextbox}>
              <Text style={styles.ticktext}>{rightansno}</Text>
            </View>
          </View>

          <View style={styles.redtickbox}>
            <View style={styles.tick}>
              <Image
                style={styles.fullview}
                source={require("../assets/redtick.png")}
              />
            </View>
            <View style={styles.ticktextbox}>
              <Text style={styles.ticktext}>{wrongansno}</Text>
            </View>
          </View>

          <View style={styles.clockbox}>
            <View style={styles.clock}>
              <Image
                style={styles.fullview}
                source={require("../assets/clock.png")}
              />
            </View>
            <View style={styles.ticktextbox}>
              <Text style={styles.timerticktext}>
                {minutes}:{seconds}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={proofbutton}
            disabled={isdisable}
            onPress={prooftrigger}
          >
            <Text style={styles.proofbuttontext}>{prooflang}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.questionpanel} onPress={picon}>
          <Text style={styles.questiontext}>{question}</Text>
        </TouchableOpacity>

        <View style={styles.attributebox}>
          <Text style={styles.attributetext}>[ {attribute} ]</Text>
        </View>

        <View style={styles.answerpanel}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={{ paddingBottom: "20%" }}
          >
            <TouchableOpacity style={option1} onPress={press1}>
              <Text style={styles.questiontext}>(A)</Text>
              <Text style={styles.questiontext}>{op1}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={option2} onPress={press2}>
              <Text style={styles.questiontext}>(B)</Text>
              <Text style={styles.questiontext}>{op2}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={option3} onPress={press3}>
              <Text style={styles.questiontext}>(C)</Text>
              <Text style={styles.questiontext}>{op3}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={option4} onPress={press4}>
              <Text style={styles.questiontext}>(D)</Text>
              <Text style={styles.questiontext}>{op4}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>

      <TouchableOpacity style={nextbutton} disabled={isdisable} onPress={next}>
        <View style={styles.continuediv}>
          <Text style={styles.questiontext}>{continuelang}</Text>
        </View>
        <View style={styles.nextarrowdiv}>
          <Image
            style={styles.fullview}
            source={require("../assets/nextarrow.png")}
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={proofVisible}
        onRequestClose={() => {
          setProofVisible(false);
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ width: "100%", height: "30%" }}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              source={picproof}
            />
          </View>

          <ScrollView
            contentContainerStyle={{ paddingBottom: "50%" }}
            style={styles.proofbox}
          >
            <Text style={styles.proofText}>{proof}</Text>

            <TouchableOpacity
              style={styles.okButtonProof}
              onPress={() => {
                setProofVisible(false);
              }}
            >
              <Text style={styles.oktext}>{oklang}!</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={exQuesVisible}
        onRequestClose={() => {
          setExQuesVisible(false);
        }}
      >
        <View style={{ backgroundColor: "white" }}>
          <Image
            style={{ width: "100%", height: "80%", resizeMode: "contain" }}
            source={pic}
          />

          <TouchableOpacity
            style={styles.okButtonProof}
            onPress={() => {
              setExQuesVisible(false);
            }}
          >
            <Text style={styles.oktext}>{oklang}!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

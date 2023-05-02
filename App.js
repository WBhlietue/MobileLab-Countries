import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CountyData } from "./screen/CoutryData";
import data from "./data.json";
import { createDrawerNavigator } from "@react-navigation/drawer";

var userData = {};

const drawer = createDrawerNavigator();
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const stack = createNativeStackNavigator();
// const drawer = createDrawerNavigator();

const bottom = createBottomTabNavigator();
var navigate = null;

export function Navigate(name, option = {}) {
  navigate.navigate(name, option);
}

function Block(props) {
  const data = props.item;
  const languages = [];
  for (let x in data.languages) {
    languages.push(data.languages[x]);
  }
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={style.countryBox}
      onPress={() => {
        Navigate("Country", data);
      }}
    >
      <Image
        style={{ width: 40, minHeight: 20, resizeMode: "contain" }}
        source={data.flags.svg}
      ></Image>
      <Text style={style.name}>{data.name.common}</Text>
      <Text style={style.text}>Capital: {data.capital}</Text>
      <Text style={style.text}>Population: {data.population}</Text>
      <Text style={style.text}>Languages: {languages[0]}</Text>
    </TouchableOpacity>
  );
}

export function Main({ navigation }) {
  navigate = navigation;

  const [data, setData] = useState([]);
  if (data.length == 0) {
    fetch("https://restcountries.com/v3.1/all").then((res) => {
      res.json().then((datas) => {
        datas.sort(function (a, b) {
          if (a.name.common > b.name.common) {
            return 1;
          }
          return -1;
        });
        setData(datas);
      });
    });
  }
  return (
    <View style={style.container}>
      {/* <GetDrawer/> */}
      {data.length == 0 ? (
        <View></View>
      ) : (
        <FlatList data={data} renderItem={Block} numColumns={6}></FlatList>
      )}
    </View>
  );
}




export default function App() {
  var userName = "";
  var pass = "";
  const [isLogged, setLogged] = useState(false);
  function StackNav() {
    return  <stack.Navigator>
      <stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Country"
        component={CountyData}
        options={({ route }) => ({ title: route.params.name.common })}
      />
    </stack.Navigator>;
  }
  function Logout(){
    return <TouchableOpacity style={style.signButton} onPress={() => {
      setLogged(false)
    }}>
      <Text style={style.signBtnText}>Logout</Text>
    </TouchableOpacity>
  }
  function Login() {
    for (let i of data) {
      if (i.userName == userName && i.pass == pass) {
        userData={userName:userName}
        setLogged(true);

        return;
      }
    }
    alert("error");
  }
  if (isLogged)
    return (
      <NavigationContainer>
        <drawer.Navigator>
          <drawer.Screen
          options={{title:"hi " + userData.userName}}
            name="Main"
            component={StackNav}
          />
          <drawer.Screen
            name="Logout"
            component={Logout}
          />
        </drawer.Navigator>
      </NavigationContainer>
    );
  else {
    return (
      <View style={style.loginPanel}>
        <Text style={style.signTitle}>Sign</Text>
        <View style={style.signLI}>
          <Text style={style.signLabel}>User Name</Text>
          <TextInput
            style={style.signInput}
            onChangeText={(value) => {
              userName = value;
            }}
          ></TextInput>
        </View>
        <View style={style.signLI}>
          <Text style={style.signLabel}>Password</Text>
          <TextInput
            style={style.signInput}
            secureTextEntry
            onChangeText={(value) => {
              pass = value;
            }}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={style.signButton}
          onPress={() => {
            Login();
          }}
        >
          <Text style={style.signBtnText}>Login</Text>{" "}
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  countryBox: {
    width: 200,
    height: 250,
    backgroundColor: "#cccccc",
    borderRadius: 20,
    margin: 20,
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 20,
    margin: 10,
  },
  text: {},
  loginPanel: {
    height: height * 0.35,
    width: height * 0.5,
    backgroundColor: "aqua",
    borderRadius: 30,
    left: width / 2 - height * 0.25,
    top: (height * (1 - 0.35)) / 2,
    paddingHorizontal: 50,
  },
  signTitle: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  signLabel: {
    flex: 1,
  },
  signLI: {
    flexDirection: "row",
    margin: 10,
  },
  signInput: {
    flex: 2,
    backgroundColor: "white",
  },
  signButton: {
    alignSelf: "center",
    width: height * 0.2,
    height: height * 0.07,
    backgroundColor: "#0000ff",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 30,
  },
  signBtnText: {
    color: "#ffffff",
    fontSize: 30,
  },
});

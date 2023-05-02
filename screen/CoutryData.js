import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import App, { Main } from "../App";

const bottom = createBottomTabNavigator();
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
var data;
function V(props) {
  let languages = "";
  for (let i in data.languages) {
    languages += data.languages[i] + " ";
  }
  let border = "";
  for (let i in data.borders) {
    border += data.borders[i] + " ";
  }
  return (
    <View>
      <Text style={style.name}>{data.name.common}</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: -50 }}
      >
        <Image source={data.flags.svg} style={style.img} />
        <View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Capital:</Text>
            <Text style={[style.column, style.text]}>{data.capital}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Population:</Text>
            <Text style={[style.column, style.text]}>{data.population}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Languages</Text>
            <Text style={[style.column, style.text]}>{languages}</Text>
          </View>

          <View style={style.row}>
            <Text style={[style.column, style.text]}>Continents:</Text>
            <Text style={[style.column, style.text]}>{data.continents}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Area:</Text>
            <Text style={[style.column, style.text]}>{data.area}km2</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Borders:</Text>
            <Text style={[style.column, style.text]}>{border}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Fifa:</Text>
            <Text style={[style.column, style.text]}>{data.fifa}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Region:</Text>
            <Text style={[style.column, style.text]}>{data.region}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Start of Week:</Text>
            <Text style={[style.column, style.text]}>{data.startOfWeek}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Subregion:</Text>
            <Text style={[style.column, style.text]}>{data.subregion}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Timezones:</Text>
            <Text style={[style.column, style.text]}>{data.timezones}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Tld</Text>
            <Text style={[style.column, style.text]}>{data.tld}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function V2(props) {
  let languages = "";
  for (let i in data.languages) {
    languages += data.languages[i] + " ";
  }
  let border = "";
  for (let i in data.borders) {
    border += data.borders[i] + " ";
  }
  return (
    <View>
      <Text style={style.name}>{data.name.common}</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: -50 }}
      >
        <Image source={data.flags.png} style={style.img} />
        <View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Capital:</Text>
            <Text style={[style.column, style.text]}>{data.capital}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Population:</Text>
            <Text style={[style.column, style.text]}>{data.population}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Languages</Text>
            <Text style={[style.column, style.text]}>{languages}</Text>
          </View>

          <View style={style.row}>
            <Text style={[style.column, style.text]}>Continents:</Text>
            <Text style={[style.column, style.text]}>{data.continents}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Area:</Text>
            <Text style={[style.column, style.text]}>{data.area}km2</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Borders:</Text>
            <Text style={[style.column, style.text]}>{border}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Fifa:</Text>
            <Text style={[style.column, style.text]}>{data.fifa}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Region:</Text>
            <Text style={[style.column, style.text]}>{data.region}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Start of Week:</Text>
            <Text style={[style.column, style.text]}>{data.startOfWeek}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Subregion:</Text>
            <Text style={[style.column, style.text]}>{data.subregion}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Timezones:</Text>
            <Text style={[style.column, style.text]}>{data.timezones}</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.column, style.text]}>Tld</Text>
            <Text style={[style.column, style.text]}>{data.tld}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}



export function CountyData(props) {
  console.log(props);
  data = props.route.params;
  return (
    <bottom.Navigator>
      <bottom.Screen
        name="SVG"
        component={V}
        options={{ headerShown: false }}
      ></bottom.Screen>
      <bottom.Screen
        name="PNG"
        component={V2}
        options={{ headerShown: false }}
      ></bottom.Screen>
    </bottom.Navigator>
  );
}
const style = StyleSheet.create({
  img: {
    width: width * 0.4,
    height: width * 0.4,
    justifyContent: "center",
    margin: 20,
    resizeMode: "contain",
  },
  name: {
    fontSize: 40,
    margin: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    width: width * 0.5,
  },
  column: {
    minWidth: 120,
    marginLeft: 20,
  },
});

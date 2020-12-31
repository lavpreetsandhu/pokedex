import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
import { FlatList } from "react-native-gesture-handler";
class Pokedex extends Component {
  constructor(props) {
    super(props);
  }
  state={
    loading:true
  }
  render() {
    const { item } = this.props.route.params;
       return (
        
      <ScrollView>
        <LinearGradient
          colors={["#eecda3", "#ef629f"]}
          start={[0.1, 0.5]}
          style={{
            width: "100%",
            opacity: 0.95,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 200, width: 200, alignSelf: "center" }}
            source={{ uri: item.url }}
          />
        </LinearGradient>
        <SafeAreaView style={{ marginBottom: 20, marginHorizontal: 6 }}>
          <Text style={styles.headingStyle}>Description</Text>
          <Text style={{textAlign:'justify'}}>{item.description}</Text>
          <Text style={styles.headingStyle}>Height</Text>
          <Text>{item.height / 10}m</Text>
          <Text style={styles.headingStyle}>Weight</Text>
          <Text>{item.weight}kg</Text>
          <Text style={styles.anotherHeading}>Egg Groups</Text>
          <SafeAreaView style={{ flex: 1, flexDirection: "row" }}>
            <FlatList
              data={item.EggGroups}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "flex-start" }}
              renderItem={({ item }) => (
                <SafeAreaView
                  style={{
                    width: 150,
                    height: 35,
                    backgroundColor: "black",
                    borderRadius: 6,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>{item}</Text>
                </SafeAreaView>
              )}
            />
          </SafeAreaView>
          <Text style={styles.anotherHeading}>Catch Rate</Text>
          <Progress.Bar
            borderRadius={8}
            // animationType={timing}
            // animated={true}
            progress={item.catchRate / 255}
            color="black"
            width={300}
            height={15}
          />
          <Text style={styles.anotherHeading}>Base Friendship</Text>
          <Progress.Bar
            borderRadius={8}
            animationType={'decay'}
            animated={true}
            progress={item.baseFriendship / 100}
            color="black"
            width={300}
            height={15}
          />
          <Text
            style={{
              marginTop: 30,
              marginBottom: 10,
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Base Exp.
          </Text>
          <Progress.Bar
            borderRadius={8}
            animationType={'spring'}
            animated={true}
            progress={item.baseExperience / 255}
            color="black"
            width={300}
            height={15}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({loading:false})
      }
      
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 5,
  },
  anotherHeading: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
export default Pokedex;

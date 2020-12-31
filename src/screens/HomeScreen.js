import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, Button,ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { setdata } from "../redux/actions";
import LoadingScreen from './LoadingScreen'
class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  state={
    loading:true
  }
  navigation = this.props.navigation;

  render() {
  //  console.log(this.props.PokedexData.Pokedex);
    return (
      this.state.loading?<LoadingScreen />:
      <View>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-around" }}
          numColumns={2}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={this.props.PokedexData.Pokedex}
          keyExtractor={this.props.PokedexData.Pokedex.key}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 25,
              }}
            >
              <TouchableOpacity
                onPress={() => this.navigation.navigate("Poke", { item: item })}
              >
                <Image
                  style={{ height: 150, width: 150 }}
                  source={{ uri: item.url }}
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
  async componentDidMount() {
    //Work on it for getting data from api
    var pokArray = [];
    
    for (let i = 1; i <= 10; i++) {
      var pokObj={
        name: '',
        url: '',
        key:null,
        description:'',
        height:null,
        weight:null,
        EggGroup:[],
        catchRate:null,
        baseExperience:null,
        baseFriendship:null
  
      }
       await fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        .then((data) => {
          return data.json();
        })
        .then(function (singlePokData) {
          pokObj.name= singlePokData.name,
          pokObj.url=singlePokData.sprites.other["official-artwork"].front_default,
          pokObj.key=singlePokData.id,
          pokObj.description='',
          pokObj.height=singlePokData.height,
          pokObj.weight=singlePokData.weight,
          pokObj.EggGroup=[],
          pokObj.baseExperience=singlePokData.base_experience        
        })
         await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i).
          then((res)=>{
            return res.json()
        }).then(function(pokSpeciesData){
          //console.log(pokSpeciesData.name)
          pokObj.catchRate=pokSpeciesData.capture_rate
          pokObj.baseFriendship=pokSpeciesData.base_happiness
          Object.values(pokSpeciesData.egg_groups).forEach(element=>{
            pokObj.EggGroup.push(element.name)
          })
          pokObj.description=pokSpeciesData.flavor_text_entries['6'].flavor_text
          pokObj.description=pokObj.description.replace(/\r?\n|\r/g,' ')
          // console.log(pokObj.description)
        });
        // console.log(Object.keys(pokObj))
        pokArray.push(pokObj);
    }
    //

    this.props.setdata(pokArray);
    this.setState({loading:false})

   
  }
}
const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    PokedexData: state.main,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setdata: (data) => dispatch(setdata(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

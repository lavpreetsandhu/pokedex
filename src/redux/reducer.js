import { SETDATA } from "./actionType";
import Pokedex from "pokedex-promise-v2";

const initialState = {
  Pokedex: [
    // {
    //   name: "Bulbasaur",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    //   key: 1,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:7,
    //   weight:69,
    //   EggGroups:['GRESS','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:64,
    // },
    // {
    //   name: "Ivysaur",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    //   key: 2,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:10,
    //   weight:13,
    //   EggGroups:['GRESS','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:142,
    // },
    // {
    //   name: "Venusaur",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    //   key: 3,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:20,
    //   weight:100,
    //   EggGroups:['GRESS','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:236,
    // },
    // {
    //   name: "charmander",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    //   key: 4,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:6,
    //   weight:85,
    //   EggGroups:['GRESS','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:62,
    // },
    // {
    //   name: "charmeleon",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    //   key: 5,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:11,
    //   weight:19,
    //   EggGroups:['GRESS','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:142,
    // },
    // {
    //   name: "charizard",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    //   key: 6,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:17,
    //   weight:90.5,
    //   EggGroups:['GRESS','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:240,
    // },
    // {
    //   name: "squirtle",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    //   key: 7,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:5,
    //   weight:9,
    //   EggGroups:['GRESS','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:63,
    // },
    // {
    //   name: "wartortle",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    //   key: 8,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:10,
    //   weight:22.5,
    //   EggGroups:['Water 1','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:142,
    // },
    // {
    //   name: "blastoise",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    //   key: 9,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:16,
    //   weight:85.5,
    //   EggGroups:['Water1','MONSTER'],
    //   catchRate:45,
    //   baseFriendship:70,
    //   baseExperience:239,
    // },
    // {
    //   name: "caterpie",
    //   url:
    //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    //   key: 10,
    //   description:'description goes here description goes here  description goes here  description goes here description goes here description goes here description goes here description goes here description goes here ',
    //   height:3,
    //   weight:2.9,
    //   EggGroups:['BUG'],
    //   catchRate:255,
    //   baseFriendship:70,
    //   baseExperience:39,
    // },
  ]
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETDATA:
      // console.log("setdata called");
      // console.log(action.payload)
      return { ...state,Pokedex: action.payload };
    default:
      return state;
  }
};

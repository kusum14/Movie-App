// import React from 'react';
// import { View,Text,StyleSheet, FlatList, SafeAreaView, Image} from 'react-native';
// //import {topmovies} from '../data/moviedata'

// const topmovies=require("../data/moviedata.json")

// const Item=({title})=>(
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// )

// const renderItem = ({item}) => {
//     let url = "../images/movie/"+item.id+".jpg";

//     //let url = "../images/movie/tt0111161.jpg";

//     return (
        
//         <View style={styles.item}>
        
//         {/* <Image source={require(../images/movie/tt0111161.jpg) } styles={styles.image}/>   */}


//       <Image source={{uri:url}}/>
//       <Text >{item.id} {item.title}
      
//       </Text>
//       </View>
//     )
// }

// const DisplayScreen = ()=>{


//     return(

//         <SafeAreaView style={styles.screen}>
//             <FlatList 
//             data={topmovies}
//             renderItem={renderItem}
//             // let url=require("../images/movie/"+item.id+".jpg");
//             // <View style={styles.item}>
                
//             //   {/* <Image source={require(`../images/movie/tt0111161.jpg`) } styles={styles.image}/>   */}
            
//             // {/* <Image source={require("../images/movie/"+item.id+".jpg") }/> */}
//             // <Text >{item.id} {item.title}
            
//             // </Text>
//             // </View>
//             // }
//             // //<Text style={styles.item}>{item.title}</Text>
//             // //renderItem={renderItem}
//             keyExtractor={item=>item.id}
        

//             />
            
//         </SafeAreaView>

         
//     )
// };

// const styles=StyleSheet.create({
//     screen:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     item:{
//         padding:20,
//         marginVertical:8,
//         borderLeftWidth: 0.5,
//         borderRightWidth: 0.5,
//         borderBottomWidth: 0.5,
//         borderTopWidth:0.5,
//         borderRadius:5,
//         height:150,
//         width:"90%"
        
//     },
    
//     image:
//     {
//         flex:1,
//         width:null,
//         height:null,
//         resizeMode:"contain"
//     }
// });

// export default DisplayScreen;

import React, {useEffect} from 'react';
import { View,Text,StyleSheet, FlatList, SafeAreaView, Image} from 'react-native';
//import {topmovies} from '../data/moviedata'

const topmovies=require("../data/moviedata.json")

// const Item=({title})=>(
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// )
let imagesData= {};

const generateImageData = () => {
   
    for (let index in topmovies) {
        let movie = topmovies[index];
        imagesData[movie.id] = "../images/movie/"+movie.id+".jpg";
    }

}
const renderItem = ({item}) => {
    let url = imagesData[item.id];
    return (
        
        <View style={styles.item}>
        
        {/* <Image source={require(../images/movie/tt0111161.jpg) } styles={styles.image}/>   */}


      {/* <Image source={url}/> */}
      <Text >{item.id} {item.title}
      {url}
      
      </Text>
      </View>
    )
}

const DisplayScreen = ()=>{


    useEffect(() => {
        generateImageData();
      });


    // const renderItem=({item})=>(
    //     <Item title={item.title}/>
    // )

    return(

        <SafeAreaView style={styles.screen}>
            <FlatList 
            data={topmovies}
            renderItem={renderItem}
            //<Text style={styles.item}>{item.title}</Text>
            //renderItem={renderItem}
            keyExtractor={item=>item.id}
        

            />
            
        </SafeAreaView>

         
    )
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        padding:20,
        marginVertical:8,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopWidth:0.5,
        borderRadius:5,
        height:150,
        width:"90%"
        
    },
    
    image:
    {
        flex:1,
        width:null,
        height:null,
        resizeMode:"contain"
    }
});

export default DisplayScreen;

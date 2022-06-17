import { StyleSheet } from "react-native";
const body = StyleSheet.create({
    contenedor: {
        backgroundColor:'#000000',
        height:'100%'
    },
    text: {
        color:'#FFFFFF',
        paddingLeft:10,
        fontSize:20,
        margin:10,
        marginTop:25,
    },
    textExplore: {
        color:'#B4B4B4',
        paddingLeft:10,
        fontSize:15,
        margin:10,
       // marginTop:5,
    },

    subtext: {
        color:'#FFFFFF',
        paddingLeft:10,
        fontSize:20,
        margin:10,
        fontWeight:'bold'
    },
    titulo: {
        color:'#FFFFFF',
        paddingLeft:20,
        fontSize:40,
        marginBottom:50
    },
    imagen:{
    width:220,
    marginTop:55,
    height:220,
    margin:10,
    alignSelf:'center'
    },
    imagenExplore:{
        width:380,
        height:170,
        alignSelf:'center'
    },
});
export default body;
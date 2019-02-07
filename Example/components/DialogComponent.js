import React,{Component} from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';

var { width, height } = Dimensions.get("window");

class DialogComponent extends Component{

  closedialog = () => {
    this.props.dispatch({type:"HIDE"})
  }
  render(){
    if(this.props.show){
      return(
      <View style={styles.dialogStyle}>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{this.props.info}</Text>
        </View>
        <TouchableOpacity style={styles.buttonPrimary} onPress={this.closedialog}>
          <Text style={styles.buttonPrimaryText}>OK</Text>
        </TouchableOpacity>
      </View>
    )
    }
    else {
      return null
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, null)(DialogComponent);

const styles = StyleSheet.create({
  dialogStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: (width - 350) / 2,
    top: height - height / 1.6,
    backgroundColor: "white",
    width: 350,
    height: 190,
    elevation: 3,
    borderRadius: 5,
    padding:10
  },
  buttonPrimary:{
    alignItems:"center",
    backgroundColor:"#22A7F0",
    padding:10,
    width: 330,
  },
  buttonPrimaryText:{
    color:"white"
  },
  infoContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  info:{
    fontSize: 18
  }
});
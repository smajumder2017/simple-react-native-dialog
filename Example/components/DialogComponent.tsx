import React,{Component} from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';
import {hideDialog} from './Dialog';
import {DialogState} from './Dialog';

var { width, height } = Dimensions.get("window");

interface IDispatch {
  hideDialog: ()=> void;
}

class DialogComponent extends Component<DialogState & IDispatch>{

  buttonPress = (type:String) => {
    if(type === 'primary'){
      if(this.props.primaryButtonPress)
        this.props.primaryButtonPress();
      this.props.hideDialog();
    }
    if(type === 'secondary'){
      if(this.props.secondaryButtonPress)
        this.props.secondaryButtonPress();
      this.props.hideDialog();
    }
  }
  render(){
    let buttonContainer ;
    if(this.props.buttonAlignment === 'center'){
      buttonContainer = styles.buttonContainerCenter;
    }
    else if(this.props.buttonAlignment === 'left'){
      buttonContainer = styles.buttonContainerLeft;
    }
    else {
      buttonContainer = styles.buttonContainer;
    }
    if(this.props.show){
      return(
        <View style={styles.backdrop}>
          <View style={styles.dialogStyle}>
        <View style={styles.header}>
            <Text style={styles.headerText}>{this.props.header}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{this.props.info}</Text>
        </View>
        <View style={buttonContainer}>
          <TouchableOpacity style={[styles.buttonPrimary, this.props.primaryButtonStyle]} onPress={()=>this.buttonPress('primary')}>
            <Text style={[styles.buttonPrimaryText, this.props.primaryButtonTextStyle]}>{this.props.primaryButtonText}</Text>
          </TouchableOpacity>
          {
            this.props.secondaryButtonPress &&
            <TouchableOpacity style={[styles.buttonSecondary, this.props.secondaryButtonStyle]} onPress={()=>this.buttonPress('secondary')}>
            <Text style={[styles.buttonSecondaryText, this.props.secondaryButtonTextStyle]}>{this.props.secondaryButtonText}</Text>
          </TouchableOpacity>
          }
        </View>
      </View>
        </View>
    )
    }
    else {
      return null
    }
  }
}

function mapStateToProps(state : DialogState){
  return state
}

export default connect<DialogState, IDispatch, {}, DialogState>(mapStateToProps, {hideDialog})(DialogComponent);

const styles = StyleSheet.create({
  backdrop:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    top:0,
    left:0,
    backgroundColor: "rgba(0,0,0,0.6)",
    height: height,
    width: width,
    elevation:1
  },
  dialogStyle: {
    backgroundColor: "white",
    width: 350,
    height: 190,
    elevation: 3,
    borderRadius: 5,
    padding:10
  },
  header:{
    padding:10,
    paddingHorizontal: 30
  },
  headerText:{
    fontWeight:"bold",
    color: "black",
    fontSize: 20
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonContainerLeft:{
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  buttonContainerCenter:{
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonPrimary:{
    alignItems:"center",
    backgroundColor:"white",
    padding:10,
    paddingHorizontal: 20
  },
  buttonPrimaryText:{
    color:"black",
    fontWeight:"bold"
  },
  buttonSecondary:{
    alignItems:"center",
    backgroundColor:"white",
    padding:10,
    paddingHorizontal: 20,
    marginHorizontal: 10
  },
  buttonSecondaryText:{
    color:"black",
    fontWeight:"bold"
  },
  infoContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingHorizontal: 30
  },
  info:{
    fontSize: 16
  }
});
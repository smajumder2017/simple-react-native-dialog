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
    if(this.props.show){
      return(
      <View style={styles.dialogStyle}>
        <View style={styles.header}>
            <Text style={styles.headerText}>{this.props.header}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{this.props.info}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.buttonPrimary, this.props.primaryButtonStyle]} onPress={()=>this.buttonPress('primary')}>
            <Text style={[styles.buttonPrimaryText, this.props.primaryButtonTextStyle]}>No</Text>
          </TouchableOpacity>
          {
            this.props.secondaryButtonPress &&
            <TouchableOpacity style={[styles.buttonSecondary, this.props.secondaryButtonStyle]} onPress={()=>this.buttonPress('secondary')}>
            <Text style={[styles.buttonSecondaryText, this.props.secondaryButtonTextStyle]}>Yes</Text>
          </TouchableOpacity>
          }
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
  dialogStyle: {
    flex: 1,
    position: "absolute",
    left: (width - 350) / 2,
    top: (height - 190) / 2,
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
    fontSize: 20
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "flex-end"
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
    fontSize: 18
  }
});
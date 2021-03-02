import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React, { Component, useState } from 'react' ;
//Import all required component
import { View, Text, 
  StyleSheet,
  style,
  ScrollView, TextInput,
  TouchableOpacity, 
  Alert} from 'react-native';


import { render } from 'react-dom';

class Progressbar extends Component{

    constructor(props){

        super(props);
    }


    
    render(){
        const buttonTextStyle = {
            color: 'red',fontSize:100
        };
        
return(


    
    <View style={{flex: 1, width:400, padding:2}}>
    <ProgressSteps 

    previousBtnTextStyle={  {color:'green'} }
    activeStepIconBorderColor='red' 
    completedStepIconColor='red'
    activeLabelColor='red'
    completedProgressBarColor='red'
    marginBottom={0}
    labelFontSize={13}
  
     activeStep= {this.props.activestep}  >
    
        <ProgressStep  label="Personal Info"
     labelFontSize={27}
         previousBtnText=''
         nextBtnText=""
         previousBtnDisabled= {true}
         nextBtnDisabled={true}
        
        >
         
        </ProgressStep>
   
        <ProgressStep label="Work Info"
        
        previousBtnText=''
        nextBtnText=""
        previousBtnDisabled= {true}
        nextBtnDisabled={true}
        >
        
        </ProgressStep>


        <ProgressStep label="Gaurantor Info"
        
        previousBtnText=''
        nextBtnText=""
        previousBtnDisabled= {true}
        nextBtnDisabled={true}

        >
      
        </ProgressStep>


        <ProgressStep label="Financial Info"
          
          previousBtnText=''
          nextBtnText=""
          previousBtnDisabled= {true}
          nextBtnDisabled={true}
       >
      
       </ProgressStep>

        <ProgressStep label="Loan Terms"
        
        previousBtnText=''
        nextBtnText=""
        previousBtnDisabled= {true}
        nextBtnDisabled={true}
        finishBtnText=''
        >
           
        </ProgressStep>
    </ProgressSteps>
  </View>
  

)

};
};

export default Progressbar;



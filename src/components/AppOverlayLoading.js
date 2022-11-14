//
import React, { Component } from "react";
import { useTheme } from '@react-navigation/native';
import { Text, View, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";
import dimensions from "../constants/dimensions";
import colors from "../utils/colors";


const AppOverlayLoading = (props) => {

    // const { myColors } = useTheme();

    // const { RTL, open, message, onPress } = this.props
    //opne: use it to show/hide bottom sheet (require)
    //onOutPress : action to close bottom sheet when press out of it (require)
    return (
        <View style={{ zIndex: 10000000, elevation: 10, shadowOffset: { height: 0, width: 2 }, shadowOpacity: 0.2, shadowColor: 'black', shadowRadius: 2.62, position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center' }} >

            <View style={{ backgroundColor: 'black', borderRadius: 6, width: dimensions.width * .25, height: dimensions.width * .25, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', opacity: 0.5 }}>

                <ActivityIndicator color={colors.white} size='large' />


                {/*<FastImage source={require('../Assets/Images/logo.gif')} style={{ alignSelf: 'center', height: dimensions.width*.4, width: dimensions.width*.4, borderRadius: 5 }}>
            </FastImage>*/}
                {/*<Text allowFontScaling={false} style={{fontFamily: Fonts.FontRegular, marginTop:moderateScale(5)}} >{Strings.loading}</Text>*/}
            </View>

        </View>

    )

}




const mapStateToProps = state => ({
    RTL: state.Language.RTL,
});

export default AppOverlayLoading;

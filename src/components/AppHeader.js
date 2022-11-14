import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import FastImage from "react-native-fast-image";
import icons from "../assets/icons";
import colors from "../utils/colors";
import { hp, wp } from '../utils/dimensions'
import fonts from "../utils/fonts";
import FontsSizes from "../constants/FontsSizes";

const AppHeader = (props) => {

    const { title, proccess } = props
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: hp(6.5), backgroundColor: colors.headerBackground, elevation: 12, shadowColor:'#00000029' }}>
            <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity style={{ alignItems: 'center' }}
                onPress={()=>props.navigation.pop()}>
                    <FastImage source={icons.backIcon} style={{ width: wp(7), height: wp(7), marginHorizontal: wp(3) }} resizeMode='contain' />
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font12 - 6, marginTop: 3 }}>Back</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font18, height: wp(7) }}>{title}</Text>
                </View>

            </View>
            {proccess &&
                <View style={{ alignItems: 'center', marginHorizontal: wp(4) }}>
                    <FastImage source={icons.transactionIconGray} style={{ width: wp(7), height: wp(7) }} resizeMode='contain' />
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font12 - 6, marginTop: 3 }}>Proccess</Text>
                </View>
            }
        </View>
    )
}

export default AppHeader
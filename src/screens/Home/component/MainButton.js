import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import FastImage from "react-native-fast-image";
import icons from "../../../assets/icons";
import colors from "../../../utils/colors";
import { wp } from '../../../utils/dimensions'
import fonts from "../../../utils/fonts";
import FontsSizes from "../../../constants/FontsSizes";

const MainButton = (props) => {

    const { title, iconWidth, iconHeight } = props
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: wp(4), width: '100%', height: wp(13), borderRadius: wp(8), backgroundColor: colors.buttonBackground, }}
            onPress={props.onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FastImage source={props.icon} style={{ width: iconWidth ? iconWidth : wp(7), height: iconHeight ? iconHeight : wp(8), marginHorizontal: wp(2) }} resizeMode='contain' />
                <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font18 }}>{title}</Text>
            </View>
            <FastImage source={icons.arrowRightGreen} style={{ width: wp(5), height: wp(3.2), marginHorizontal: wp(1) }} resizeMode='contain' />
        </TouchableOpacity>
    )
}

export default MainButton
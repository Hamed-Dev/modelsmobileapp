import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { wp, hp } from '../../utils/dimensions'
import AppIcon from '../AppIcon'
import fonts from '../../utils/fonts'
import { moderateScale } from '../../utils/ResponsiveDimentions'
import FontsSizes from '../../constants/FontsSizes'
import colors from '../../utils/colors'

const Button = (props) => {
    const reduxState = useSelector(state => state)

    return (
        <TouchableOpacity disabled={props.disabled} activeOpacity={0.7} style={[styles.btnStyle, { backgroundColor: props.mainBtn ? colors.blueApp : 'transparent', borderColor: props.mainBtn ? 'transparent' : colors.primary, borderWidth: 1, opacity: props.disabled || props.loading ? 0.7 : 1, height: hp(5.5) }, props.btnStyle]} onPress={props.onPress}>
            {props.loading ? <Loading color='white' /> :
                <>
                    {props.img && <Image source={props.img} style={[{ width: wp(6), marginEnd: '3%', height: wp(8), resizeMode: 'contain', tintColor: props.imgTintColor ? props.imgTintColor : 'white' },props.imgStyle]} />}
                    {props.icon && <Icon type={props.iconType} name={props.iconName} style={props.iconStyle ? props.iconStyle : { color: 'black' }} />}
                    <Text allowFontScaling={false} style={[{ color: props.mainBtn ? 'white' : colors.primary, fontFamily: fonts.openSansRegular,fontSize:FontsSizes.font12 }, styles.title, props.txtStyle, props.icon ? { paddingEnd: '1%' } : null]}>{props.title}</Text>
                </>
            }
            {/* <Loading /> */}
           
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnStyle: {

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(3),
        flexDirection: 'row',
        overflow: 'hidden',
        alignSelf: 'center'
        //width: '100%'
    },
    title: {
        //paddingHorizontal: '5%',
        // paddingVertical: '3.5%',
        // color: colors.white,
        fontSize: FontsSizes.font18
    }
})

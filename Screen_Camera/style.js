import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #000;
    align-items: center;
    justify-content: center;
`
export const TextHeader = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 40px;
`
export const BtnCamera = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    margin-bottom: 10px;
    background-color: #FD7200;
    border-radius: 12px;
`
export const TextBtnCamera = styled.Text`
    font-size: 12px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
`
export const TextHeaderVideo = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
    margin-bottom: 20px;
`
export const SectionBtnVideo = styled.View`
    flex: 1;
    width: 90%;
    height: 50%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
`
export const BtnVideo = styled.TouchableOpacity`
    width: 40%;
    height: 40%;
    background-color: #FD7200;
    margin: 10px;
`
export const TextBtnVideo = styled.Text`
    font-size: 12px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
`
export const SectionIcon = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: center;
    background-color: #000;
`
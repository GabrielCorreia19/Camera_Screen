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
`
export const BtnCamera = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    flex-direction: row;
    margin-bottom: 15px;
    background-color: #FD7200;
    border-radius: 12px;  
    align-items: center; 
`
export const TextBtnCamera = styled.Text`
    font-size: 15px;
    color: #FFF;
    font-weight: bold;
    margin-left: 22%;
`
export const TextHeaderVideo = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
    margin-bottom: 10px;
`
export const SectionBtnVideo = styled.View`
    width: 90%;
    height: 50%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`
export const BtnVideo = styled.TouchableOpacity`
    width: 40%;
    height: 42%;
    background-color: #FD7200;
    margin: 14px;
    align-items: center;
    border-radius: 12px;
`
export const TextBtnVideo = styled.Text`
    font-size: 14px;
    text-align: center;
    margin-top: 8px;
    color: #FFF;
    font-weight: bold;
`
export const SectionIcon = styled.View`
    width: 90%;
    position: absolute;
    bottom: 2%;
    flex-direction: row;
    justify-content: center;
`
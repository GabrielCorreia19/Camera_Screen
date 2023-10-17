import styled from "styled-components"

export const Container = styled.View`
      flex: 1;
`
export const CameraContainer = styled.View`
      flex: 1;
      flex-direction:'row';
`  
export const SectionButtons = styled.View`
      align-items: 'center'; 
` 
export const SectionBtnVideo = styled.View`
      flex-direction: row;
      justify-content: center;
`
export const BtnVideo = styled.TouchableOpacity`
      width: 70px;
      height: 70px;
      border-radius: 40px;
      background-color: #000;
      align-items: center;
      justify-content: center;
      margin-horizontal: 24px;
      margin-vertical: 10px;
`
export const TextBtnVideo = styled.Text`
      font-size: 16px;
      color: #FFFFFF;
      font-weight: bold;
      text-align: center
`
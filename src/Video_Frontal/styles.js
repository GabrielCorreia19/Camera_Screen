import styled from "styled-components"

export const Container = styled.View`
      flex: 1;
`
export const CameraContainer = styled.View`
      flex: 1;
      flex-direction:'row';
`  
export const SectionButtons = styled.View`
      flex-direction: 'row';
      justify-content: 'center';
      align-items: 'center'; 
` 
export const SectionBtnVideo = styled.View`
      align-items: center;
`
export const BtnVideo = styled.TouchableOpacity`
      width: 80%;
      height: 50px;
      justify-content: center;
      border-radius: 20px;
      background-color: #000;
      margin-vertical: 4px;
`
export const TextBtnVideo = styled.Text`
      font-size: 16px;
      color: #FFFFFF;
      font-weight: bold;
      text-align: center;
`
import styled from "styled-components"

export const ContainerCamera = styled.SafeAreaView`
      flex: 1;
      justify-content: 'center';
`; 
export const ContentButtons = styled.View`
      flex: 1;
      background-color: "transparente";
      align-items: center;
`;
export const ContentCamera = styled.View`
      height: 100px;
      background-color: #000;
      top: 79%;
      left: 26%;
      align-items: center;
      border-radius: 100px;
`
export const BtnTrocarCamera = styled.TouchableOpacity`
     width: 100px;
     height: 90px;
     justify-content: center;
     align-items: center;
     background-color: white;
     border-radius: 60px;
     bottom: 20%;
     left: 16%;
   
` 
export const ButtonCamera = styled.TouchableOpacity`
      width: 100px;
      align-items: center;
      top: 30%;
` 
export const ContentModal = styled.View`
      flex: 1; 
      justify-content: 'center';
      align-items: 'flex-end';
      margin: 20px;
`
export const CloseButton = styled.TouchableOpacity`
      position: "absolute";
      top: 50;
      left: 2;
      margin: 10px;
`   
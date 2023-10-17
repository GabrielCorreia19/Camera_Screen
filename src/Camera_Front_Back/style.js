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
      width: 70px;
      height: 70px;
      background-color: #000;
      border-radius: 40px;
      top: 80%;
      left: 20%;
      align-items: center;
      justify-content: center;
`
export const BtnTrocarCamera = styled.TouchableOpacity`
     width: 70px;
     height: 70px;
     justify-content: center;
     align-items: center;
     background-color: white;
     border-radius: 40px;
     bottom: 20%;
     left: 20%;  
` 
export const ButtonCamera = styled.TouchableOpacity`
      
` 
export const ContentModal = styled.View`
      flex: 1; 
      justify-content: 'center';
      align-items: 'flex-end';
      margin: 20px;
`
export const CloseButton = styled.TouchableOpacity`
      position: "absolute";
      top: 50px;
      left: 2px;
      margin: 10px;
`   
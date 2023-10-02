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
      height: 14%;
      background-color: #000;
      top: 80%;
      align-items: center;
      border-radius: 100px;
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
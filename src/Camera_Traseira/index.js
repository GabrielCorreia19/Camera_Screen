import React, { useState, useEffect, useRef } from "react";
import { View, Modal, Image, Text } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

import { 
  ContainerCamera,
  ContentButtons,
  ContentCamera,
  ButtonCamera,
  ContentModal,
  CloseButton,

} from "./style";

export default function App() {
  const camRef = useRef(null);
  const [type] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission == null) {
    return <View />;
  }

  if (hasPermission == false) {
    return <Text>Acesso negado</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
    }
  }
  return (
    <ContainerCamera>
      <Camera 
      style={{width: '100%', height: '100%' }} 
      type={type} 
      ref={camRef}>
        <ContentButtons>
          <ContentCamera>
          <ButtonCamera onPress={takePicture}>
            <FontAwesome name="camera" size={45} color="#FFFFFF"></FontAwesome>
          </ButtonCamera>
          </ContentCamera>
        </ContentButtons>
      </Camera>
      
      {capturedPhoto && (
        <Modal animationType="slide" transparent={true} visible={open}>
          <CloseButton
            onPress={() => {
              setOpen(false);
            }}
          >
            <FontAwesome
              name="close"
              size={50}
              left={"85%"}
              color="#000"
            ></FontAwesome>
          </CloseButton>
          <ContentModal>
            <Image
              style={{width: "100%", height: "90%", marginTop: 20}}
              source={{ uri: capturedPhoto }}
            ></Image>
          </ContentModal>
        </Modal>
      )}
    </ContainerCamera>
  );
}

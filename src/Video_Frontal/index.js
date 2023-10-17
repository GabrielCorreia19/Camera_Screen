import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  CameraContainer,
  Container,
  SectionBtnVideo,
  BtnVideo,
} from "./styles";

export default function Video_Frontal() {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
    })();
  }, []);

  const takeVideo = async () => {
    if (camera) {
      const data = await camera.recordAsync({
        maxDuration: 10,
      });
      setRecord(data.uri);
      console.log(data.uri);
    }
  };

  const stopVideo = async () => {
    camera.stopRecording();
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>Acesso negado</Text>;
  }

  return (
    <Container>
      <CameraContainer>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={{ flex: 1 }}
          type={type}
          ratio={"4:3"}
        />
      </CameraContainer>
      <Video
        ref={video}
        style={{ alignSelf: "center", width: "95%", height: 220 }}
        source={{
          uri: record,
        }}
        useNativeControls
        resizeMode="contain"
        isMuted={true}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <SectionBtnVideo>
        <BtnVideo
          title={status.isPlaying ? "Parar" : "Rodar Vídeo"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Entypo name="controller-paus" size={30} color={"#FFFFFF"} />
        </BtnVideo>
        <BtnVideo onPress={() => takeVideo()}>
          <Entypo name="controller-play" size={36} color={"#FFFFFF"} />
        </BtnVideo>
        <BtnVideo onPress={() => stopVideo()}>
          <Entypo name="controller-stop" size={36} color={"#FFFFFF"} />
        </BtnVideo>
      </SectionBtnVideo>
    </Container>
  );
}

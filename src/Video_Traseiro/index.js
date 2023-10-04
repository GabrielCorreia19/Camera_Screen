import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { Button, View } from "react-native";
import { Container, CameraContainer, SectionButtons, } from "./style";

export default function Video_Frontal(){

  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState (null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    (async () => { 
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');
    })();
  }, []);

  const takeVideo = async () => {
    if(camera){
      const data = await camera.recordAsync({
        maxDuration: 10
      })
      setRecord(data.uri);
      console.log(data.uri)
    }
  }

  const stopVideo = async () => {
    camera.stopRecording();
  }

  if (hasCameraPermission === null || hasAudioPermission === null){
    return <View/>
  }

  if (hasCameraPermission === false || hasAudioPermission === false){
    return <Text>Acesso negado</Text>
  }

  return(
    <Container>
      <CameraContainer>
        <Camera 
        ref={ref => setCamera(ref)}
        style={{flex: 1, aspectRatio: 1}}
        type={type}
        ratio = {'4:3'}/>
      </CameraContainer>
      <Video 
      ref={video}
      style={{alignSelf: 'center', width: 350, height: 220}}
      source = {{
        uri: record,
      }}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <SectionButtons>
        <Button 
        title = {status.isPlaying ? 'Parar' : 'Rodar Vídeo'}
        onPress={() => 
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
        />
      </SectionButtons>
      <Button 
      title="Trocar câmera"
      onPress={() => {
        setType(
          type === Camera.Constants.Type.back 
          ? Camera.Constants.Type.front 
          : Camera.Constants.Type.back
        );
      }}
      />
      <Button title="Iniciar Video" onPress={() => takeVideo()}/> 
      <Button title="Parar Video" onPress={() => stopVideo()}/> 
    </Container>
  );
}


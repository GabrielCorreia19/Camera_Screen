import { Entypo } from "@expo/vector-icons";
import { Text } from "react-native";

import {
  Container,
  TextHeader,
  BtnCamera,
  TextBtnCamera,
  TextHeaderVideo,
  SectionBtnVideo,
  BtnVideo,
  TextBtnVideo,
  SectionIcon,
} from "./style";

export default function Home({ navigation }) {
  return (
    <Container>
      <TextHeader>Câmeras disponíveis:</TextHeader>
      <BtnCamera onPress={() => navigation.navigate("Camera_Frontal")}>
        <Entypo
          style={{ marginLeft: 20 }}
          name="camera"
          size={30}
          color={"#FFF"}
        />
        <TextBtnCamera>Câmera Frontal</TextBtnCamera>
      </BtnCamera>
      <BtnCamera onPress={() => navigation.navigate("Camera_Traseira")}>
        <Entypo
          style={{ marginLeft: 20 }}
          name="camera"
          size={30}
          color={"#FFF"}
        />
        <TextBtnCamera>Câmera Traseira</TextBtnCamera>
      </BtnCamera>
      <BtnCamera onPress={() => navigation.navigate("Camera_Frontal_Back")}>
        <Entypo
          style={{ marginLeft: 20 }}
          name="camera"
          size={30}
          color={"#FFF"}
        />
        <Text 
        style={{fontSize: 15, color: '#FFF', fontWeight: 'bold', marginLeft: '15%'}}>Câmera Frontal e Traseira</Text>
      </BtnCamera>
      <TextHeaderVideo>Vídeos disponíveis:</TextHeaderVideo>
      <SectionBtnVideo>
        <BtnVideo onPress={() => navigation.navigate("Camera_Frontal")}>
          <TextBtnVideo>Câmera Frontal</TextBtnVideo>
          <Entypo
            style={{ marginTop: 30 }}
            name="camera"
            size={70}
            color={"#FFF"}
          />
        </BtnVideo>
        <BtnVideo onPress={() => navigation.navigate("Video_Frontal")}>
          <TextBtnVideo>Vídeo Frontal</TextBtnVideo>
          <Entypo
            style={{ marginTop: 30 }}
            name="video-camera"
            size={70}
            color={"#FFF"}
          />
        </BtnVideo>
        <BtnVideo onPress={() => navigation.navigate("Video_Traseiro")}>
          <TextBtnVideo>Vídeo Traseiro</TextBtnVideo>
          <Entypo
            style={{ marginTop: 30 }}
            name="video-camera"
            size={70}
            color={"#FFF"}
          />
        </BtnVideo>
        <BtnVideo onPress={() => navigation.navigate("Camera_Traseira")}>
          <TextBtnVideo>Câmera Traseira</TextBtnVideo>
          <Entypo
            style={{ marginTop: 30 }}
            name="camera"
            size={70}
            color={"#FFF"}
          />
        </BtnVideo>
      </SectionBtnVideo>
      <SectionIcon>
        <Entypo name="home" size={30} color={"#F5F5F5"} style={{marginHorizontal: 35}}/>
        <Entypo name="grid" size={30} color={"#F5F5F5"} style={{marginHorizontal: 35}}  />
        <Entypo name="user" size={30} color={"#F5F5F5"} style={{marginHorizontal: 35}} />
        <Entypo name="cog"  size={30} color={"#F5F5F5"} style={{marginHorizontal: 35}} />
      </SectionIcon>
    </Container>
  );
}

import {Entypo} from '@expo/vector-icons'
import { 
    Container,
    TextHeader, 
    BtnCamera,
    TextBtnCamera,
    TextHeaderVideo,
    SectionBtnVideo,
    BtnVideo, 
    TextBtnVideo, 
    SectionIcon } from './style'

export default function Screen_Camera() {
    return(
        <Container>
            <TextHeader>Cameras disponíveis:</TextHeader>
            <BtnCamera>
                <TextBtnCamera>Câmera Frontal</TextBtnCamera>
            </BtnCamera>
            <BtnCamera>
                <TextBtnCamera>Câmera Traseira</TextBtnCamera>
            </BtnCamera>
            <TextHeaderVideo>Vídeos disponíveis:</TextHeaderVideo>
            <SectionBtnVideo>
            <BtnVideo>
                <TextBtnVideo>Câmera Frontal</TextBtnVideo>
            </BtnVideo>
            <BtnVideo>
                <TextBtnVideo>Câmera Traseira</TextBtnVideo>
            </BtnVideo>
            <BtnVideo>
                <TextBtnVideo>Vídeo Frontal</TextBtnVideo>
            </BtnVideo>
            <BtnVideo>
                <TextBtnVideo>Vídeo Traseiro</TextBtnVideo>
            </BtnVideo>
            </SectionBtnVideo>
            <SectionIcon>
                <Entypo name='home' size={30} color={"#fff"} style={{margin: 25}}/>
                <Entypo name='grid' size={30} color={"#fff"} style={{margin: 25}}/>
                <Entypo name='user' size={30} color={"#fff"} style={{margin: 25}}/>
                <Entypo name='cog' size={30} color={"#fff"}  style={{margin: 25}}/>
            </SectionIcon>
        </Container>
    );
}
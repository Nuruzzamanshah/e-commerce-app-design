import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
// import {sliderItems} from '../data'

const Container = styled.div`
    wight: 100%;
    height: 100vh;
    display: flex;
    // background-color: #FFA07A;
    position: relative;
    overflow: hidden;

`
const Arrow = styled.div`
    weight: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    z-index: 2;
    
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw)

`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=> props.bg}
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Image = styled.img`
    height: 70%;
    margin-left: 15%;

`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    // const [slideIndex, setSlideIndex] = useState(0);
    // const handleClick = (direction) => {

    // }
    return (
        <Container>
            <Arrow >
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </Arrow>
            <Wrapper>
            <Slide bg='f5fafd'>
                <ImgContainer>
                    <Image src='https://imgv3.fotor.com/images/side/How-to-remove-background-from-picture.png'></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>Hello Mama</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg='f5f1fd'>
                <ImgContainer>
                    <Image src='https://cdn.shopify.com/s/files/1/1859/8979/t/4/assets/section-how-it-works.svg?v=7752977225952279668'></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>Hello Mama</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg='fbf0f4'>
                <ImgContainer>
                    <Image src='https://www.jing.fm/clipimg/full/177-1772541_ecommerce-seo-guide-ecommerce-seo-png.png'></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>Hello Mama</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>

            </Wrapper>
            <Arrow>
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrow>
        </Container>
    );
};

export default Slider;
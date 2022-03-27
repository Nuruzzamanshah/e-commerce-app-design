import { Badge } from '@material-ui/core';
import { AddShoppingCartOutlined, Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
//   background-color: black;  
`
const Wrapper = styled.div`
    padding: 0px  30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-align: center;
`

const Language = styled.span`
    font-size: 21px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid #00FFFF;
    display: flex;
    align-align: center;
    padding: 5px;
    margin-left: 25px;
    
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;

`
const Span = styled.span`
    color: red;
`
const Small = styled.small`
    color: green;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 10px;
    padding: 10px;
    color: #3CB371;

`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input></Input>
                        <Search style={{color: 'green', fontSize: 17}}></Search>
                    </SearchContainer>
                </Left>
                <Center><Logo>N<Span>U</Span><Small>R</Small>U.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={1} color="primary">
                        <AddShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
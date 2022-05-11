import React from 'react';
import {
    Container,
    Header,
    CTAButton,
    UserIcon,
    ToggleBtn,
} from './AppTitle.styles';
import { AiOutlineMenu } from 'react-icons/ai';

export const AppTitle = () => {
    return (
        <Container>
            <ToggleBtn
                onClick={() => {
                    alert('you clicked me...!');
                }}
            >
                <AiOutlineMenu color='black' />
            </ToggleBtn>
            <Header>Let's Focus</Header>
            <UserIcon src='https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg'></UserIcon>
        </Container>
    );
};

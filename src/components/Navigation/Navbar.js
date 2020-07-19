import React, { Component } from 'react';
import  DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import styled from 'styled-components';

const MyNavbar= styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:flex-start;

overflow-x: hidden;
`;

class Navbar extends Component {

    state={
        displayMobileNavbar: false
    }

    componentDidMount = () => {
        window.addEventListener('resize',this.checkAndAutoHideMobileNavbar)
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize',this.checkAndAutoHideMobileNavbar)

    }

    toggleMobileNavbar = () => {
        
        this.setState({ displayMobileNavbar:!this.state.displayMobileNavbar} );
        console.log("toggled  " + this.state.displayMobileNavbar);
    }

    checkAndAutoHideMobileNavbar = () => {
        const screenWidth = window.innerWidth

        if(this.state.displayMobileNavbar && screenWidth > 765){
            this.setState({
                displayMobileNavbar:false
            })
        }
    }
    render() {
        return (
            <MyNavbar>
                <DesktopNavbar 
                displayMobileNavbar={this.state.displayMobileNavbar}
                toggleMobileNavbar={ this.toggleMobileNavbar }/>
                <MobileNavbar displayMobileNavbar={this.state.displayMobileNavbar}/>
            </MyNavbar>
        );
    }
}

export default Navbar;
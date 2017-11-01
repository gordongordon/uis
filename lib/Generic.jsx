import Title from './Title';
import SubTitle from './SubTitle';
import Footer from './Footer';
import Content from './Content';
import React from 'react';
import Button from './Button';
import ContentItem from './ContentItem';
import GenericContainer from './GenericContainer';


export default class Generic extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {

        return (
             <GenericContainer 
               className="cmui-GenericContainer"
               opened="true"
               width="100%"
             >
                <Title className="cmui-Title">迎海 Double Cove</Title>
                <SubTitle className="cmui-SubTitle">烏溪沙路8號 地區：馬鞍山</SubTitle>
                <Content>
                <ContentItem>最少實用面積: </ContentItem><ContentItem right>330</ContentItem>
                <ContentItem>付出預算上限:</ContentItem><ContentItem right>$800</ContentItem>
                <ContentItem>你會唔會養物:</ContentItem><ContentItem right>會</ContentItem>
                <ContentItem>冇樓睇租左俾人會唔會買: </ContentItem><ContentItem right>330</ContentItem>
                <ContentItem>間隔::</ContentItem><ContentItem right> Studio</ContentItem>
                </Content>


                <Button className="cmui-Button" first>Set Phone </Button>
                <Button className="cmui-Button" first> Text Me </Button>
                <Button className="cmui-Button">Call Now </Button>
            </GenericContainer>
        );

    }
}

           {/* <GenericContainer className="cmui-GenericContainer">
               <Title className="cmui-Title">Title</Title>
               <SubTitle className="cmui-SubTitle">SubTitle</SubTitle>
               <Content className="cmui-Content">Content</Content>
               <Footer className="cmui-Footer">Footer</Footer>
           </GenericContainer> */}
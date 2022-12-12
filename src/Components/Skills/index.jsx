import { Container, ContainerH2, H2, Text, TextBox } from "../../DuplicateCode";
import { SkillsContainer ,Col, ColItem, SpanBox, SpanR, SpanL, Progress, ProgressDiv ,SkillsRow } from "./SkillsElements";

const Skills = () => {
    return ( 
        <SkillsContainer id='skills'>
            <ContainerH2>
                <H2>
                    مهارت های من
                </H2>
            </ContainerH2>
                <TextBox>
                    <Text>
                        من به سرعت همه چیز رو یاد میگیرم و در توسعه برنامه های وب وطراحی محصول مهارت دارم
                    </Text>
            </TextBox>
            <Container>
                <SkillsRow>
                    <Col>
                        <ColItem>
                            <SpanBox>
                                <SpanR>65%</SpanR>
                                <SpanL>JAVASCRIPT</SpanL>
                            </SpanBox>
                            <Progress>
                                <ProgressDiv style={{width: "65%"}}></ProgressDiv>
                            </Progress>
                        </ColItem>
                        <ColItem>
                            <SpanBox>
                                <SpanR>35%</SpanR>
                                <SpanL>REACT</SpanL>
                            </SpanBox>
                            <Progress>
                                <ProgressDiv style={{width: "35%"}}></ProgressDiv>
                            </Progress>
                        </ColItem>
                    </Col>
                    <Col>
                         <ColItem>
                            <SpanBox>
                                <SpanR>80%</SpanR>
                                <SpanL>HTML5</SpanL>
                            </SpanBox>
                            <Progress>
                                <ProgressDiv style={{width: "80%"}}></ProgressDiv>
                            </Progress>
                        </ColItem>
                         <ColItem>
                            <SpanBox>
                                <SpanR>75%</SpanR>
                                <SpanL>CSS3</SpanL>
                            </SpanBox>
                            <Progress>
                                <ProgressDiv style={{width: "75%"}}></ProgressDiv>
                            </Progress>
                        </ColItem>
                    </Col>
                </SkillsRow>
            </Container>
        </SkillsContainer>
     );
}
 
export default Skills;

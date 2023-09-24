import { Container } from "@chakra-ui/react";
import "./App.css";
import { HamburgerIcon } from "@chakra-ui/icons";

function App() {
    return (
        <Container maxW="md" bgColor="#212121">
            <div className="welcome-page">
                <p className="name">Rosie Schofield</p>
                <HamburgerIcon w={8} h={8} color="#da6a6a" />
                <p className="title">
                    <p className="welcome">WELCOME</p> <p className="to">TO</p>{" "}
                    <p className="my">my</p>
                    <p className="portfolio">PORTFOLIO</p>
                </p>
            </div>
            <div className="project-sect">
                <h1 className="proj-header">PROJECTS</h1>
                <p className="sub-header proj1">project 1</p>
                <p className="sub-header proj2">project 2</p>
                <p className="sub-header proj3">project 3</p>
            </div>
            <div className="contact-page">
                <h1 className="connect-header">CONNECT</h1>
                <a href="www.google.com">LinkedIn</a>
                <a href="www.google.com">resume</a>
                <a href="www.google.com">email</a>
            </div>
        </Container>
    );
}

export default App;

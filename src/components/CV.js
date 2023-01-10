import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'

export const CV = () => {
return(
    <section className='CV' id="skills">
        <Container>
            <Row>
                <Col>
                <h2>Curriculum Vitae</h2>
                <p>Third year IT student at Gdynia Maritime University looking for an IT job in the Tricity area. I am in full-time studies, and most interested in a half or 3/4 time job remotely , hybrid, or stationary in the Tricity area. I am a young, communicative, ambitious person looking to gain a lot of experience in the IT.</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} >
                <h3>About my</h3>
                <p>I am currently 22 years old and looking for my first commercial experience in the IT sector. I have a repository on the Github platform where I have all my projects saved. In the future I would like to become a Fullstack developer, so I am interested in working on the forntend as well as the backend. </p>
                <p>Currently, I am also the chairman of the university e-Business Study Circle in Gdynia where I organize the work of members in IT projects using <b>Agile</b> methodology, and organize events at the university.</p>
                <p>Check out our website: <a href='https://kneb.wznj.umg.edu.pl/'><b>KNEB</b></a></p>
                </Col>
                <Col md={4}>
                <h3>Technologies</h3>
                <p>Technologies I learned in university: </p>
                <ul>
                    <li>C#</li>
                    <li>Java</li>
                    <li>HTML and CSS</li>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li>XML</li>
                    <li>JSON</li>
                    <li>Linux</li>
                    <li>Docker</li>
                </ul>
                <p>Technologies I learned in free time: </p>
                <ul>
                    <li>Bootstrap</li>
                    <li>AngularJS</li>
                    <li>ReactJS</li>
                    <li>Kotlin</li>
                    <li>Pyton</li>
                </ul>
                </Col>
                <Col md={4}>
                <h3>Frameworks</h3>
                <p>Frameworks I learned in university: </p>
                <ul>
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>
                    <li>Eclipse</li>
                    <li>Intelij</li>
                    <li>Laravel</li>
                    <li>Postgres</li>
                    <li>MS SQL Manager</li>
                    <li>Spring</li>
                    <li>Android Studio</li>
                </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>Education</h3>
                <ul>
                    <li>Technical School in Wałcz, Poland - IT technician profile</li>
                    <li>Gdynia Maritime University, Poland - IT student</li>
                </ul>
                 <h3>Excperience</h3>
                 <ul>
                    <li>Internship in the company "Tursoft Marek Żuber" in Wałcz, 3 months. Assistance with server administration, building networks.</li>
                    <li>Apprenticeship in the service "Meritum" in Gdańsk, a month. Servicing computer equipment, building networks.</li>
                    <li>Seasonal job in company Micro Automatyka in Gdańsk, 6 months. Machine operator for assembly of SMD type electronic components.</li>
                    <li>I created 2 websites for companies: "The Fox" cleaning company in Gdansk and <a href='http://www.montechserwis.com/'>"Montech Service Marine"</a>.</li>
                    <li>Administers the website of the e-Business study circle: <a href='https://kneb.wznj.umg.edu.pl/'>KNEB</a>.</li>
                </ul>
                </Col>
            </Row>
        </Container>
    </section>
)
}
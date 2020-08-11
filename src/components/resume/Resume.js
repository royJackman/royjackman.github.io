import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';
import resumeItem from './resumeItem';

function Resume() {
    return (
        <Container>
            <Row>
                <Col />
                <Col md={11}>
                    <ul>
                        {new resumeItem(
                            "Applause App Quality", 
                            "Full Stack Software Engineer",
                            [
                                "Developed and deployed features, patches, and migrations for multi-tier apps.",
                                "Worked on a team to plan, program, and review code deployed to thousands of users using Jenkins.",
                                "Implemented requested features in Angular, JavaScipt, TypeScript, Ruby, MySQL, and Java."
                            ], 
                            new Date(2019, 5),
                            new Date(2020, 3), 
                            <Image src="http://seekvectorlogo.com/wp-content/uploads/2019/01/applause-vector-logo.png" alt="Applause logo" fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/java/java-icon.svg",
                                "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
                                "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
                                "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
                                "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
                                "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
                                "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
                                "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_maven.svg"
                            ]
                        )}
                        {new resumeItem(
                            "Biologically Inspired Neural and Dynamical Systems Laboratory",
                            "Research Assistant",
                            [
                                "Performed research in biologically-inspired computing and computational methods.",
                                "Built, tested, and improved machine learning models, biological computing methods, data visualization tools, and application testing pipelines.",
                                "Presented weekly and bi-weekly talks about current and relevant research to lab group."
                            ],
                            new Date(2016, 11),
                            new Date(2019, 5),
                            <Image src="https://groups.cs.umass.edu/binds/wp-content/uploads/sites/21/2019/05/binds.png" alt="BINDS logo" fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                                "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg",
                                "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/cpp/cpp.svg",
                                "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg",
                                "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
                                "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
                                "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
                                "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                            ]
                        )}
                        {new resumeItem(
                            "Twist Bioscience",
                            "Software Development Intern",
                            [
                                "Built and deployed APIs for auto-mailing, multi-stack variable updating, and pipeline integration.",
                                "Coordinated updates in Docker with Kubernetes variables through a custom web API.",
                                "Created a documentation generator using JavaScript, Swagger API, and Ruby on Rails."
                            ],
                            new Date(2018, 4),
                            new Date(2018, 7),
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Twist_Bioscience_Official_Logo.png" alt="Twist logo" fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ruby_on_Rails_logo.svg",
                                "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
                                "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
                                "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
                                "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/swagger.svg",
                                "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg"
                            ]
                        )}
                        {new resumeItem(
                            "Plant Lipid Biotechnology Lab at Ben Gurion University",
                            "Research Assistant",
                            [
                                "Worked with low-res NMR data and performing analysis using PDCO in Matlab on plant lipids for use in the food, pharmaceutical, cosmetics and bio-energy industries.",
                                "Proved correlation between T1, T2 spin interactions and various characteristics of a substance.",
                                "Published a paper on the findings: Energy Fuels 32, 4, 5090-5102."
                            ],
                            new Date(2017, 4),
                            new Date(2017, 7),
                            <Image src="https://upload.wikimedia.org/wikipedia/en/8/8f/Ben-Gurion_University_of_the_Negev_logo2.svg" alt="Ben Gurion University logo" fluid/>,
                            [
                                "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_matlab.svg",
                                "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg",
                                "https://raw.githubusercontent.com/detain/svg-logos/master/svg/latex.svg",
                                "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                                "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/anaconda.svg",
                                "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/cpp/cpp.svg"
                            ]
                        )}
                        {new resumeItem(
                            "Variantyx Inc.",
                            "Software Development Intern",
                            [
                                "Contributed to development of a platform for genomic-based disease testing and diagnosis.",
                                "Helped design and write automation and calculation APIs.",
                                "Project: Pedigree svg image generator."
                            ],
                            new Date(2016, 5),
                            new Date(2016, 7),
                            <Image src="https://www.variantyx.com/wp-content/uploads/2020/05/Variantyx-Logo-2017-white.svg" alt="Variantyx logo"/>,
                            [
                                "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                                "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg",
                                "https://www.vectorlogo.zone/logos/github/github-icon.svg"
                            ]
                        )}
                    </ul>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Resume;
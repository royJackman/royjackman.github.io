import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';
import resumeItem from './resumeItem';

function Resume() {
    return (
        <Container>
            <Row>
                <Col />
                <Col md={13}>
                    <ul>
                        {new resumeItem(
                            "mscs",
                            "University of Massachusetts at Amherst",
                            "Masters of Science in Computer Science focusing on Machine Learning and Artificial Intelligence",
                            [
                                "Courses include artificial intelligence, machine learning, reinforcement learning, natural language processing, neural learning, biological computing, bioinformatics, penetration testing, distributed systems, programming languages, digital forensics, and internet law.",
                                "Performed research on recurrent learning models and lightshift computation.",
                                "GPA: 3.6"
                            ],
                            new Date(2018, 4),
                            new Date(2020, 7),
                            <Image 
                                src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/umass.svg" 
                                alt="UMass logo"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    padding: "5px"
                                }} fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                                "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg",
                                "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
                                "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
                                "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/cpp/cpp.svg",
                                "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_csharp2.svg",
                                "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_matlab.svg",
                                "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg",
                                "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
                                "https://raw.githubusercontent.com/detain/svg-logos/master/svg/xamarin.svg",
                                "https://www.vectorlogo.zone/logos/dotnet/dotnet-icon.svg",
                                "https://png2.cleanpng.com/sh/0c977f414eb61d26d12880a08a4df670/L0KzQYm3VMA4N6dvj5H0aYP2gLBuTftidJoyhNt3dYiwcrLqiCRzaZRwReJubnX3grL7if9vNaVqiAY2b3bpdbB6igZmNaRqRd5yboX7PYbog8hjPWVoUdVqY3G7PomAWck6OmY5Sac7M0GzQ4G8UsY1OWkziNDw/kisspng-kali-linux-backtrack-penetration-test-offensive-se-linux-5ac8b54c9caca8.8799925415231030526418.png",
                                "https://raw.githubusercontent.com/maxogden/hexbin/gh-pages/vector/wireshark.svg",
                                "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
                                "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
                            ],
                            "#f8d197"
                        )}
                        {new resumeItem(
                            "aaq",
                            "Applause App Quality", 
                            "Full Stack Software Engineer",
                            [
                                "Developed and deployed features, patches, and migrations for multi-tier apps.",
                                "Worked on a team to plan, program, and review code deployed to thousands of users using Jenkins.",
                                "Implemented requested features in Angular, JavaScipt, TypeScript, Ruby, MySQL, and Java."
                            ], 
                            new Date(2019, 5),
                            new Date(2020, 3), 
                            <Image 
                                src="http://seekvectorlogo.com/wp-content/uploads/2019/01/applause-vector-logo.png" 
                                alt="Applause logo" 
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    padding: "5px"
                                }} fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/java/java-icon.svg",
                                "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
                                "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
                                "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
                                "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
                                "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
                                "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
                                "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_maven.svg"
                            ],
                            '#f8e297'
                        )}
                        {new resumeItem(
                            "binds",
                            "Biologically Inspired Neural and Dynamical Systems Laboratory",
                            "Research Assistant",
                            [
                                "Performed research in biologically-inspired computing and computational methods.",
                                "Built, tested, and improved machine learning models, biological computing methods, data visualization tools, and application testing pipelines.",
                                "Presented weekly and bi-weekly talks about current and relevant research to lab group."
                            ],
                            new Date(2016, 11),
                            new Date(2019, 5),
                            <Image 
                                src="https://groups.cs.umass.edu/binds/wp-content/uploads/sites/21/2019/05/binds.png" 
                                alt="BINDS logo" 
                                style={{
                                    backgroundColor: "black",
                                    borderRadius: "5px",
                                    padding: "5px"
                                }} fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                                "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg",
                                "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/cpp/cpp.svg",
                                "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg",
                                "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
                                "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
                                "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
                                "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                            ],
                            '#f8e297'
                        )}
                        {new resumeItem(
                            "bscs",
                            "University of Massachusetts at Amherst",
                            "Bachelors of Science in Computer Science focusing on Machine Learning and Artificial Intelligence",
                            [
                                "Courses include artificial intelligence, machine learning, robotics, natural language processing, mobile computing, bioinformatics, advanced algorithm design",
                                "Performed research on reservoir computing and homgenous learning architectures",
                                "Undergraduate thesis: Sine Circle Mappings in Machine Learning",
                                "GPA: 3.5"
                            ],
                            new Date(2015, 8),
                            new Date(2018, 4),
                            <Image 
                                src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/umass.svg" 
                                alt="UMass logo"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    padding: "5px"
                                }} fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                                "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg",
                                "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
                                "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/cpp/cpp.svg",
                                "https://www.vectorlogo.zone/logos/java/java-icon.svg",
                                "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
                                "https://www.vectorlogo.zone/logos/scala-lang/scala-lang-icon.svg",
                                "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
                                "https://raw.githubusercontent.com/detain/svg-logos/master/svg/nativescript.svg",
                                "https://raw.githubusercontent.com/detain/svg-logos/master/svg/vue-9.svg",
                                "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_matlab.svg",
                                "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg",
                                "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
                            ],
                            "#f8d197"
                        )}
                        {new resumeItem(
                            "bsm",
                            "University of Massachusetts at Amherst",
                            "Bachelors of Science in Mathematics focusing on Applied Mathematics",
                            [
                                "Courses include mathematical modeling, computation mathematics, advanced calculus, real anlysis, partial differential equations",
                                "GPA: 3.6"
                            ],
                            new Date(2015, 8),
                            new Date(2018, 4),
                            <Image 
                                src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/umass.svg" 
                                alt="UMass logo"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    padding: "5px"
                                }} fluid/>,
                            [
                                
                                "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_matlab.svg",
                                "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg",
                                "https://raw.githubusercontent.com/detain/svg-logos/master/svg/mathematica-1.svg",

                            ],
                            "#f8d197"
                        )}
                        {new resumeItem(
                            "ml",
                            "University of Massachusetts at Amherst",
                            "Minor of Linguistics",
                            [
                                "Courses include syntax, early language development, phonetics, natural language processing"
                            ],
                            new Date(2015, 8),
                            new Date(2018, 4),
                            <Image 
                                src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/umass.svg" 
                                alt="UMass logo"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    padding: "5px"
                                }} fluid/>,
                            [],
                            "#f8d197"
                        )}
                        {new resumeItem(
                            "tb",
                            "Twist Bioscience",
                            "Software Development Intern",
                            [
                                "Built and deployed APIs for auto-mailing, multi-stack variable updating, and pipeline integration.",
                                "Coordinated updates in Docker with Kubernetes variables through a custom web API.",
                                "Created a documentation generator using JavaScript, Swagger API, and Ruby on Rails."
                            ],
                            new Date(2018, 4),
                            new Date(2018, 7),
                            <Image 
                                src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Twist_Bioscience_Official_Logo.png" 
                                alt="Twist logo"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    padding: "5px"
                                }} fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ruby_on_Rails_logo.svg",
                                "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
                                "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
                                "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
                                "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/swagger.svg",
                                "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg"
                            ],
                            '#f8e297'
                        )}
                        {new resumeItem(
                            "bgu",
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
                            ],
                            '#f8e297'
                        )}
                        {new resumeItem(
                            "vyx",
                            "Variantyx Inc.",
                            "Software Development Intern",
                            [
                                "Contributed to development of a platform for genomic-based disease testing and diagnosis.",
                                "Helped design and write automation and calculation APIs.",
                                "Project: Pedigree svg image generator."
                            ],
                            new Date(2016, 5),
                            new Date(2016, 7),
                            <Image 
                                src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/ispryndd6bbkizck5dth" 
                                alt="Variantyx logo"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    padding: "5px"
                                }} fluid/>,
                            [
                                "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                                "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg",
                                "https://www.vectorlogo.zone/logos/github/github-icon.svg"
                            ],
                            '#f8e297'
                        )}
                    </ul>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Resume;
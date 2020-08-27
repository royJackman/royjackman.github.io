import React from 'react'
import { Image } from 'react-bootstrap'
import { PYTHON_SVG, NUMPY_SVG, TENSORFLOW_SVG, PYTORCH_SVG, SKLEARN_SVG, CPP_SVG, CSHARP_SVG, MATLAB_SVG, R_SVG, RUST_SVG, XAMARIN_SVG, DOTNET_SVG, KALI_PNG, WIRESHARK_SVG, AWS_SVG, GCLOUD_SVG, EDU_COLOR, JAVA_SVG, MYSQL_SVG, TYPESCRIPT_SVG, JAVASCRIPT_SVG, RUBY_SVG, JENKINS_SVG, MAVEN_SVG, JOB_COLOR, MONGODB_SVG, SCALA_SVG, ANGULAR_SVG, NATIVESCRIPT, VUE_SVG, MATHEMATICA_SVG, ROR_SVG, SWAGGER_SVG, LATEX_SVG, ANACONDA_SVG, GITHUB_SVG, DOCKER_SVG, KUBERNETES_SVG, DJANGO_SVG, MAILCHIMP_SVG, SALESFORCE_SVG } from '../ui/Constants'
import ResumeItem from './ResumeItem'

export const CHRON = ['mscs', 'aaq', 'binds', 'bscs', 'bsm', 'ml', 'tb', 'bgu', 'vyx']
export const WORK = ['aaq', 'binds', 'tb', 'bgu', 'vyx', 'mscs', 'bscs', 'bsm', 'ml']
export const EDU = ['mscs', 'bscs', 'bsm', 'ml', 'aaq', 'binds', 'tb', 'bgu', 'vyx']

const items = {
  aaq: {
    title: 'Applause App Quality',
    position: 'Full Stack Software Engineer',
    bullets: [
      'Developed and deployed features, patches, and migrations for multi-tier apps.',
      'Worked on a team to plan, program, and review code deployed to thousands of users using Jenkins.',
      'Implemented requested features in Angular, JavaScipt, TypeScript, Ruby, MySQL, and Java.'
    ],
    startDate: new Date(2019, 5),
    endDate: new Date(2020, 3),
    logo: {
      src: 'http://seekvectorlogo.com/wp-content/uploads/2019/01/applause-vector-logo.png',
      alt: 'Applause logo',
      style: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '5px'
      }
    },
    tools: [
      JAVA_SVG,
      TYPESCRIPT_SVG,
      JAVASCRIPT_SVG,
      MYSQL_SVG,
      RUBY_SVG,
      JENKINS_SVG,
      MAVEN_SVG
    ],
    itemColor: JOB_COLOR
  },
  bgu: {
    title: 'Plant Lipid Biotechnology Lab at Ben Gurion University',
    position: 'Research Assitant',
    bullets: [
      'Worked with low-res NMR data and performing analysis using PDCO in Matlab on plant lipids for use in the food, pharmaceutical, cosmetics and bio-energy industries.',
      'Proved correlation between T1, T2 spin interactions and various characteristics of a substance.',
      'Published a paper on the findings: Energy Fuels 32, 4, 5090-5102.'
    ],
    startDate: new Date(2017, 4),
    endDate: new Date(2017, 7),
    logo: {
      src: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Ben-Gurion_University_of_the_Negev_logo2.svg',
      alt: 'BGU logo',
      style: {}
    },
    tools: [
      MATLAB_SVG,
      R_SVG,
      LATEX_SVG,
      PYTHON_SVG,
      ANACONDA_SVG,
      CPP_SVG
    ],
    itemColor: JOB_COLOR
  },
  binds: {
    title: 'Biologically Inspired Neural and Dynamical Systems Laboratory',
    position: 'Research Assistant',
    bullets: [
      'Performed research in biologically-inspired computing and computational methods.',
      'Built, tested, and improved machine learning models, biological computing methods, data visualization tools, and application testing pipelines.',
      'Presented weekly and bi-weekly talks about current and relevant research to lab group.'
    ],
    startDate: new Date(2016, 11),
    endDate: new Date(2019, 5),
    logo: {
      src: 'https://groups.cs.umass.edu/binds/wp-content/uploads/sites/21/2019/05/binds.png',
      alt: 'BINDS logo',
      style: {
        backgroundColor: 'black',
        borderRadius: '5px',
        padding: '5px'
      }
    },
    tools: [
      PYTHON_SVG,
      R_SVG,
      CPP_SVG,
      NUMPY_SVG,
      TENSORFLOW_SVG,
      PYTORCH_SVG,
      AWS_SVG,
      MONGODB_SVG
    ],
    itemColor: JOB_COLOR
  },
  bscs: {
    title: 'University of Massachusetts at Amherst',
    position: 'Bachelors of Science in Computer Science focusing on Machine Learning and Artificial Intelligence',
    bullets: [
      'Courses include artificial intelligence, machine learning, robotics, natural language processing, mobile computing, bioinformatics, advanced algorithm design',
      'Performed research on reservoir computing and homgenous learning architectures',
      'Undergraduate thesis: Sine Circle Mappings in Machine Learning',
      'GPA: 3.5'
    ],
    startDate: new Date(2015, 8),
    endDate: new Date(2018, 4),
    logo: {
      src: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/umass.svg',
      alt: 'UMass logo',
      style: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '5px'
      }
    },
    tools: [
      PYTHON_SVG,
      NUMPY_SVG,
      TENSORFLOW_SVG,
      SKLEARN_SVG,
      CPP_SVG,
      JAVA_SVG,
      JAVASCRIPT_SVG,
      SCALA_SVG,
      ANGULAR_SVG,
      NATIVESCRIPT,
      VUE_SVG,
      MATLAB_SVG,
      R_SVG,
      AWS_SVG
    ],
    itemColor: EDU_COLOR
  },
  bsm: {
    title: 'University of Massachusetts at Amherst',
    position: 'Bachelors of Science in Mathematics focusing on Applied Mathematics',
    bullets: [
      'Courses include mathematical modeling, computation mathematics, advanced calculus, real anlysis, partial differential equations',
      'GPA: 3.6'
    ],
    startDate: new Date(2015, 8),
    endDate: new Date(2018, 4),
    logo: {
      src: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/umass.svg',
      alt: 'UMass logo',
      style: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '5px'
      }
    },
    tools: [
      MATLAB_SVG,
      R_SVG,
      MATHEMATICA_SVG
    ],
    itemColor: EDU_COLOR
  },
  ml: {
    title: 'University of Massachusetts at Amherst',
    position: 'Minor of Linguistics',
    bullets: [
      'Courses include syntax, early language development, phonetics, natural language processing'
    ],
    startDate: new Date(2015, 8),
    endDate: new Date(2018, 4),
    logo: {
      src: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/umass.svg',
      alt: 'UMass logo',
      style: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '5px'
      }
    },
    tools: [],
    itemColor: EDU_COLOR
  },
  mscs: {
    title: 'University of Massachusetts at Amherst',
    position: 'Masters of Science in Computer Science focusing on Machine Learning and Artificial Intelligence',
    bullets: [
      'Courses include artificial intelligence, machine learning, reinforcement learning, natural language processing, neural learning, biological computing, bioinformatics, penetration testing, distributed systems, programming languages, digital forensics, and internet law.',
      'Performed research on recurrent learning models and lightshift computation.',
      'GPA: 3.6'
    ],
    startDate: new Date(2018, 4),
    endDate: new Date(2020, 7),
    logo: {
      src: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/umass.svg',
      alt: 'Umass logo',
      style: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '5px'
      }
    },
    tools: [
      PYTHON_SVG,
      NUMPY_SVG,
      TENSORFLOW_SVG,
      PYTORCH_SVG,
      SKLEARN_SVG,
      CPP_SVG,
      CSHARP_SVG,
      MATLAB_SVG,
      R_SVG,
      RUST_SVG,
      XAMARIN_SVG,
      DOTNET_SVG,
      KALI_PNG,
      WIRESHARK_SVG,
      AWS_SVG,
      GCLOUD_SVG
    ],
    itemColor: EDU_COLOR
  },
  tb: {
    title: 'Twist Bioscience',
    position: 'Software Development Intern',
    bullets: [
      'Built and deployed APIs for auto-mailing, multi-stack variable updating, and pipeline integration.',
      'Coordinated updates in Docker with Kubernetes variables through a custom web API.',
      'Created a documentation generator using JavaScript, Swagger API, and Ruby on Rails.'
    ],
    startDate: new Date(2018, 4),
    endDate: new Date(2018, 7),
    logo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Twist_Bioscience_Official_Logo.png',
      alt: 'Umass logo',
      style: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '5px'
      }
    },
    tools: [
      JAVASCRIPT_SVG,
      ROR_SVG,
      DOCKER_SVG,
      KUBERNETES_SVG,
      DJANGO_SVG,
      SWAGGER_SVG,
      MAILCHIMP_SVG
    ],
    itemColor: JOB_COLOR
  },
  vyx: {
    title: 'Variantyx Inc.',
    position: 'Software Development Intern',
    bullets: [
      'Contributed to development of a platform for genomic-based disease testing and diagnosis.',
      'Helped design and write automation and calculation APIs.',
      'Project: Pedigree svg image generator.'
    ],
    startDate: new Date(2016, 5),
    endDate: new Date(2016, 7),
    logo: {
      src: 'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/ispryndd6bbkizck5dth',
      alt: 'Variantyx logo',
      style: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '5px'
      }
    },
    tools: [
      PYTHON_SVG,
      SALESFORCE_SVG,
      GITHUB_SVG
    ],
    itemColor: JOB_COLOR
  }
}

function ResumeList (order) {
  return (
    <ul>
      {order.map((itemId) => {
        return ResumeItem(
          itemId,
          items[itemId].title,
          items[itemId].position,
          items[itemId].bullets,
          items[itemId].startDate,
          items[itemId].endDate,
          <Image
            src={items[itemId].logo.src}
            alt={items[itemId].logo.alt}
            style={items[itemId].logo.style}
            fluid />,
          items[itemId].tools,
          items[itemId].itemColor
        )
      })}
    </ul>
  )
}

export default ResumeList

import HTLogo from '../assets/HTLogo.png';
import SevoneLogo from '../assets/SevoneLogo.png';
import BINDSLogo from '../assets/BINDSLogo.png';
import ApplauseLogo from '../assets/ApplauseLogo.png';
import BGULogo from '../assets/BGULogo.png';
import * as icon from '../ui/icons';

export const experiences = [
    {
        position: "Cofounder & Lead Full Stack Engineer",
        company: "HeuriTrade, LLC",
        location: "Remote",
        startDate: new Date(2022, 5),
        logo: {
            alt: 'HeuriTrade, LLC.',
            src: String(HTLogo),
        },
        bullets: [
            "Designed, built, and deployed a MERN application for personal crypto autotrading.",
            "Established, managed, and maintained GCloud and docker builds of the application, including error monitoring and integrated API services.",
            "Led the development for building AI models and cryptocurrency exchange interaction APIs within a $2000 budget, earning consistent positive monthly returns from the investment fund.",
        ],
        tools: [
            icon.PythonImageData,
            icon.ReactImageData,
            icon.TypescriptImageData,
            icon.FlaskImageData,
            icon.MongoImageData,
            icon.DjangoImageData,
            icon.TensorflowImageData,
            icon.GoogleCloudImageData,
            icon.BallerinaImageData,
            icon.ExpressImageData,
            icon.DockerImageData,
            icon.GitlabImageData,
        ]
    },
    {
        position: "Full Stack Software Engineer",
        company: "IBM/Sevone",
        location: "Remote",
        startDate: new Date(2021, 4),
        logo: {
            alt: 'SevOne',
            src: String(SevoneLogo),
        },
        bullets: [
            "Built and deployed corporate solutions for data monitoring, visualization, and manipulation for thousands of daily users.",
            "Headed development for geographical data mapping services for live flow monitoring, location-based alerting, and global device telemetry.",
            "Contributed to the development of technical documentation and knowledge sharing initiatives to improve team-wide knowledge and skill sets.",
        ],
        tools: [
            icon.ReactImageData,
            icon.TypescriptImageData,
            icon.ReduxImageData,
            icon.GolangImageData,
            icon.GraphQLImageData,
            icon.DockerImageData,
            icon.GitlabImageData
        ]
    },
    {
        position: "Research Assistant",
        company: "BINDS lab",
        location: "Amherst, MA",
        startDate: new Date(2020, 5),
        endDate: new Date(2021, 4),
        logo: {
            alt: 'BINDS',
            src: String(BINDSLogo),
        },
        bullets: [
            "Worked on cellular automaton learning for music regeneration and weight agnostic mixed activation networks.",
            "Provided weekly tangible updates for models, visualizations, and actionable pipelines.",
            "Built full stack machine learning apps with Redux, Node.js, Python, PyTorch, Tensorflow, AWS",
        ],
        tools: [
            icon.PythonImageData,
            icon.TensorflowImageData,
            icon.PytorchImageData,
            icon.ReduxImageData,
            icon.CPPImageData,
            icon.AWSImageData
        ]
    },
    {
        position: 'Full Stack Software Engineer',
        company: 'Applause App Quality',
        location: 'Framingham, MA',
        startDate: new Date(2019, 5),
        endDate: new Date(2020, 3),
        logo: {
            alt: 'Applause',
            src: String(ApplauseLogo),
        },
        bullets: [
            'Developed and deployed features, patches, and migrations for multi-tier apps.',
            'Worked on a team to plan, program, and review code deployed to thousands of users.',
            'Implemented requested features in Angular, TypeScript, Ruby, SQL, and Java.',
        ],
        tools: [
            icon.AngularImageData,
            icon.JavaImageData,
            icon.TypescriptImageData,
            icon.GradleImageData,
            icon.MySQLImageData,
        ]
    },
    {
        position: "Research Assistant",
        company: "BINDS lab",
        location: "Amherst, MA",
        startDate: new Date(2016, 11),
        endDate: new Date(2019, 5),
        logo: {
            alt: 'BINDS',
            src: String(BINDSLogo),
        },
        bullets: [
            "Performed research in biologically-inspired computing and computational methods.",
            "Built, tested, and improved machine learning models, biological computing methods, data visualization tools, and application testing pipelines.",
            "Developed models in Python, R, C++, Matlab, and tensorflow with MongoDB",
        ],
        tools: [
            icon.PythonImageData,
            icon.TensorflowImageData,
            icon.PytorchImageData,
            icon.RImageData,
            icon.CImageData,
            icon.MatlabImageData,
            icon.MongoImageData
        ]
    },
    {
        position: "Research Assistant",
        company: "Plant Lipid Biotechnology Lab - BGU",
        location: "Be'er Sheva, Israel",
        startDate: new Date(2017, 4),
        endDate: new Date(2017, 7),
        logo: {
            alt: 'BGU',
            src: String(BGULogo),
        },
        bullets: [
            "Worked with low-res NMR data and performing analysis using PDCO in Matlab on plant lipids for use in the food, pharmaceutical, cosmetics and bio-energy industries.",
            "Proved correlation between T1, T2 spin interactions and various characteristics of a substance.",
            "Published a paper on the findings: Energy Fuels 32, 4, 5090-5102.",
        ],
        tools: [
            icon.RImageData,
            icon.MatlabImageData
        ]
    },
    {
        position: "Breathing Expert",
        company: "The Human Experience",
        location: "Universe 616",
        startDate: new Date(1997, 3),
        bullets: [
            "Rock climbing",
            "Interactive narrative",
            "Travel",
        ],
        tools: []
    },
];
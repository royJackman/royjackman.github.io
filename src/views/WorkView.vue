<script setup lang="ts">
import WorkItem from '../components/WorkItem.vue'

const heuritradeBullets = [
    "Co-build and manage a crypto asset valuation start-up by developing a strong business plan, identify company values, execute engineering tasks, and launch effective market strategies to target 8% monthly ROI.",
    "Develop, launch, and unveil a full-stack Typescript MERN application with React.ts, Express.ts, and Node.js to drive personal crypto autotrading by reducing human involvement by 90%.",
    "Manage GCloud and Docker applications, enabling a 15x speedup across integrated API services for high frequency crypto trading through various exchanges.",
    "Research and adopt innovative, next generation programming tools, reducing code footprint by over 50% without loss of functionality.",
    "Managed an operational budget to develop and deploy Artificial Intelligence models, consistently achieving lucrative Returns on Investments (ROIs).",
    "Perform front-end and back-end development processes by writing multithreaded code, building servers, and managing databases to reach a crypto exchange trading response time below 100 microseconds.",
]

const sevoneBullets = [
    "Facilitated thousands of end-users by creating and presenting optimal corporate solutions to improve data visualization, manipulation, and monitoring.",
    "Steered cross-functional teams across 5 departments comprised of Product Managers, UX Designers, and Quality Assurance Managers to accomplish successful project delivery on time and under budget.",
    "Composed technical documentation to deliver critical data regarding new products and services to drive down troubleshooting requests by 80%.",
    "Implemented knowledge sharing across 3 engineering groups to build team collaboration, optimize business performance, manage resources, and oversee documentation management.",
    "Decreased data fetching time by 60% through revised API adaptors across all proprietary systems  to strategically integrate new customers.",
    "Designed and deployed data heavy and highly optimized API services in Golang to serve Typescript React frontend and express midtier applications, eliminating redundancies and reducing the code footprint by 35%.",
]

const secondBindsBullets = [
    "Aided thousands of end-users by leading a cross-functional team to strategically plan, program manage, and assess code ahead of final deployment.",
    "Facilitated public and private stakeholders by developing UX design applications, maximizing simulation speeds by 230x across highly-functional network architecture.",
    "Incorporated Angular to build single-page applications with React and TypeScript."
]

const applauseBullets = [
    "Developed and deployed features, patches, and migrations for multi-tier apps to support networks of thousands of corporate clients and millions of freelance testers.",
    "Engaged with an agile team to plan, program, and review code across multiple codebases, to support thousands of variations for testing windows.",
    "Implemented features in Angular, TypeScript, Ruby, MySQL, and Java.",
]

const firstBindsBullets = [
    "Performed research in biliogically inspired computing and computational methods.",
    "Built, tested, and improved machine learning models, biological computing methods, data visualization tools, and application testing pipelines.",
    "Devoped models in Python, R, C++, Matlab, and tensorflow with MongoDB."
]

const bguBullets = [
    "Worked with low-res NMR data and performing analysis using PDCO in Matlab on plant lipids for use in the food, pharmaceutical, cosmetics, and bio-energy industries.",
    "Proved correlation between T1, T2 spin interactions and various characteristics of a substance.",
    "Published findings: Energy Fuels 32, 4, 5090-5102."
]
</script>

<template>
    <main class="work">
        <WorkItem>
            <template #logo>
                <img width="32px" height="32px" src="../assets/HTLogo.jpeg" />
            </template>
            <template #position>Lead Full Stack Software Engineer</template>
            <template #hook>ML Powered Crypto Asset Valuation</template>
            <template #dates>02/2022-10/2024</template>
            <template #company>HeuriTrade, LLC.</template>
            <template #bullets>
                <li v-for="(bullet, index) in heuritradeBullets" :key="index">
                    {{ bullet }}
                </li>
            </template>
        </WorkItem>
        <WorkItem>
            <template #logo>
                <img width="32px" height="32px" src="../assets/SevOneLogo.webp" />
            </template>
            <template #position>Full Stack Software Engineer</template>
            <template #hook>Realtime Severity & Telemetry Monitoring</template>
            <template #company>IBM/SevOne</template>
            <template #dates>05/2021-05/2023</template>
            <template #bullets>
                <li v-for="(bullet, index) in sevoneBullets" :key="index">
                    {{ bullet }}
                </li>
            </template>
        </WorkItem>
        <WorkItem>
            <template #logo>
                <img width="32px" height="32px" src="../assets/bindsLogo.png" />
            </template>
            <template #position>Research Assistant</template>
            <template #hook>Biomimicry and Dynamical Neural Systems</template>
            <template #dates>05/2020-05/2021</template>
            <template #company>BINDS lab at UMass Amherst</template>
            <template #bullets>
                <li v-for="(bullet, index) in secondBindsBullets" :key="index">
                    {{ bullet }}
                </li>
            </template>
        </WorkItem>
        <WorkItem>
            <template #logo>
                <img width="32px" height="32px" src="../assets/applauseLogo.png" />
            </template>
            <template #position>Full Stack Software Engineer</template>
            <template #hook>Crowd-Sourced Distributed QA Testing</template>
            <template #dates>06/2019-05/2020</template>
            <template #company>Applause</template>
            <template #bullets>
                <li v-for="(bullet, index) in applauseBullets" :key="index">
                    {{ bullet }}
                </li>
            </template>
        </WorkItem>
        <WorkItem>
            <template #logo>
                <img width="32px" height="32px" src="../assets/bindsLogo.png" />
            </template>
            <template #position>Researcher</template>
            <template #hook>Biomimicry and Dynamical Neural Systems</template>
            <template #dates>12/2016-06/2019</template>
            <template #company>BINDS lab at UMass Amherst</template>
            <template #bullets>
                <li v-for="(bullet, index) in firstBindsBullets" :key="index">
                    {{ bullet }}
                </li>
            </template>
        </WorkItem>
        <WorkItem>
            <template #logo>
                <img width="32px" height="32px" src="../assets/bguLogo.png" />
            </template>
            <template #position>Research Assistant</template>
            <template #dates>05/2017-08/2017</template>
            <template #company>Plant Lipid Biotechnology Lab at BGU</template>
            <template #bullets>
                <li v-for="(bullet, index) in bguBullets" :key="index">
                    {{ bullet }}
                </li>
            </template>
        </WorkItem>
    </main>
</template>
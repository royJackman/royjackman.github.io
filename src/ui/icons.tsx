import { Duration } from 'luxon';

export type ImageDataType = {
    alt: string,
    src: string,
    tags: string[],
    timeKnown: Duration,
    linesOfCode: number,
}

export const AngularImageData: ImageDataType = {
    alt: 'Angular',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    tags: ['framework', 'professional', 'frontend'],
    timeKnown: Duration.fromObject({years: 1}),
    linesOfCode: 1000,
};

export const AWSImageData: ImageDataType = {
    alt: 'AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    tags: ['devops', 'educational'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 500,
};

export const BallerinaImageData: ImageDataType = {
    alt: 'Ballerina',
    src: 'https://www.vectorlogo.zone/logos/ballerinaio/ballerinaio-icon.svg',
    tags: ['midtier', 'personal', 'language'],
    timeKnown: Duration.fromObject({years: 1}),
    linesOfCode: 1500,
};

export const BitbucketImageData: ImageDataType = {
    alt: 'BitBucket',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
    tags: ['personal', 'vcs'],
    timeKnown: Duration.fromObject({years: 1}),
    linesOfCode: 300,
};

export const BlenderImageData: ImageDataType = {
    alt: 'Blender',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
    tags: ['personal', 'gamedev'],
    timeKnown: Duration.fromObject({years: 5}),
    linesOfCode: 0,
};

export const CImageData: ImageDataType = {
    alt: 'C',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    tags: ['language', 'educational'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 600,
};

export const CPPImageData: ImageDataType = {
    alt: 'C++',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    tags: ['language', 'educational'],
    timeKnown: Duration.fromObject({years: 3}),
    linesOfCode: 2500,
};

export const CSharpImageData: ImageDataType = {
    alt: 'C#',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    tags: ['language', 'personal', 'gamedev'],
    timeKnown: Duration.fromObject({years: 3}),
    linesOfCode: 3000,
};

export const DjangoImageData: ImageDataType = {
    alt: 'Django',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    tags: ['frameworks', 'personal', 'professional'],
    timeKnown: Duration.fromObject({years: 4}),
    linesOfCode: 2500,
};

export const DockerImageData: ImageDataType = {
    alt: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    tags: ['devops', 'personal', 'professional'],
    timeKnown: Duration.fromObject({years: 3}),
    linesOfCode: 400,
};

export const DotnetImageData: ImageDataType = {
    alt: 'DotNet',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    tags: ['framework', 'personal'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 1200,
}

export const ExpressImageData: ImageDataType = {
    alt: 'ExpressJS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    tags: ['midtier', 'framework', 'personal'],
    timeKnown: Duration.fromObject({years: 1}),
    linesOfCode: 500,
};

export const FlaskImageData: ImageDataType = {
    alt: 'Flask',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    tags: ['backend', 'framework', 'personal', 'professional'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 2000,
};

export const GithubImageData: ImageDataType = {
    alt: 'Github',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    tags: ['professional', 'personal', 'educational', 'vcs'],
    timeKnown: Duration.fromObject({years: 10}),
    linesOfCode: 3000,
};

export const GitlabImageData: ImageDataType = {
    alt: 'Gitlab',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    tags: ['professional', 'vcs'],
    timeKnown: Duration.fromObject({years: 5}),
    linesOfCode: 150,
};

export const GodotImageData: ImageDataType = {
    alt: 'Godot',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
    tags: ['language', 'framework', 'personal', 'gamedev'],
    timeKnown: Duration.fromObject({years: 4}),
    linesOfCode: 3500,
};

export const GolangImageData: ImageDataType = {
    alt: 'Golang',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    tags: ['language', 'backend', 'professional'],
    timeKnown: Duration.fromObject({years: 1}),
    linesOfCode: 300,
};

export const GoogleCloudImageData: ImageDataType = {
    alt: 'GCloud',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    tags: ['devops', 'vcs', 'professional'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 400
};

export const GradleImageData: ImageDataType = {
    alt: 'Gradle',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg',
    tags: ['devops', 'professional'],
    timeKnown: Duration.fromObject({months: 6}),
    linesOfCode: 200,
};

export const GraphQLImageData: ImageDataType = {
    alt: 'GraphQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    tags: ['orm', 'professional'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 400,
};

export const JavaImageData: ImageDataType = {
    alt: 'Java',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    tags: ['language', 'personal', 'professional', 'educational', 'backend'],
    timeKnown: Duration.fromObject({years: 8}),
    linesOfCode: 8000,
};

export const JavascriptImageData: ImageDataType = {
    alt: 'Javascript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    tags: ['language', 'personal', 'professional', 'educational', 'frontend'],
    timeKnown: Duration.fromObject({years: 4}),
    linesOfCode: 4000
};

export const KubernetesImageData: ImageDataType = {
    alt: 'Kubernetes',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    tags: ['devops', 'professional'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 200
};

export const LatexImageData: ImageDataType = {
    alt: 'Latex',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg',
    tags: ['language', 'personal', 'educational'],
    timeKnown: Duration.fromObject({years: 7}),
    linesOfCode: 6000
};

export const MatlabImageData: ImageDataType = {
    alt: 'Matlab',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
    tags: ['language', 'professional', 'educational'],
    timeKnown: Duration.fromObject({years: 3}),
    linesOfCode: 2500,
};

export const MongoImageData: ImageDataType = {
    alt: 'Mongo',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    tags: ['orm', 'personal', 'professional'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 2000,
};

export const MySQLImageData: ImageDataType = {
    alt: 'MySQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    tags: ['orm', 'professional'],
    timeKnown: Duration.fromObject({years: 3}),
    linesOfCode: 1000
};

export const NumpyImageData: ImageDataType = {
    alt: 'Numpy',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    tags: ['framework', 'personal', 'educational'],
    timeKnown: Duration.fromObject({years: 5}),
    linesOfCode: 3000,
};

export const PythonImageData: ImageDataType = {
    alt: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tags: ['language', 'personal', 'professional', 'educational', 'backend'],
    timeKnown: Duration.fromObject({years: 10}),
    linesOfCode: 15000,
};

export const PytorchImageData: ImageDataType = {
    alt: 'Pytorch',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    tags: ['framework', 'personal', 'educational'],
    timeKnown: Duration.fromObject({years: 3}),
    linesOfCode: 1000,
};

export const RImageData: ImageDataType = {
    alt: 'R',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    tags: ['language', 'educational'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 1500,
};

export const ReactImageData: ImageDataType = {
    alt: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    tags: ['framework', 'frontend', 'personal', 'professional'],
    timeKnown: Duration.fromObject({years: 5}),
    linesOfCode: 10000,
};

export const ReduxImageData: ImageDataType = {
    alt: 'Redux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    tags: ['framework', 'frontend', 'professional'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 3000,
};

export const RustImageData: ImageDataType = {
    alt: 'Rust',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    tags: ['language', 'backend', 'personal'],
    timeKnown: Duration.fromObject({years: 3}),
    linesOfCode: 500,
};

export const TensorflowImageData: ImageDataType = {
    alt: 'Tensorflow',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    tags: ['framework', 'personal', 'educational', 'professional'],
    timeKnown: Duration.fromObject({years: 5}),
    linesOfCode: 3000,
};

export const TypescriptImageData: ImageDataType = {
    alt: 'Typescript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tags: ['language', 'frontent', 'personal', 'professional'],
    timeKnown: Duration.fromObject({years: 4}),
    linesOfCode: 6000,
};

export const UnityImageData: ImageDataType = {
    alt: 'Unity',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
    tags: ['framework', 'gamedev', 'personal'],
    timeKnown: Duration.fromObject({years: 2}),
    linesOfCode: 1000,
};

export const XamarinImageData: ImageDataType = {
    alt: 'Xamarin',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg',
    tags: ['framework', 'personal'],
    timeKnown: Duration.fromObject({years: 1}),
    linesOfCode: 500
};

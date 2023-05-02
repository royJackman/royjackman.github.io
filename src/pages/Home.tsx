import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from '@mui/lab';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Collapse,
    Drawer,
    FormControl,
    InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    MenuItem,
    Select,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { animated, config, useSpring } from '@react-spring/web';
import * as icon from '../ui/icons';
import { experiences } from '../assets/text';

type SortType = 'alphabetical' | 'stack' | 'environment' | 'tool' | 'time' | 'loc';

const tags = {
    stack: ['Frontend', 'Midtier', 'Backend', 'Gamedev', 'ORM', 'Devops'],
    environment: ['Professional', 'Educational', 'Personal'],
    tool: ['Language', 'Framework', 'VCS']
};

type WorkExperienceType = {
    position: string,
    company: string,
    location: string,
    startDate: Date,
    endDate?: Date,
    logo?: {
        alt: string,
        src: string,
    },
    bullets: string[],
    tools: icon.ImageDataType[],
};

type ExperienceCardPropsType = {
    exp: WorkExperienceType,
};

const AnimatedCardContent = animated(CardContent);

const ExperienceCard = (props: ExperienceCardPropsType) => {
    const { exp } = props;
    const [expanded, setExpanded] = React.useState(false);
    const dateOptions: Intl.DateTimeFormatOptions = {month: 'long', year: 'numeric'};

    const [styles, api] = useSpring(() => ({
        from: {
            maxHeight: 0,
            padding: 0,
        },
        config: config.slow,
    }));

    React.useEffect(() => {
        api.start({
            maxHeight: expanded ? 350 : 0,
            padding: expanded ? 5 : 0,
        })
    }, [expanded, api]);

    return (
        <TimelineItem sx={{display: 'flex'}}>
            <TimelineOppositeContent color={'text.secondary'}>
                <Typography variant={'subtitle1'}>
                    {(exp.endDate ? exp.endDate.toLocaleDateString("en-US", dateOptions) : 'Current')}
                </Typography>
                <Typography variant={'subtitle1'}>
                    {exp.startDate.toLocaleDateString("en-US",
                        dateOptions
                    )}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Card
                    variant={'outlined'}
                    onClick={() => setExpanded(!expanded)}
                    sx={{
                        padding: '6px',
                        borderRadius: '8px',
                    }}>
                    <CardHeader
                        avatar={
                            exp.logo && <Avatar
                                variant={'square'}
                                alt={exp.logo.alt}
                                src={exp.logo.src}
                                imgProps={{sx: {objectFit: 'contain'}}}/>
                        }
                        title={exp.position}
                        subheader={exp.company}
                        titleTypographyProps={{variant: 'h6'}}
                        subheaderTypographyProps={{fontStyle: 'italic'}}
                        sx={{
                            backgroundColor: '#32302F',
                        }}
                    />
                    <CardContent sx={{
                        backgroundColor: "#3C3836",
                        padding: 0,
                        display: 'grid',
                    }}>
                        <Stack direction={'row'} spacing={2} padding={1} overflow={'auto'}>
                            {exp.tools.map((tool) => {
                                return (
                                    <Avatar
                                        alt={tool.alt}
                                        key={tool.alt}
                                        src={tool.src}
                                        variant={'square'}/>
                                )
                            })}
                        </Stack>
                    </CardContent>
                    <AnimatedCardContent style={styles} sx={{backgroundColor: "#282828"}}>
                        <List sx={{listStyleType: 'disc', pl: 4}}>
                            {exp.bullets.map(bullet => {
                                return (
                                    <ListItem key={bullet.slice(0, 19)} sx={{display: 'list-item'}}>{bullet}</ListItem>
                                )
                            })}
                        </List>
                    </AnimatedCardContent>
                </Card>
            </TimelineContent>
        </TimelineItem>
    )
}

const TimelineItems = () => {
    return (
        <Timeline
            sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
            },
            }}
        >
            {experiences.map(exp => (
                <ExperienceCard key={exp.company} exp={exp} />
            ))}
        </Timeline>
    )
}

const Home = () => {
    const [toolsExpanded, setToolsExpanded] = React.useState(false);
    const [sort, setSort] = React.useState<SortType>('alphabetical');

    const toolItem = (tool: icon.ImageDataType) => {
        return <ListItem
            key={tool.alt}
            onClick={() => setToolsExpanded(!toolsExpanded)}>
            <ListItemIcon>
                <Avatar
                    src={tool.src}
                    alt={tool.alt}
                    variant={'rounded'}/>
            </ListItemIcon>
            <ListItemText primary={tool.alt} sx={{maxWidth: '16ch'}} />
        </ListItem>
    };

    const theme = useTheme();
    const mediumUp = useMediaQuery(theme.breakpoints.up('md'));

    const sortedIconsDict: {
        headers: string[],
        groups: icon.ImageDataType[][]
    } = React.useMemo(() => {
        const extracted = Object.values(icon);
        switch(sort) {
            case 'alphabetical':
                return {
                    headers: [],
                    groups: [extracted.sort()]
                };
            case 'environment':
                return {
                    headers: tags.environment,
                    groups: tags.environment.map((tag) => {
                        return extracted.filter((i) => i.tags.includes(tag.toLowerCase())).sort()
                    })
                };
            case 'stack':
                return {
                    headers: tags.stack,
                    groups: tags.stack.map((tag) => {
                        return extracted.filter((i) => i.tags.includes(tag.toLowerCase())).sort()
                    })
                };
            case 'tool':
                return {
                    headers: tags.tool,
                    groups: tags.tool.map((tag) => {
                        return extracted.filter((i) => i.tags.includes(tag.toLowerCase())).sort()
                    })
                };
            case 'loc':
                return {
                    headers: ['> 5000', '> 1000', '< 1000'],
                    groups: [
                        extracted.filter((e) => e.linesOfCode > 5000).sort((a, b) => b.linesOfCode - a.linesOfCode),
                        extracted.filter((e) => e.linesOfCode > 1000 && e.linesOfCode <= 5000).sort((a, b) => b.linesOfCode - a.linesOfCode),
                        extracted.filter((e) => e.linesOfCode <= 1000).sort((a, b) => b.linesOfCode - a.linesOfCode)
                    ]
                }
            case 'time':
                return {
                    headers: ['> 5 years', '> 1 year', '< 1 year'],
                    groups: [
                        extracted.filter((e) => e.timeKnown.years >= 5).sort((a, b) => b.timeKnown.toMillis() - a.timeKnown.toMillis()),
                        extracted.filter((e) => e.timeKnown.years >= 1 && e.timeKnown.years < 5).sort((a, b) => b.timeKnown.toMillis() - a.timeKnown.toMillis()),
                        extracted.filter((e) => e.timeKnown.years < 1).sort((a, b) => b.timeKnown.toMillis() - a.timeKnown.toMillis())
                    ]
                }
            default:
                return {
                    headers: [],
                    groups: [],
                };
        }
    }, [sort]);

    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 xs={0} sm={1} md={2}/>
                <Grid2 xs={12} sm={10} md={8}>
                    <TimelineItems />
                </Grid2>
                <Grid2 xs={0} sm={1} md={2}/>
            </Grid2>
            {mediumUp && <Drawer
                anchor={'right'}
                open={true}
                variant={'permanent'}>
                <List sx={{backgroundColor: '#3C3836'}}>
                    <Collapse
                        key={'Collapser'}
                        orientation={'horizontal'}
                        in={toolsExpanded}
                        collapsedSize={72}
                    >
                        <ListItem key={'header'} sx={{
                            justifyContent: 'start',
                            padding: [1, 'auto']
                        }}>
                            Toolbox
                        </ListItem>
                        <Collapse
                            key={'MiniCollapser'}
                            in={toolsExpanded}
                        >
                            <ListItem key={'DropDown'}>
                                <FormControl>
                                    <InputLabel>Sort by:</InputLabel>
                                    <Select
                                        value={sort}
                                        label={'Sort by'}
                                        onChange={(event) => setSort(event.target.value as SortType)}
                                        sx={{width: '18ch'}}
                                    >
                                        <MenuItem value={'alphabetical'}>Alphabetically</MenuItem>
                                        <MenuItem value={'stack'}>Stack</MenuItem>
                                        <MenuItem value={'environment'}>Environment</MenuItem>
                                        <MenuItem value={'tool'}>Tool Type</MenuItem>
                                        <MenuItem value={'time'}>Time</MenuItem>
                                        <MenuItem value={'loc'}>Lines of Code</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                        </Collapse>
                        {
                            sortedIconsDict.headers.length ?
                            sortedIconsDict.headers.map((head, idx) => (
                                <>
                                    {toolsExpanded && <ListSubheader
                                        key={head}
                                        sx={{
                                            backgroundColor: '#282828',
                                            borderRadius: '2%'
                                        }}>
                                        {head}
                                    </ListSubheader>}
                                    {sortedIconsDict.groups[idx].map((tool) => {
                                        return toolItem(tool)
                                    })}
                                </>
                            )) :
                            sortedIconsDict.groups[0].map((tool) => {
                                return toolItem(tool)
                            })
                        }
                    </Collapse>
                </List>
            </Drawer>}
        </>
    )
};

export default Home;

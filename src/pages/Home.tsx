import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from '@mui/lab';
import {Avatar, Card, CardContent, CardHeader, List, ListItem, Stack, Typography} from '@mui/material';
import { animated, config, useSpring } from '@react-spring/web';
import * as icon from '../ui/icons';
import { experiences } from '../assets/text';

type WorkExperienceType = {
    position: string,
    company: string,
    location: string,
    startDate: Date,
    endDate?: Date,
    logo?: icon.ImageDataType,
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
                                    <ListItem key={bullet[0]} sx={{display: 'list-item'}}>{bullet}</ListItem>
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
    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={0} sm={1} md={2}/>
            <Grid2 xs={12} sm={10} md={8}>
                <TimelineItems />
            </Grid2>
            <Grid2 xs={0} sm={1} md={2}/>
        </Grid2>
    )
};

export default Home;

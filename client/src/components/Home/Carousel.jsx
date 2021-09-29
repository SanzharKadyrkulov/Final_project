import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    // {
    //     label: 'Kol-Tor',
    //     imgPath:
    //         'data:image/png;base64,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',
    // },
    // {
    //     label: 'Sary-Chelek',
    //     imgPath:
    //         'data:image/jpeg;base64,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',
    // },
    // {
    //     label: 'Barskoon Waterfall',
    //     imgPath:
    //         'data:image/jpeg;base64,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',
    // },
    {
        label: 'Ala-Archa Park',
        imgPath:
            'https://cdn.wallpapersafari.com/4/97/mjLbqz.jpg',
    },
    // {
    //     label: 'Kel-Suu',
    //     imgPath:
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HIXurN8NMchyL4rPaQ_PojVe6RDYAs3bxQ&usqp=CAU',
    // },
    {
        label: 'Racek Hut',
        imgPath:
            'https://img3.wallspic.com/previews/4/5/9/7/4/147954/147954-puzzle-colorfulness-beatport-symmetry-square-x750.jpg',
    },
    {
        label: 'Komsomolets Peak',
        imgPath:
            'https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnViaWtzJTIwY3ViZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 1120,
        flexGrow: 1,
        width: '100vw'
    },
    
    img: {
        height: 700,
        display: 'block',
        // maxWidth: '100vw',
        overflow: 'hidden',
        width: '100vw',
    },
}));

function Carousel() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div
            className={classes.root}
            style={{
                marginTop: "-20px",
            }}
        >
            <AutoPlaySwipeableViews
                controls={false}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}

            /> */}
        </div >
    );
}

export default Carousel;
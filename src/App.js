import React from 'react';
import Header from './components/common/Header';

import SelectDateAndHotel from './components/SelectDateAndHotel';
import SelectRoomAndView from './components/SelectRoomAndView';
import PreviewAndPayment from './components/PreviewAndPayment';
import ReservationSuccess from './components/ReservationSuccess';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import PaymentIcon from '@material-ui/icons/Payment';
import clsx from 'clsx';
import StepConnector from '@material-ui/core/StepConnector';

import './assets/scss/main.scss';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <DateRangeIcon />,
    2: <SingleBedIcon />,
    3: <PaymentIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ['Otel ve Tarih Seçimi', 'Oda Tipi ve Manzara Seçimi', 'Önizleme ve Ödeme İşlemleri'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <SelectDateAndHotel />;
    case 1:
      return <SelectRoomAndView />;
    case 2:
      return <PreviewAndPayment />;
    default:
      return 'Unknown stepIndex';
  }
}

function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function newReservation() {
    localStorage.clear();
    setActiveStep(0);
  }

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header newReservation={newReservation} />
        <div className={classes.root}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className="reservation-steps">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="step-content-wrapper">
            {activeStep === steps.length ? (
              <div>
                <ReservationSuccess newReservation={newReservation} />
              </div>
            ) : (
              <div>
                <Typography component={'span'} variant={'body2'} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div className="step-buttons">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    color="primary"
                    className={classes.backButton}
                  >
                    Geri
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Ödeme Yap ve Bitir' : 'Kaydet ve Devam Et'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;

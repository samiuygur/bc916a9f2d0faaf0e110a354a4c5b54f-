import React from 'react';
import { useEffect, useState } from 'react';
import { getHotels } from '../redux/actions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
//import axios from 'axios';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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

const persons = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
];

function SelectDateAndHotel(props) {
  const classes = useStyles();
  const [firstStep, setFirstStep] = useState({
    hotelId: '',
    enteranceDate: '',
    leaveDate: '',
    adultCount: '',
    childCount: 0
  });
  const { getHotels } = props;

  useEffect(() => {
    getHotels();
  }, [getHotels])

  const handleFirstStep = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setFirstStep({...firstStep, [name]: value})
    localStorage.setItem(name, value);
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="simple-select-label">Rezervasyon yapmak istediğiniz oteli seçiniz.</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        name="hotelId"
        value={firstStep.hotelId}
        onChange={handleFirstStep}
        className="select-hotel"
      >
        {props.hotels.map((hotel, i) => <MenuItem value={hotel.id} key={i}>{hotel.hotel_name}</MenuItem>)}
      </Select>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            id="enterenceDate"
            name="enteranceDate"
            label="Giriş Tarihi"
            type="date"
            value={firstStep.enteranceDate}
            className="select-date"
            onChange={handleFirstStep}
            format="DD-MM-YYYY"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="leaveDate"
            name="leaveDate"
            label="Çıkış Tarihi"
            type="date"
            value={firstStep.leaveDate}
            onChange={handleFirstStep}
            className="select-date"
            format="DD-MM-YYYY"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-select-currency"
            select
            label="Yetişkin Sayısı"
            className="select-person"
            name="adultCount"
            value={firstStep.adultCount}
            onChange={handleFirstStep}
          >
            {persons.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-select-currency"
            select
            label="Çocuk Sayısı"
            name="childCount"
            className="select-person"
            value={firstStep.childCount}
            onChange={handleFirstStep}
          >
            {persons.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </FormControl>
  )
}

const mapStateToProps = state => {
  return {
    hotels: state.getHotelsReducer.hotels,
  }
}

export default connect(mapStateToProps, { getHotels })(SelectDateAndHotel)
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import Typography from '@material-ui/core/Typography';
import ReservationButton from './toolbox/ReservationButton';
import ReservationSummary from './ReservationSummary';
import axios from 'axios';

const reservationUrl = 'https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-bookings'

function ReservationSuccess({ newReservation }) {

    const [reservation, setReservation] = useState([])
    
    useEffect(() => {
        const reservationInfo = {
            hotel_id: parseInt(localStorage.getItem('hotelId')),
            start_date: localStorage.getItem('enteranceDate'),
            end_date: localStorage.getItem('leaveDate'),
            adult: parseInt(localStorage.getItem('adultCount')),
            child: parseInt(localStorage.getItem('childCount')),
            room_type: 2,
            room_scenic: 3,
            price: parseInt(localStorage.getItem('totalPrice')),
            coupon_code: "CODE100",
            card_name: localStorage.getItem('name'),
            card_number: localStorage.getItem('number'),
            card_date_month: localStorage.getItem('expiry').slice(0, 2),
            card_date_year: localStorage.getItem('expiry').slice(3, 7),
            card_cvv: localStorage.getItem('cvc')
        }
        setReservation(reservationInfo)

        axios.post(reservationUrl, reservation).then(response => response.data)
            .then((data) => {
                console.log(data);
            })
    }, [])

    return (
        <Grid container justifyContent="center">
            <Grid item >
                <AssignmentTurnedInOutlinedIcon style={{ color: 'green', margin: '0 auto', fontSize: '100px' }} />
            </Grid>
            <Grid item >
                <Typography variant="h5" align="center">Rezervasyon Kaydınız Alınmıştır.</Typography>
                <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '30px', display: 'block' }}>Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon kaydınızda değişiklik veya yeni rezervasyon yapmak için aşağıdaki linkleri kullanabilirsiniz.</Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" style={{ marginBottom: '30px' }}>
                <Grid item sm={3}>
                    <ReservationButton name="Yeni Rezervasyon Yap" onClick={newReservation} color="primary" />
                </Grid>
                <Grid item sm={3}>
                    <ReservationButton name="Rezervasyonu Güncelle" onClick={newReservation} color="primary" type="update" />
                </Grid>
                <Grid item sm={3}>
                    <ReservationButton name="Rezervasyonu İptal Et" onClick={newReservation} color="primary" />
                </Grid>
            </Grid>
            <Grid container style={{ backgroundColor: '#ccc' }}>
                <Grid container></Grid>
            </Grid>
            <ReservationSummary layout="12" />
        </Grid>
    )

}

export default ReservationSuccess
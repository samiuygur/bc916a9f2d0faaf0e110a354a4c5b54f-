import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import Typography from '@material-ui/core/Typography';
import ReservationButton from './toolbox/ReservationButton';
import ReservationSummary from './ReservationSummary';



function ReservationSuccess({ newReservation }) {

    return (
        <Grid container justifyContent="center">
            <Grid item >
                <AssignmentTurnedInOutlinedIcon style={{ color: 'green', margin: '0 auto', fontSize: '100px' }} />
            </Grid>
            <Grid item >
                <Typography variant="h5" align="center">Rezervasyon Kaydınız Alınmıştır.</Typography>
                <Typography variant="p" style={{ textAlign: 'center', marginBottom: '30px', display: 'block' }}>Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon kaydınızda değişiklik veya yeni rezervasyon yapmak için aşağıdaki linkleri kullanabilirsiniz.</Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" style={{ marginBottom: '30px' }}>
                <Grid item sm="3">
                    <ReservationButton name="Yeni Rezervasyon Yap" onClick={newReservation} color="primary" />
                </Grid>
                <Grid item sm="3">
                    <ReservationButton name="Rezervasyonu Güncelle" onClick={newReservation} color="primary" type="update" />
                </Grid>
                <Grid item sm="3">
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
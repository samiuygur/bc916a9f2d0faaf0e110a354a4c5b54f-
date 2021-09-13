import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

const ReservationSummary = ({layout}) => {
    const [hotelInfo, setHotelInfo] = useState([]);
    useEffect(() => {
        const dateAndhotelInfo = {
            hotelId: localStorage.getItem('hotelId'),
            enteranceDate: localStorage.getItem('enteranceDate'),
            leaveDate: localStorage.getItem('leaveDate'),
            adultCount: localStorage.getItem('adultCount'),
            childCount: localStorage.getItem('childCount'),
            viewType: localStorage.getItem('viewType'),
            roomType: localStorage.getItem('roomType'),
            roomPrice: localStorage.getItem('roomPrice'),
            priceRate: localStorage.getItem('priceRate'),
            dayDiff: localStorage.getItem('dayDiff'),
        }
        setHotelInfo(dateAndhotelInfo)
    }, [])

    const totalPrice = (hotelInfo.roomPrice * hotelInfo.dayDiff) + (hotelInfo.roomPrice * hotelInfo.dayDiff * hotelInfo.priceRate) / 100;
    localStorage.setItem('totalPrice', totalPrice.toFixed(2))

    return (
        <Grid item sm={parseInt(layout)} style={{ backgroundColor: '#ccc', borderRadius: '10px', padding: '20px' }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item sm={6}>
                    <Card style={{ textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h6">
                                Giriş Tarihi:
                            </Typography>
                            <Typography>
                                <Moment format="DD.MM.YYYY">{hotelInfo.enteranceDate}</Moment>

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6}>
                    <Card style={{ textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h6">
                                Çıkış Tarihi:
                            </Typography>
                            <Typography>
                                <Moment format="DD.MM.YYYY">{hotelInfo.leaveDate}</Moment>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item sm={6}>
                    <Card style={{ textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                Yetişkin:
                            </Typography>
                            <Typography gutterBottom>
                                {hotelInfo.adultCount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6}>
                    <Card style={{ textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                Çocuk:
                            </Typography>
                            <Typography gutterBottom>
                                {(hotelInfo.childCount) ? hotelInfo.childCount : 0}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item sm={6}>
                    <Card style={{ textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h6">
                                Oda Tipi:
                            </Typography>
                            <Typography>
                                {hotelInfo.roomType}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6}>
                    <Card style={{ textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h6">
                                Manzara:
                            </Typography>
                            <Typography>
                                {hotelInfo.viewType}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container>
                <Card className="price-summary">
                    <CardContent>
                        <Grid container  >
                            <Grid item sm={6}><Typography gutterBottom variant="h6">Oda Fiyatı</Typography></Grid>
                            <Grid item sm={6} style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">{hotelInfo.roomPrice} TL</Typography></Grid>
                        </Grid>
                        <Grid container  >
                            <Grid item sm={6}><Typography gutterBottom variant="h6">Fiyat Etki Oranı</Typography></Grid>
                            <Grid item sm={6} style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">% {hotelInfo.priceRate}</Typography></Grid>
                        </Grid>
                        <Grid container  >
                            <Grid item sm={6}><Typography gutterBottom variant="h6">Konaklama({hotelInfo.dayDiff} Gün)</Typography></Grid>
                            <Grid item sm={6} style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">{hotelInfo.roomPrice * hotelInfo.dayDiff} TL</Typography></Grid>
                        </Grid>
                        <Grid container  >
                            <Grid item sm={6}><Typography gutterBottom variant="h6">İndirim</Typography></Grid>
                            <Grid item sm={6} style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">-100 TL</Typography></Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container>
                <Card className="price-summary total" style={{ textAlign: 'center' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4">TOPLAM TUTAR</Typography>
                        <Typography gutterBottom variant="h2">{totalPrice.toFixed(2)} TL</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ReservationSummary;
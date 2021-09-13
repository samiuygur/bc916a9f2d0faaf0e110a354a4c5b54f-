import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



function ReservationSuccess() {

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
                    <Button color="primary" variant="contained" >Yeni Rezervasyon Yap</Button>
                </Grid>
                <Grid item sm="3">
                    <Button color="primary" variant="contained" >Rezervasyonu Güncelle</Button>
                </Grid>
                <Grid item sm="3">
                    <Button color="primary" variant="contained" >Rezervasyonu İptal Et</Button>
                </Grid>
            </Grid>
            <Grid container style={{ backgroundColor: '#ccc' }}>
                <Grid container></Grid>
            </Grid>
            <Grid item sm={12} style={{ backgroundColor: '#ccc', borderRadius: '10px', padding: '20px' }} >
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item sm={6}>
                        <Card style={{ textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="h6">
                                    Giriş Tarihi:
                                </Typography>
                                <Typography>
                                    {hotelInfo.enteranceDate}
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
                                    {hotelInfo.leaveDate}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center" justify="center">
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
                                {(hotelInfo.childCount) ? hotelInfo.childCount: 0}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center" justify="center">
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
                                <Grid item sm="6"><Typography gutterBottom variant="h6">Oda Fiyatı</Typography></Grid>
                                <Grid item sm="6" style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">{hotelInfo.roomPrice} TL</Typography></Grid>
                            </Grid>
                            <Grid container  >
                                <Grid item sm="6"><Typography gutterBottom variant="h6">Fiyat Etki Oranı</Typography></Grid>
                                <Grid item sm="6" style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">% {hotelInfo.priceRate}</Typography></Grid>
                            </Grid>
                            <Grid container  >
                                <Grid item sm="6"><Typography gutterBottom variant="h6">Konaklama({hotelInfo.dayDiff} Gün)</Typography></Grid>
                                <Grid item sm="6" style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">5635 TL</Typography></Grid>
                            </Grid>
                            <Grid container  >
                                <Grid item sm="6"><Typography gutterBottom variant="h6">İndirim</Typography></Grid>
                                <Grid item sm="6" style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">-100 TL</Typography></Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container>
                    <Card className="price-summary total" style={{ textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h4">TOPLAM TUTAR</Typography>
                            <Typography gutterBottom variant="h2">7676 TL</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default ReservationSuccess
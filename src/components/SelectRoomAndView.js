import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import { getHotels } from '../redux/actions';
import { connect } from 'react-redux'

import axios from 'axios';

function SelectRoomAndView(props) {

  const hotelDetailUrl = 'https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-details';
  const [hotelDetails, setHotelDetails] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);
  const { getHotels } = props;

  useEffect(() => {
    axios.get(hotelDetailUrl).then(response => response.data)
      .then((data) => {
        setHotelDetails(data);
      })

    const dateAndhotelInfo = {
      hotelId: localStorage.getItem('hotelId'),
      enteranceDate: localStorage.getItem('enteranceDate'),
      leaveDate: localStorage.getItem('leaveDate'),
      adultCount: localStorage.getItem('adultCount'),
      childCount: localStorage.getItem('childCount'),
    }
    setHotelInfo(dateAndhotelInfo);

    getHotels();
  }, [getHotels])

  const handleRoomSelect = (type, price, event) => {
    event.currentTarget.classList.toggle('selected');
    localStorage.setItem('roomType', type);
    localStorage.setItem('roomPrice', price)
  }

  const handleViewSelect = (type, price_rate, event) => {
    event.currentTarget.classList.toggle('selected');
    localStorage.setItem('viewType', type);
    localStorage.setItem('priceRate', price_rate);
    localStorage.setItem('dayDiff', getNumberOfDays(hotelInfo.enteranceDate, hotelInfo.leaveDate))
  }

  const dayCount = <Moment diff={hotelInfo.enteranceDate} unit="days" decimal>{hotelInfo.leaveDate}</Moment>

  const getNumberOfDays = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  }


  return (
    <div>
      <Grid container style={{ backgroundColor: '#ccc', padding: '10px', marginBottom: '30px' }}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">{props.hotels.filter((hotel) => parseInt(hotel.id) === parseInt(hotelInfo.hotelId)).map(hotelName => hotelName.hotel_name)}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            <strong>Giriş Tarihi:</strong> <Moment format="DD.MM.YYYY">{hotelInfo.enteranceDate}</Moment> -&nbsp;
            <strong>Çıkış Tarihi:</strong> <Moment format="DD.MM.YYYY">{hotelInfo.leaveDate}</Moment> - &nbsp;
            <strong>Yetişkin:</strong> {hotelInfo.adultCount} - &nbsp;
            <strong>Çocuk:</strong> {(hotelInfo.childCount) ? hotelInfo.childCount : 0} -&nbsp;
            <strong>Konaklama:</strong> <span id="daydiff">{dayCount}</span> gün
          </Typography>
        </Grid>
      </Grid>
      <Typography gutterBottom variant="h5">
        Oda Tipi Seçimi
      </Typography>
      <Divider style={{ marginBottom: '20px' }} />
      <Grid container spacing={2} style={{ marginBottom: '30px' }}>
        {hotelDetails.filter((hotel) => hotel.hotel_id === parseInt(hotelInfo.hotelId)).map(hotel => (
          hotel.room_type.map((roomType, i) => (
            <Grid item sm={4} xs={12} key={i}>
              <Card>
                <CardActionArea onClick={(event) => handleRoomSelect(roomType.title, roomType.price, event)}>
                  <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    image={roomType.photo}
                    title=""
                  />
                  <CardContent>
                    <Grid container>
                      <Grid item container>
                        <Typography gutterBottom variant="h5" component="h2">
                          {roomType.title}
                        </Typography>
                      </Grid>
                      <Grid item container xs>
                        <Grid item sm={8}>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {dayCount} Gün
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {hotelInfo.adultCount} Yetişkin
                          </Typography>
                        </Grid>
                        <Grid item sm={4}>
                          <Typography variant="h6" component="p">{parseInt(roomType.price)} TL</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ))}
      </Grid>
      <Typography gutterBottom variant="h5">
        Manzara Seçimi
      </Typography>
      <Divider style={{ marginBottom: '20px' }} />
      <Grid container spacing={2}>
        {hotelDetails.filter((hotel) => hotel.hotel_id === parseInt(hotelInfo.hotelId)).map(hotel => (
          hotel.room_scenic.map((room, index) => (
            <Grid item sm={4} xs={12} key={index}>
              <Card>
                <CardActionArea onClick={(event) => handleViewSelect(room.title, room.price_rate, event)}>
                  <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    image={room.photo}
                    title=""
                  />
                  <CardContent>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h5" component="h2">
                          {room.title}
                        </Typography>
                      </Grid>
                      <Grid item container xs>
                        <Grid item sm={10}><Typography variant="body2" color="textSecondary" component="p">
                          Fiyata Etki Oranı
                        </Typography>
                        </Grid>
                        <Grid item sm={2} style={{ textAlign: 'right' }}>
                          <Typography variant="body1" color="primary" component="p">% {room.price_rate}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))

        ))}
      </Grid>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    hotels: state.getHotelsReducer.hotels,
  }
}

export default connect(mapStateToProps, { getHotels })(SelectRoomAndView)
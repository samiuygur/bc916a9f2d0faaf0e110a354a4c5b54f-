import React from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from 'react-credit-cards';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import 'react-credit-cards/es/styles-compiled.css'

export default class PreviewAndPayment extends React.Component {

    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
        hotelId: '',
        enteranceDate: '',
        leaveDate: '',
        adultCount: '',
        childCount: '',
        roomType: '',
        viewType: '',
        roomPrice: '',
        priceRate: '',
        dayDiff: ''
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    getStorageData = () => {
        this.setState({hotelId: localStorage.getItem('hotelId')})
        this.setState({enteranceDate: localStorage.getItem('enteranceDate')})
        this.setState({leaveDate: localStorage.getItem('leaveDate')})
        this.setState({adultCount: localStorage.getItem('adultCount')})
        this.setState({childCount: localStorage.getItem('childCount')})
        this.setState({roomType: localStorage.getItem('roomType')})
        this.setState({viewType: localStorage.getItem('viewType')})
        this.setState({roomPrice: localStorage.getItem('roomPrice')})
        this.setState({priceRate: localStorage.getItem('priceRate')})
        this.setState({dayDiff: localStorage.getItem('dayDiff')})
    }

    componentDidMount() {
        this.getStorageData()
    }

    

    render() {
        const totalPrize = (this.state.roomPrice * this.state.dayDiff) + (this.state.roomPrice * this.state.dayDiff * this.state.priceRate) / 100
        return (
            <Grid container spacing={5}>
                <Grid item sm={6}>
                    <div id="PaymentForm">
                        <Cards
                            cvc={this.state.cvc}
                            expiry={this.state.expiry}
                            focused={this.state.focus}
                            name={this.state.name}
                            number={this.state.number}
                        />
                        <form>
                            <Grid container>
                                <TextField
                                    required
                                    name="name"
                                    id="card-name"
                                    label="Kart Üzerindeki isim"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    className="payment-input"
                                    placeholder="Kart Üzerindeki İsmi Giriniz" />
                            </Grid>
                            <Grid container>
                                <TextField
                                    required
                                    name="number"
                                    type="tel"
                                    id="card-number"
                                    label="Kartın Numarası"
                                    className="payment-input"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                    placeholder="Kart Numarasını Giriniz" />
                            </Grid>
                            <Grid container spacing={5}>
                                <Grid item sm={6}>
                                    <InputMask mask="99/99" onChange={this.handleInputChange} onFocus={this.handleInputFocus}>
                                        {(inputProps) => <TextField required name="expiry" type="text" id="card-number" label="Kart Son Kullanma Tarihi" className="payment-input" placeholder="Son Kullanma Tarihini Giriniz" />}
                                    </InputMask>
                                </Grid>
                                <Grid item sm={6}>
                                    <TextField
                                        required
                                        name="cvc"
                                        type="number"
                                        id="card-number"
                                        label="CVV"
                                        className="payment-input"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        onInput={(e) => {
                                            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3)
                                        }}
                                        placeholder="CVV Numarasını Giriniz" />
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
                <Grid item sm={6} style={{ backgroundColor: '#ccc', borderRadius: '10px' }}>
                    <Grid container spacing={3} alignItems="center" justifyContent="center">
                        <Grid item sm={6}>
                            <Card style={{ textAlign: 'center' }}>
                                <CardContent>
                                    <Typography variant="h6">
                                        Giriş Tarihi:
                                    </Typography>
                                    <Typography>
                                    <Moment format="DD.MM.YYYY">{this.state.enteranceDate}</Moment>
                                        
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
                                    <Moment format="DD.MM.YYYY">{this.state.leaveDate}</Moment>
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
                                    {this.state.adultCount}
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
                                    {(this.state.childCount) ? this.state.childCount: 0}
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
                                    {this.state.roomType}
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
                                    {this.state.viewType}
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
                                    <Grid item sm="6" style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">{this.state.roomPrice} TL</Typography></Grid>
                                </Grid>
                                <Grid container  >
                                    <Grid item sm="6"><Typography gutterBottom variant="h6">Fiyat Etki Oranı</Typography></Grid>
                                    <Grid item sm="6" style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">% {this.state.priceRate}</Typography></Grid>
                                </Grid>
                                <Grid container  >
                                    <Grid item sm="6"><Typography gutterBottom variant="h6">Konaklama({this.state.dayDiff} Gün)</Typography></Grid>
                                    <Grid item sm="6" style={{ textAlign: 'right' }}><Typography gutterBottom variant="h6">{this.state.roomPrice * this.state.dayDiff} TL</Typography></Grid>
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
                                <Typography gutterBottom variant="h2">{ totalPrize } TL</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

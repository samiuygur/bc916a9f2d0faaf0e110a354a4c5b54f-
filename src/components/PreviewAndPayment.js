import React from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from 'react-credit-cards';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import ReservationSummary from './ReservationSummary';
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
                <ReservationSummary layout="6" />
            </Grid>
        );
    }
}

import Grid from '@material-ui/core/Grid';
import ReservationButton from '../toolbox/ReservationButton';
const Header = ({newReservation}) => {

    return (
        <header>
            <Grid container justifyContent="space-between">
                <Grid item >
                    <div className="logo">
                        <span>Otel</span>
                        <span>Rezervasyon Sistemi</span>
                    </div>
                </Grid>
                <Grid item  >
                    <ReservationButton name="Yeni Rezervasyon Yap" onClick={newReservation} />
                </Grid>
            </Grid>
        </header>
    )
}

export default Header;
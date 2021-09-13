import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const Header = () => {

    const makeNewReservation = () => {
        localStorage.clear();
    }

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
                    <Button variant="contained" color="default" onClick={makeNewReservation}>
                        Yeni Rezervasyon yap
                    </Button>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header;
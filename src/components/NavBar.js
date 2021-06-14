// Styles
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Battery90Icon from "@material-ui/icons/Battery90";
import {
  Grid,
  Typography,
  IconButton,
  TextField,
  Container,
  MenuItem,
} from "@material-ui/core";

// Data
import { devices } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    padding: theme.spacing(2),
  },
  select: {
    margin: theme.spacing(1, 0),
    width: "100%",
  },
}));

const NavBar = ({ measurements, state, handleDeviceChange, handleDrawer }) => {
  const classes = useStyles();
  console.log(state.device.name);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}>
            <IconButton onClick={() => handleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item xs={8}>
            {state.activeTab === "charts" && (
              <form noValidate autoComplete="off">
                <TextField
                  select
                  autoFocus
                  fullWidth
                  label="Wybierz urządzenie"
                  value={state.device}
                  onChange={(e) => handleDeviceChange(e.target.value)}
                >
                  {devices.map((device) => (
                    <MenuItem key={device.id} value={device}>
                      {device.name}
                    </MenuItem>
                  ))}
                </TextField>
              </form>
            )}
          </Grid>

          <Grid item xs={2} container justify="flex-end">
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <IconButton>
                  <Battery90Icon />
                </IconButton>
              </Grid>
              <Grid item>
                {measurements.length !== 0 &&
                  (<Typography variant="body1">
                    {
                      measurements
                        .filter(
                          (measurement) =>
                            measurement.deviceId === state.device.id
                        )
                        .slice(-1)[0].battery
                    }
                    V
                  </Typography>)
                }


              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NavBar;

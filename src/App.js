// Styles
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// React
import { useState } from "react";

// Components
import DrawerMenu from "./components/DrawerMenu";
import NavBar from "./components/NavBar";
import Chart from "./components/Chart";
import DataTable from "./components/DataTable";

// Dummy data representing every device and every measurement
export const devices = [
  {
    id: 1,
    name: "texas1",
  },
  {
    id: 2,
    name: "texas2",
  },
  {
    id: 3,
    name: "texas3",
  },
];

export const measurements = [
  {
    id: 1,
    deviceName: "texas1",
    deviceId: 1,
    timestamp: new Date().toLocaleString(),
    battery: 90, // V_bat/V_max                0   -  1    [rad ]
    UV: 320, // Wavelength                      280 -  400  [nm  ]
    illumination: 250, // Unit of illumination  1   -  600  [Lux ]
    airTemp: 32, // Celcius degrees            -40  -  80   [°C  ]
    airHum: 60, // Percentage                   0   -  100  [%   ]
    rain: 2.5, // Milimeters per hour           0   -  7.5  [mm/h]
  },
  {
    id: 2,
    deviceId: 1,
    deviceName: "texas1",
    timestamp: new Date().toLocaleString(),
    battery: 80,
    UV: 340,
    illumination: 4000,
    airTemp: 28,
    airHum: 65,
    rain: 1.2,
  },
  {
    id: 3,
    deviceId: 1,
    deviceName: "texas1",
    timestamp: new Date().toLocaleString(),
    battery: 70,
    UV: 280,
    illumination: 3600,
    airTemp: 27,
    airHum: 49,
    rain: 0,
  },
  {
    id: 4,
    deviceId: 1,
    deviceName: "texas1",
    timestamp: new Date().toLocaleString(),
    battery: 60,
    UV: 400,
    illumination: 3200,
    airTemp: 25,
    airHum: 82,
    rain: 0,
  },
  {
    id: 5,
    deviceId: 1,
    deviceName: "texas1",
    timestamp: new Date().toLocaleString(),
    battery: 70,
    UV: 390,
    illumination: 3350,
    airTemp: 26,
    airHum: 59,
    rain: 2.6,
  },

  {
    id: 6,
    deviceId: 2,
    deviceName: "texas2",
    timestamp: new Date().toLocaleString(),
    battery: 50,
    UV: 320,
    illumination: 1250,
    airTemp: 32,
    airHum: 60,
    rain: 2.5,
  },
  {
    id: 7,
    deviceId: 3,
    deviceName: "texas3",
    timestamp: new Date().toLocaleString(),
    battery: 50,
    UV: 320,
    illumination: 1250,
    airTemp: 32,
    airHum: 60,
    rain: 2.5,
  },
];

// CSS
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
  },
  gridContainer: {
    width: "100%",
    margin: "auto",
    padding: theme.spacing(10)
  },
}));

const App = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    device: devices[0],
    activeTab: "charts",
    drawerIsOpen: false,
  });

  const handleDrawer = (bool) => setState({ ...state, drawerIsOpen: bool });
  const handleTabChange = (tabName) =>
    setState({ ...state, activeTab: tabName });
  const handleDeviceChange = (deviceId) =>
    setState({ ...state, device: deviceId });

  return (
    <Paper elevation={0} className={classes.root}>
      <NavBar
        state={state}
        handleDeviceChange={handleDeviceChange}
        handleDrawer={handleDrawer}
      />
      <DrawerMenu
        state={state}
        handleDrawer={handleDrawer}
        handleTabChange={handleTabChange}
      />

      {state.activeTab === "charts" ? (
        <Grid
          container
          spacing={6}
          className={classes.gridContainer}
          justify="center"
        >
          <Grid item xs={12} md={6} xl={4}>
            <Chart state={state} sensor="airTemp" title="Air Temperature" />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Chart state={state} sensor="airHum" title="Air Humidity" />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Chart state={state} sensor="UV" title="UV" />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Chart state={state} sensor="illumination" title="Illumination" />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Chart state={state} sensor="rain" title="Rain Intensity" />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Chart state={state} sensor="battery" title="Battery Level" />
          </Grid>
        </Grid>
      ) : (
        <DataTable />
      )}
    </Paper>
  );
};

export default App;

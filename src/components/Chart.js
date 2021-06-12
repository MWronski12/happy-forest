// Styles
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// chart.js
import { Line } from "react-chartjs-2";

// Data
import { measurements } from "../App";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 15,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
}));

const Chart = ({ sensor, title, state }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = measurements.filter((m) => m.deviceId === state.device.id);

  const chartData = {
    labels:
      data.length > 10
        ? data.map((m) => m.timestamp).slice(-10)
        : data.map((m) => m.timestamp),
    datasets: [
      {
        label: "dataset",
        data:
          data.length > 10
            ? data.map((m) => m[sensor]).slice(-10)
            : data.map((m) => m[sensor]),
        fill: false,
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
    ],
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;

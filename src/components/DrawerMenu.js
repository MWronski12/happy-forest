// Styles
import { makeStyles } from "@material-ui/core/styles";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import {
  Grid,
  Drawer,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    height: "100%",
  },
  tab: {
    cursor: "pointer",
  },
  activeTab: {
    textDecoration: "underline",
  },
}));

const DrawerMenu = ({ state, handleDrawer, handleTabChange }) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={state.drawerIsOpen}
      variant="temporary"
      onEscapeKeyDown={() => handleDrawer(false)}
      onBackdropClick={() => handleDrawer(false)}
    >
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} container>
            <Grid item xs={10}>
              <Typography variant="h4" gutterBottom>
                Happy Forest
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <IconButton onClick={() => handleDrawer(false)}>
                <MenuOpenIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              className={
                state.activeTab === "charts"
                  ? `${classes.activeTab} ${classes.tab}`
                  : classes.tab
              }
              onClick={() => handleTabChange("charts")}
            >
              Charts
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              className={
                state.activeTab === "tableData"
                  ? `${classes.activeTab} ${classes.tab}`
                  : classes.tab
              }
              onClick={() => handleTabChange("tableData")}
            >
              Table Data
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Drawer>
  );
};

export default DrawerMenu;

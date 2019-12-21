import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "../components/ListItem";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  Paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: "#f7f7f7"
  }
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.Paper}>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Top Ten List
          </Typography>
          <ListItem
            title={"props title"}
            year={"props year"}
            studio={"props studio"}
            main={"props Main"}
          />
        </Box>
      </Paper>
    </Container>
  );
}

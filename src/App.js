import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Appbar from "./components/Appbar";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    borderRadius: 0,
    background: "#122229",
  },
  main: {
    padding: "1rem",
    marginTop: "3rem",
  },
});

const font = "'Cabin', sans-serif";

function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    typography: {
      fontFamily: font,
      button: {
        textTransform: "none",
      },
    },
    palette: {
      primary: {
        main: "#112633",
      },
      secondary: {
        main: "#3dc2cc",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.container}>
        <Appbar />
        <main className={classes.main}>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

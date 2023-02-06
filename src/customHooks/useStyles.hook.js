import { makeStyles } from "tss-react/mui";
import Image from '../assets/1.jpg'

const useStyles = makeStyles()((theme) => ({
  header: {
    fontFamily: "Montserrat, sans-serif",
    color: "#3f51b5",
    letterSpacing: "2px",
    marginBottom: "20px",
    fontSize: "2rem",
  },
  body: {
    textAlign: "center",
    color: "#F5F5F5",
    fontWeight: "semi-bold",
    marginBottom: theme.spacing(3),
  },
  button: {
    fontWeight: "bold",
    marginTop: "40%",
    fontSize:"0.75rem",
    backgroundColor: "whitesmoke",
    color: "#333",
    "&:hover": {
      backgroundColor: "whitesmoke",
    }
  },
}));

export default useStyles;

import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "../shared/button/CustomButton";
import clsx from "clsx";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      marginBottom: 30,
    },
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: 5,
      boxShadow: "0px 2px 10px 5px rgba(0,0,0,0.12)",
      width: 400,
      transition: "all 150ms ease-in-out",
      "&:hover": {
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
      },
    },
    input: {
      width: 300,
      marginBottom: 30,
    },
    user: {
      marginTop: 40,
    },
    button: {
      padding: "10px 70px",
      marginBottom: 40,
    },
  })
);

export type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary";
};

const Login = ({ text, onClick, className, color }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <TextField
          id="standard-basic"
          label="Nom d'utilisateur"
          className={clsx(classes.input, classes.user)}
        />
        <TextField
          id="standard-basic"
          label="Mot de passe"
          type="password"
          className={classes.input}
        />
        <Button text="CONNEXION" className={classes.button} />
      </div>
    </div>
  );
};

export default Login;

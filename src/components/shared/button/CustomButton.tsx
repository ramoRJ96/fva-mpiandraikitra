import React, { MouseEvent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 30,
    },
  })
);

export type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary";
};

const CustomButton = ({ text, onClick, className, color }: Props) => {
  const classes = useStyles();

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (onClick) onClick();
  };

  return (
    <Button
      variant="outlined"
      className={clsx(classes.root, className)}
      color={color || "primary"}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

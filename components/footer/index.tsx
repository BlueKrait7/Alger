import { Paper, Typography, useTheme } from "@material-ui/core";
import Link from "components/link";
import useTranslation from "hooks/translation";
import classes from "./style.module.css";

export default function Footer() {
  const theme = useTheme();
  const t = useTranslation();

  return (
    <Paper
      className={classes.outer}
      style={{
        backgroundColor:
          theme?.palette.type === "dark"
            ? `${theme?.palette.background.paper}`
            : "#3a4852",
      }}
      square
    >
      <div className={`section container ${classes.grid}`}>
        <img
          src="/logo_t.svg"
          className={classes.logo}
          alt="Algerlogo"
        />
        <Typography className={classes.name}>
          &#169; Alger 2022
        </Typography>
        <div className={classes.list}>
          <h3 id="aboutUs">{t("aboutUsFooter")}</h3>
          We are a group of programmers helping each other build new things, whether it be writing complex encryption programs, or simple ciphers. Our goal is to work together to document and model beautiful, helpful and interesting algorithms using code. We are an open-source community - anyone can contribute. We check each other's work, communicate and collaborate to solve problems. We strive to be welcoming, respectful, yet make sure that our code follows the latest programming guidelines.
        </div>
        <div className={classes.list}>
        </div>
      </div>
    </Paper>
  );
}

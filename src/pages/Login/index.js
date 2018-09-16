import React from "react";
import { HMR } from "@pwa/preset-react";
import style from "./index.css";

import "@material/button/dist/mdc.button.css";
import "@material/shape/dist/mdc.shape.css";
import "@material/card/dist/mdc.card.css";
import "@material/select/dist/mdc.select.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

import { Button } from "@rmwc/button";
import { ShapeContainer } from "@rmwc/shape";
import { Card, CardActions } from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import { Select } from "@rmwc/select";

import {loginUserAction} from '../../actions/app';
import {store} from '../../store';

function Login() {
  return (
    <div className={style.login}>
      <Card
        style={{
          width: "100%",
          padding: "1rem"
        }}
      >
        <Typography className={style.header} use="headline1" tag="h1">
          Login
        </Typography>
        <Select
          label="Account"
          outlined
          placeholder=""
          className={style.select}
          options={["Kasey", "Josh", "Courtney"]}
        />
        <CardActions
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "0 1rem"
          }}
        >
          <ShapeContainer
            className={style.shape}
            topLeftCorner="10"
            bottomRightCorner="10"
            outlineWidth="2"
            outlineColor="var(--mdc-theme-primary)"
            backgroundColor="#fff"
          >
            <Button outlined onClick={() => store.dispatch(loginUserAction('Kasey'))}>LOGIN</Button>
          </ShapeContainer>
        </CardActions>
      </Card>
    </div>
  );
}

export default HMR(Login, module);

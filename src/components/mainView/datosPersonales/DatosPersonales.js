import React from "react";
import { FormLabel, TextField } from "@mui/material";
import styles from "./DatosPersonales.module.css";

function DatosPersonales() {
  return (
    <div className={styles.container} elevation={0}>
      <h6 className={styles.title}>Datos Personales</h6>
      <div className={styles.fieldContainer1}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Documento de identidad *
        </FormLabel>
        <TextField label="" size="small" />
      </div>
      <div className={styles.fieldContainer1}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Numero de documento *
        </FormLabel>
        <TextField label="" size="small" />
      </div>
      <div className={styles.fieldContainer}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Apellidos *
        </FormLabel>
        <TextField label="" size="small" />
      </div>
      <div className={styles.fieldContainer}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Nombres *
        </FormLabel>

        <TextField label="" size="small" />
      </div>
      <div className={styles.fieldContainer2}>
        <FormLabel id="demo-controlled-radio-buttons-group"> Edad * </FormLabel>
        <TextField label="" size="small" />
      </div>
    </div>
  );
}

export default DatosPersonales;

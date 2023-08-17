import React from "react";
import { FormLabel, TextField } from "@mui/material";
import styles from "./DatosDeContacto.module.css";


function DatosDeContacto() {
  return (
    <div className={styles.container} elevation={0}>
      <h6 className={styles.title}>Datos de contacto</h6>
      <div className={styles.fieldContainer}>
         <FormLabel id="demo-controlled-radio-buttons-group">
          Telefono *
        </FormLabel>
        <TextField label="" size="small" />
      </div>

    </div>
  );
}

export default DatosDeContacto;

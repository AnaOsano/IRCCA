import React from "react";
import { FormLabel, TextField} from "@mui/material";
import styles from "./DatosDomicilio.module.css";
import StyledMenu from '../StyledMenu'


function Datosdomicilio() {

  return (
    <div className={styles.container} elevation={0}>
      <h6 className={styles.title}>Datos de domicilio</h6>
      <div className={styles.fieldContainerDep}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Departamento *
        </FormLabel>
        <StyledMenu></StyledMenu>
      </div>
      <div className={styles.fieldContainer1}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Localidad *
        </FormLabel>
        <StyledMenu></StyledMenu>
      </div>
      <div className={styles.fieldContainer}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Calle *:
        </FormLabel>
        <TextField label="" size="small" />
      </div>
      <div className={styles.fieldContainerNumero}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Numero *:
        </FormLabel>

        <TextField label="" size="small" />
      </div>
      <div className={styles.fieldContainerDato}>
        <FormLabel id="demo-controlled-radio-buttons-group"> Otros datos *: </FormLabel>
        <TextField label="" size="small" />
      </div>
      <div>
      </div>
    </div>
  );
}

export default Datosdomicilio;

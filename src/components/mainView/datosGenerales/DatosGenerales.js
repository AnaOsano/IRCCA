import React, { useState } from "react";
import { FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";
import styles from "./DatosGenerales.module.css";

function DatosGenerales() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.container} elevation={0}>
     <h6 className={styles.title}>Datos Generales</h6>
        <div className={styles.fieldInfo}>
        <div className={styles.fieldContainer}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Tipo de persona *
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={selectedValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="personaJuridica"
              control={<Radio />}
              label="Persona Juridica"
            />
            <FormControlLabel
              value="personaFisica"
              control={<Radio />}
              label="Persona Fisica"
            />
          </RadioGroup>

        </div>
        <FormLabel id="demo-controlled-radio-buttons-group">
            Domicilio electronico *
          </FormLabel>
          <TextField label=""  size="small"/>
        </div>
    </div>
  );
}

export default DatosGenerales;

import React, { useState } from "react";
import { FormLabel, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import styles from "./Empresa.module.css";

function Empresa() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.container} elevation={0}>
     <h6 className={styles.title}>Empresa unipersonal</h6>
        <div className={styles.fieldInfo}>
        <div className={styles.fieldContainer}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Tiene empresa unipersonal *
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
              label="Si"
            />
            <FormControlLabel
              value="personaFisica"
              control={<Radio />}
              label="No"
            />
          </RadioGroup>

        </div>
        </div>
    </div>
  );
}

export default Empresa;

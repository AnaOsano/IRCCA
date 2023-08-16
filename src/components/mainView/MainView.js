import React from "react";
import styles from "./MainView.module.css";
import DatosGenerales from "./datosGenerales/DatosGenerales";
import DatosPersonales from "./datosPersonales/DatosPersonales";

function MainView() {

  return (
   <div className={styles.container}> <DatosGenerales></DatosGenerales>
   <DatosPersonales></DatosPersonales></div>
  );
}

export default MainView;

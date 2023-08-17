import React from "react";
import styles from "./MainView.module.css";
import DatosGenerales from "./datosGenerales/DatosGenerales";
import DatosPersonales from "./datosPersonales/DatosPersonales";
import DatosDomicilio from "./datosDeDomicilio/DatosDomicilio";
import Empresa from "./empresa/Empresa";
import DatosDeContacto from "./datosDeContacto/DatosDeConacto";



function MainView() {

  return (
   <div className={styles.container}> <DatosGenerales></DatosGenerales>
   <DatosPersonales></DatosPersonales>
   <DatosDeContacto></DatosDeContacto>
   <DatosDomicilio></DatosDomicilio>
   <Empresa></Empresa>
   </div>
  );
}

export default MainView;

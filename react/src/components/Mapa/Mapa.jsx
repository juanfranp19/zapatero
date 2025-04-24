import React, { useState } from "react";
import mapa from "../../assets/mapa.jpeg";
import descripcion from "../../assets/descripcion1.jpeg";

const Mapa = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleAreaClick = (area) => {
    setPopupContent(area);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img src={mapa} useMap="#image-map" alt="image map" />
      <map name="image-map">
        <area shape="rect" coords="14,53,159,164" alt="Aseos" onClick={() => handleAreaClick("")}/>
        <area shape="rect" coords="160,16,326,167" alt="Cocina" onClick={() => handleAreaClick("")}/>
        <area shape="rect" coords="329,16,521,167" alt="Sala VR" onClick={() => handleAreaClick("")}/>
        <area shape="rect" coords="16,232,158,387" alt="Sala Reuniones" onClick={() => handleAreaClick("")}/>
        <area shape="rect" coords="16,392,254,509" alt="Aula Informatica" onClick={() => handleAreaClick("")}/>
        <area shape="rect" coords="259,392,349,507" alt="Despacho" onClick={() => handleAreaClick("")}/>
        <area shape="rect" coords="255,393,520,508" alt="Sala Prototipado" onClick={() => handleAreaClick("")}/>
      </map>

      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
            maxWidth: "90vw",
            maxHeight: "80vh",
            overflow: "auto",
            paddingTop: "10px",
          }}>

          {/* Botón Cerrar en la esquina superior derecha */}
          <button onClick={closePopup} style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "transparent", color: "white", border: "none", fontSize: "16px", cursor: "pointer", zIndex: 2000,}}>
            Cerrar
          </button>

          <p>{popupContent}</p>
          {/* Agregar dos imágenes dentro del popup */}
          <div>
            <img
              src={mapa}
              alt="Imagen 1"
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <img
              src={descripcion}
              alt="Imagen 2"
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mapa;

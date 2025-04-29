import React, { useState } from "react";
import mapa from "../../assets/mapa.jpeg";
import descripcion from "../../assets/descripcion1.jpeg";

const Mapa = () => {
    // Estado que controla si el popup está visible
    const [showPopup, setShowPopup] = useState(false);

    // Estado que guarda el contenido que se mostrará dentro del popup.
    const [popupContent, setPopupContent] = useState("");

    // Recibe el contenido del área
    const handleAreaClick = (area) => {

        // Actualiza el contenido del popup con el valor que se le da.
        setPopupContent(area);

        // Muestra el popup
        setShowPopup(true);
    };

    const closePopup = () => {

        // Oculta el popup
        setShowPopup(false);
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>

            {/* Imagen del mapa */}
            <img src={mapa} useMap="#image-map" alt="image map" />

            {/* Definición de las áreas dentro del mapa */}
            <map name="image-map">
                <area shape="rect" coords="14,53,159,164" alt="Aseo 1" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="160,16,326,167" alt="Cocina" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="329,16,521,167" alt="Sala VR" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="16,232,158,387" alt="Sala Reuniones" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="16,392,254,509" alt="Aula Informatica" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="259,392,349,507" alt="Despacho" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="255,393,520,508" alt="Sala Prototipado" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="527,394,615,509" alt="Almacen 1" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="622,394,769,509" alt="Almacen 2" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="683,239,771,386" alt="Almacen 3" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="527,70,583,233" alt="Almacen 4" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="683,70,770,233" alt="Aseo 2" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="527,241,674,384" alt="Almacén Central" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="165,169,518,386" alt="Salon Cooworking" onClick={() => handleAreaClick("")} />
                <area shape="rect" coords="527,17,769,62" alt="Sala Blanco" onClick={() => handleAreaClick("")} />
            </map>

            {/* Estilo del Popup */}
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
                    <button onClick={closePopup} style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "transparent", color: "white", border: "none", fontSize: "16px", cursor: "pointer", zIndex: 2000, }}>
                        Cerrar
                    </button>

                    {/* Contenido del popup */}
                    <p>{popupContent}</p>

                    {/* Agregamos dos imágenes dentro del popup */}
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

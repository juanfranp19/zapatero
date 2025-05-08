import React, { useState } from "react";
import mapa from "../../assets/mapa.jpeg";
import { Link } from "react-router-dom";

// Objeto que mapea el nombre del área con sus imágenes remotas
const areaData = {
    "Aseo 1": {
        imagenes: [
            { id: 1, url: "http://zapatero.es/storage/public/equipos/imagen/bordadora-brother-model-pr670e.png" },
            { id: 2, url: "http://zapatero.es/storage/public/equipos/imagen/framun-fl1409.png" },
            { id: 3, url: "http://zapatero.es/storage/public/equipos/imagen/gcc-mercury-iii.png" },
            { id: 4, url: "http://zapatero.es/storage/public/equipos/imagen/estampadora-beinsen.png" },
            { id: 5, url: "http://zapatero.es/storage/public/equipos/imagen/maquina-universal-de-ensayos-instron-68tm-10.png" },
            { id: 6, url: "http://zapatero.es/storage/public/equipos/imagen/fresadora-5-ejes-haas-unc-1000.png" },
        ],
    },
};

const Mapa = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    const [popupImages, setPopupImages] = useState({ imagenes: [] });

    const handleAreaClick = (areaName) => {
        const data = areaData[areaName];
        if (data) {
            setPopupContent(areaName);
            setPopupImages(data);
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img src={mapa} useMap="#image-map" alt="image map" />

            <map name="image-map">
                <area shape="rect" coords="14,53,159,164" alt="Aseo 1" onClick={() => handleAreaClick("Aseo 1")} />
                <area shape="rect" coords="160,16,326,167" alt="Cocina" onClick={() => handleAreaClick("Cocina")} />
                <area shape="rect" coords="329,16,521,167" alt="Sala VR" onClick={() => handleAreaClick("Sala VR")} />
                <area shape="rect" coords="16,232,158,387" alt="Sala Reuniones" onClick={() => handleAreaClick("Sala Reuniones")} />
                <area shape="rect" coords="16,392,254,509" alt="Aula Informatica" onClick={() => handleAreaClick("Aula Informatica")} />
                <area shape="rect" coords="259,392,349,507" alt="Despacho" onClick={() => handleAreaClick("Despacho")} />
                <area shape="rect" coords="255,393,520,508" alt="Sala Prototipado" onClick={() => handleAreaClick("Sala Prototipado")} />
                <area shape="rect" coords="527,394,615,509" alt="Almacen 1" onClick={() => handleAreaClick("Almacen 1")} />
                <area shape="rect" coords="622,394,769,509" alt="Almacen 2" onClick={() => handleAreaClick("Almacen 2")} />
                <area shape="rect" coords="683,239,771,386" alt="Almacen 3" onClick={() => handleAreaClick("Almacen 3")} />
                <area shape="rect" coords="527,70,583,233" alt="Almacen 4" onClick={() => handleAreaClick("Almacen 4")} />
                <area shape="rect" coords="683,70,770,233" alt="Aseo 2" onClick={() => handleAreaClick("Aseo 2")} />
                <area shape="rect" coords="527,241,674,384" alt="Almacén Central" onClick={() => handleAreaClick("Almacén Central")} />
                <area shape="rect" coords="165,169,518,386" alt="Salon Cooworking" onClick={() => handleAreaClick("Salon Cooworking")} />
                <area shape="rect" coords="527,17,769,62" alt="Sala Blanco" onClick={() => handleAreaClick("Sala Blanco")} />
            </map>

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
                    }}
                >
                    <button
                        onClick={closePopup}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "transparent",
                            color: "white",
                            border: "none",
                            fontSize: "16px",
                            cursor: "pointer",
                            zIndex: 2000,
                        }}
                    >
                        Cerrar
                    </button>

                    <h3>{popupContent}</h3>

                    <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                        {/* Mostrar miniaturas de las imágenes */}
                        {popupImages.imagenes.map((imagen, index) => (
                            <div key={index} style={{ marginBottom: "10px", marginRight: "20px", textAlign: "center" }}>
                                {/* Link de React que redirige a otra página al hacer clic */}
                                <Link to={`/detalles-maquina/${imagen.id}`} style={{ display: "inline-block", cursor: "pointer" }}>
                                    <img
                                        src={imagen.url}
                                        alt={`Imagen ${imagen.id}`}
                                        style={{
                                            width: "120px",
                                            height: "auto",
                                            marginRight: "10px",
                                            borderRadius: "5px",
                                        }}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mapa;
import React, { useState } from "react";
import mapa from "../../assets/mapa.jpeg";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

// Objeto que mapea el nombre del área con sus imágenes remotas
const areaData = {
    "Salon Cooworking": {
        imagenes: [
            { id: 1, url: `${API_URL}/storage/public/equipos/imagen/bordadora-brother-model-pr670e.png` },
            { id: 2, url: `${API_URL}/storage/public/equipos/imagen/framun-fl1409.png` },
            { id: 3, url: `${API_URL}/storage/public/equipos/imagen/gcc-mercury-iii.png` },
            { id: 4, url: `${API_URL}/storage/public/equipos/imagen/estampadora-beinsen.png` },
            { id: 5, url: `${API_URL}/storage/public/equipos/imagen/maquina-universal-de-ensayos-instron-68tm-10.png` },
            { id: 6, url: `${API_URL}/storage/public/equipos/imagen/fresadora-5-ejes-haas-unc-1000.png` },
            { id: 7, url: `${API_URL}/storage/public/equipos/imagen/cortadora-por-chorro-de-agua-wazer.png` },
            { id: 8, url: `${API_URL}/storage/public/equipos/imagen/roland-srm-20.png` },
            { id: 9, url: `${API_URL}/storage/public/equipos/imagen/fresadora-cnc-sw1325.png` },
            { id: 10, url: `${API_URL}/storage/public/equipos/imagen/fresadora-stepcraft-420.png` },
            { id: 11, url: `${API_URL}/storage/public/equipos/imagen/metal-cnc-haas-meltio.png` },
            { id: 12, url: `${API_URL}/storage/public/equipos/imagen/sigmax-pro-r19.png` },
            { id: 13, url: `${API_URL}/storage/public/equipos/imagen/dimension-bst-1200.png` },
            { id: 14, url: `${API_URL}/storage/public/equipos/imagen/object-30-pro.png` },
            { id: 15, url: `${API_URL}/storage/public/equipos/imagen/discovery-3d.png` },
            { id: 16, url: `${API_URL}/storage/public/equipos/imagen/ender-3-pro.png` },
            { id: 17, url: `${API_URL}/storage/public/equipos/imagen/formlab-form3b.png` },
            { id: 18, url: `${API_URL}/storage/public/equipos/imagen/lapiz-3d-prince.png` },
            { id: 19, url: `${API_URL}/storage/public/equipos/imagen/3d-creality-ender-3.png` },
            { id: 20, url: `${API_URL}/storage/public/equipos/imagen/bq-prusa-i3-hephestos.png` },
            { id: 21, url: `${API_URL}/storage/public/equipos/imagen/bioimpresora-reg4life.png` },
            { id: 22, url: `${API_URL}/storage/public/equipos/imagen/arcilla-delta-wasp-2040.png` },
            { id: 23, url: `${API_URL}/storage/public/equipos/imagen/anycubic-photon-m3-max.png` },
            { id: 24, url: `${API_URL}/storage/public/equipos/imagen/anycubic-photon-mono-m5s.png` },
            { id: 25, url: `${API_URL}/storage/public/equipos/imagen/bambulab-x1-carbon.png` },
        ],
    },
    "Sala VR": {
        imagenes: [
            { id: 41, url: `${API_URL}/storage/public/equipos/imagen/plataforma-de-movimiento-vr.png` },
            { id: 42, url: `${API_URL}/storage/public/equipos/imagen/mocap.png` },
            { id: 43, url: `${API_URL}/storage/public/equipos/imagen/simuladores-vr-conduccion.png` },
            { id: 44, url: `${API_URL}/storage/public/equipos/imagen/meta-quest-2.png` },
            { id: 45, url: `${API_URL}/storage/public/equipos/imagen/meta-quest-3.png` },
            { id: 46, url: `${API_URL}/storage/public/equipos/imagen/hp-reverb-2.png` },
            { id: 47, url: `${API_URL}/storage/public/equipos/imagen/htc-vive-cosmos.png` },
            { id: 48, url: `${API_URL}/storage/public/equipos/imagen/htc-vive-pro.png` },
            { id: 49, url: `${API_URL}/storage/public/equipos/imagen/hololones-2-realidad-aumentada.png` },
        ],
    },
    "Aula Informatica": {
        imagenes: [
            { id: 50, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 51, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 52, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 53, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 54, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 55, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 56, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 57, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 58, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
            { id: 59, url: `${API_URL}/storage/public/equipos/imagen/ordenador-informatica.png` },
        ],
    },
    "Despacho": {
        imagenes: [
            { id: 60, url: `${API_URL}/storage/public/equipos/imagen/monitor-despacho.png` },
            { id: 61, url: `${API_URL}/storage/public/equipos/imagen/monitor-despacho.png` },
            { id: 62, url: `${API_URL}/storage/public/equipos/imagen/f-desingjet-800.png` },
            { id: 63, url: `${API_URL}/storage/public/equipos/imagen/hp-color-laser-mfp-179fnw.png` },
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
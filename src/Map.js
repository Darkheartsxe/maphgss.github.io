import React, { useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import markers from "./markers";

const Map = () => {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const handleMarkerHover = (markerId, isHovered) => {
    setHoveredMarker(isHovered ? markerId : null);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapInteractionCSS>
        <img
          src="/map.png"
          alt="Carte"
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        {markers.map((marker) => (
          <div
            key={marker.id}
            style={{
              position: "absolute",
              left: marker.x,
              top: marker.y,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onMouseEnter={() => handleMarkerHover(marker.id, true)}
            onMouseLeave={() => handleMarkerHover(marker.id, false)}
          >
            <img
              src="/marker.png"
              alt={`Marqueur ${marker.id}`}
              style={{ zIndex: 1 }}
            />
            {hoveredMarker === marker.id && (
              <div
                style={{
                  position: "absolute",
                  bottom: "+100%",
                  background: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  zIndex: 2,
                  whiteSpace: "nowrap", // Empêche le texte de se retourner à la ligne
                }}
              >
                <p>{marker.info}</p>
                <p>{marker.id}</p>
              </div>
            )}
          </div>
        ))}
      </MapInteractionCSS>
    </div>
  );
};

export default Map;

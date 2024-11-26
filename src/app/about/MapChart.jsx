"use client";
import { useState, useEffect } from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from "react-simple-maps";

const geoUrl = "/features.json";

const markers = [
	{
		markerOffset: -30,
		name: "Buenos Aires",
		coordinates: [-58.3816, -34.6037],
	},
	{ markerOffset: 15, name: "Bolivia", coordinates: [-68.1193, -16.4897] },
	{ markerOffset: 15, name: "Brazil", coordinates: [-47.8825, -15.7942] },
	{ markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
	{ markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
	{ markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
	{ markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
	{ markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
	{ markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
	{ markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
	{ markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
	{ markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

const MapChart = () => {
	const [activeName, setActiveName] = useState(
		markers.map((marker) => marker.name)
	);

	let timer;

	const markHandler = (name) => {
		clearTimeout(timer);

		if (name !== activeName) {
			setActiveName(name);
		}

		console.log("work");
		timer = setTimeout(() => {
			setActiveName(null);
			console.log("delete");
		}, 3000);
	};

	const [geoData, setGeoData] = useState(null);

	useEffect(() => {
		fetch(geoUrl)
			.then((response) => response.json())
			.then((data) => setGeoData(data));
	}, []);

	if (!geoData) return <div style={{ color: "black" }}>Loading map...</div>;

	return (
		<ComposableMap
			// projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [-20, 0, 0],
				scale: 190,
			}}
		>
			<Geographies geography={geoUrl}>
				{({ geographies }) =>
					geographies.map((geo) => {
						return (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								fill="#EAEAEC"
								stroke="#D6D6DA"
								style={{
									default: {
										fill: "#EEE",
										transition: "fill 0.5s",
										outline: "none !important",
										position: "relative",
										zIndex: 30,
									},
									hover: {
										fill: "#003459",
										transition: "fill 0.5s",
										outline: "none",
									},
									pressed: {
										fill: "#001e34",
										border: "none",
										outline: "none",
									},
								}}
							/>
						);
					})
				}
			</Geographies>
			{markers.map(({ name, coordinates, markerOffset }) => (
				<Marker
					key={name}
					coordinates={coordinates}
					onMouseEnter={() => markHandler(name)}
				>
					{activeName === name ? (
						<text
							textAnchor="middle"
							y={markerOffset}
							style={{
								fontFamily: "system-ui",
								fill: "#5D5A6D",
								animation: "fadeIn 0.5s",
								userSelect: "none",
							}}
						>
							{name}
						</text>
					) : (
						<g
							style={{
								animation: "fadeIn 1s",
							}}
							fill="none"
							stroke="#FF5533"
							strokeWidth="1.3"
							strokeLinecap="round"
							strokeLinejoin="round"
							transform="translate(-12, -24)"
						>
							<circle cx="12" cy="10" r="3" />
							<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
						</g>
					)}
				</Marker>
			))}
		</ComposableMap>
	);
};

export { MapChart };

# findhydrant

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web app to find fire hydrants and other emergency water sources in Japan using 5-star open data.

## Demo

**Live App: https://github.com/code4fukui/findhydrant

The interface displays a map with icons for various water sources. You can navigate through the nearest locations using the "Previous" and "Next" buttons.

## Features

-   **Finds Various Water Sources:** Locates not just fire hydrants, but also fire cisterns, pools, and other designated water sources.
-   **Interactive Map:** Displays locations on an interactive map powered by Leaflet and Geospatial Information Authority of Japan (GSI) tiles.
-   **Nearest First:** Automatically finds and sorts water sources by distance from your current location.
-   **Easy Navigation:** Use "Previous" and "Next" buttons to cycle through the sorted list of locations.
-   **Detailed Information:** Click on any icon to view details such as classification, address, department in charge, and pipe diameter.
-   **Multi-language Support:** The UI automatically adapts to your browser's language (supports Japanese, English, and more).
-   **Geo3x3 Integration:** Displays the current map center's location as a [Geo3x3](https://geo3x3.com/) code.

## Requirements

This project requires a modern web browser with location services enabled for the best experience.

## Usage

1.  **Open the application:** Navigate to the [demo page](https://code4fukui.github.io/findhydrant/).
2.  **Allow Location Access:** The app will request your location to find the nearest water sources.
3.  **Navigate Results:** Use the **Previous** and **Next** buttons to browse through the nearby locations, ordered by distance. The map will pan to the selected location.
4.  **View Details:** Click on any icon on the map to open a popup with more information about that specific water source.

## Data & Technology

-   **Data Source:** All data is queried live from the **SPARQL Endpoint for Japanese Open Data Platform (ODP)**.
-   **Mapping Library:** [Leaflet](https://leafletjs.com/) with map tiles from the [Geospatial Information Authority of Japan (GSI)](https://maps.gsi.go.jp/development/ichiran.html).
-   **Geocoding:** Uses [Geo3x3](https://geo3x3.com/) to represent map coordinates.
-   **Core Technologies:** Built with vanilla HTML, CSS, and JavaScript (ES Modules).

## Author

-   taisukef ([https://fukuno.jig.jp/](https://fukuno.jig.jp/))

## License

CC BY 4.0
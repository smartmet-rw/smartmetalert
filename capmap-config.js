var alertOptions = {
    subDirectories: '', //'meteorology,hydrology',
    useLocation: false,
    defaultLanguage: 'en-RW',
    dateFormat: 'long', // 'vs. ISOString'
    dateFormatString: 'DD/MM/YYYY, HH:mm', // https://momentjs.com/docs/#/displaying/format/
    mapTileSource: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // https://leaflet-extras.github.io/leaflet-providers/preview/
    displayIssueTimeDirrefence: false,
    zoom: 8,
    center: [-1.5,29.5],
    bounds: {north: -0.6, east: 27.7, south: -3.5, west: 31.5},
    attribution: 'Rwanda Meteorology Agency',
    polygonOptions: {
        fillOpacity: 1,
        strokeOpacity: 1,
        strokeWeight: 3,
	  preventSymbolOverlapping: true,
    displayActiveFor: true,
    },
    useMinorThreat: true,
    dayControl: true,
    day0Control: true,
    day1Control: true,
    day2Control: true,
    day3Control: true,
    day4Control: true,
    allDayControl: true,
    extendedDayControl: true,
    showDayNames: true,
    dayDateFormat: 'DD.MM',
    popUpMaxHeight: false, // maximum height in px
    refresh: 300, // Refresh interval seconds
    areaLimitForMarkers: 0.005,
    iconWidth: 30,
    iconHeight: 30,
    transparentIcons: false,
    customIcons: false,
    showUpdateTime: false,
    showIconLegend: false,
    customLocations: false,
    numberIcons: false,
    timeZone: 'Africa/Kigali',
    eventTypes: {
        // edit: "edit capmap-config.js",
        temperature: 'Temperature',
        visibility: 'Visibility',
        'rainfall,rain': 'Rain',
        wind: 'Wind',
        volcanic: 'Volcanic ash'
    }
};

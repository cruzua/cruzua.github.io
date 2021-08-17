function styleDivIcons(feature) { // вибір іконок svg з style.js
 	return {icon: L.divIcon({
		   		 iconSize: [32, 32], // also can be set through CSS
					 html: svg_icon(feature)})
	}
};

function style_line_group(feature) {
    switch(String(feature.properties['line_group'])) {
        case '1': return { color: "#ff7f00", weight: 7, dashArray: '0', opacity:  0.75 };
        case '2': return { color: '#FF00FF', weight: 7, dashArray: '0', opacity:  0.75 };
        case '3': return { color: '#00FFFF', weight: 7, dashArray: '0', opacity:  0.75 };
        default: return { color: '#1E90FF', weight: 7, dashArray: '0', opacity:  0.33 }
    }
}

function style_line_set(feature) {
    switch(String(feature.properties['line_set'])) {
        case '1700–1721_route_main': return { color: "#FF0000", weight: 5, dashArray: '10', opacity:  0.7 };
        case '1700–1721_route_plus': return { color: '#FF00FF', weight: 2, dashArray: '6', opacity:  0.7 };
        default: return { color: '#1E90FF', weight: 2, dashArray: '6', opacity:  0.33 }
    }
}

function style_area_group(feature) {
    switch(String(feature.properties['area_group'])) {
        case 'фортеця': return { color: "#ae7f2a", weight: 7, dashArray: '10', opacity:  0.7, fillColor: '#ae7f2a', fillOpacity: 0.33 };
        case 'городище': return { color: "green", weight: 7, dashArray: '10', opacity:  0.7, fillColor: 'green', fillOpacity: 0.33 };
        case 'губернія': return { color: "#ae7f2a", weight: 5, dashArray: '10', opacity:  0.7, fillColor: '#ae7f2a', fillOpacity: 0.33 };
        default: return { color: "grey", weight: 7, dashArray: '10', opacity:  0.7, fillColor: 'grey', fillOpacity: 0.33 };
    }
}

ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-5.176937, 6.887325, -5.149092, 6.908193]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIBoundariesPlaces_1 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_NGbekroAGEF_2 = new ol.format.GeoJSON();
var features_NGbekroAGEF_2 = format_NGbekroAGEF_2.readFeatures(json_NGbekroAGEF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NGbekroAGEF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NGbekroAGEF_2.addFeatures(features_NGbekroAGEF_2);
var lyr_NGbekroAGEF_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NGbekroAGEF_2, 
                style: style_NGbekroAGEF_2,
                popuplayertitle: "N'Gbekro AGEF",
                interactive: true,
                title: '<img src="styles/legend/NGbekroAGEF_2.png" /> N\'Gbekro AGEF'
            });
var format_NGbekro30Ha_3 = new ol.format.GeoJSON();
var features_NGbekro30Ha_3 = format_NGbekro30Ha_3.readFeatures(json_NGbekro30Ha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NGbekro30Ha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NGbekro30Ha_3.addFeatures(features_NGbekro30Ha_3);
var lyr_NGbekro30Ha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NGbekro30Ha_3, 
                style: style_NGbekro30Ha_3,
                popuplayertitle: "N'Gbekro 30Ha",
                interactive: true,
                title: '<img src="styles/legend/NGbekro30Ha_3.png" /> N\'Gbekro 30Ha'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ESRIBoundariesPlaces_1.setVisible(true);lyr_NGbekroAGEF_2.setVisible(true);lyr_NGbekro30Ha_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ESRIBoundariesPlaces_1,lyr_NGbekroAGEF_2,lyr_NGbekro30Ha_3];
lyr_NGbekroAGEF_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_NGbekro30Ha_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_NGbekroAGEF_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_NGbekro30Ha_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_NGbekroAGEF_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_NGbekro30Ha_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_NGbekro30Ha_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
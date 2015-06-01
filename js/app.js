(function() {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Group({
                'title': 'Base maps',
                layers: [
                    new ol.layer.Tile({
                        title: 'Water color',
                        type: 'base',
                        visible: false,
                        source: new ol.source.Stamen({
                            layer: 'watercolor'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'OSM',
                        type: 'base',
                        visible: false,
                        source: new ol.source.OSM()
                    }),
                    new ol.layer.Tile({
                        title: 'Satellite',
                        type: 'base',
                        visible: false,
                        source: new ol.source.MapQuest({layer: 'sat'})
                    }),
                    new ol.layer.Tile({
                        title: 'Ortofoto 2014',
                        type: 'base',
                        visible: true,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: { LAYERS: 'ortofoto_5000_2014', VERSION: '1.1.1'}
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Ortofoto 2013',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2013', VERSION: '1.1.1'}
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Ortofoto 2012',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2012', VERSION: '1.1.1'}
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Ortofoto 2011',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2011', VERSION: '1.1.1'}
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Ortofoto 2010',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2010', VERSION: '1.1.1'}
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Ortofoto 2009',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2009', VERSION: '1.1.1'}
                        })
                    }),

                    new ol.layer.Tile({
                        title: 'Ortofoto 2008',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2008', VERSION: '1.1.1'}
                        })
                    }),

                    new ol.layer.Tile({
                        title: 'Ortofoto 2006',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2006', VERSION: '1.1.1'}
                        })
                    }),

                    new ol.layer.Tile({
                        title: 'Ortofoto 2005',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2005', VERSION: '1.1.1'}
                        })
                    }),

                    new ol.layer.Tile({
                        title: 'Ortofoto 2004',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2004', VERSION: '1.1.1'}
                        })
                    }),

                    new ol.layer.Tile({
                        title: 'Ortofoto 2003',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_2006', VERSION: '1.1.1'}
                        })
                    }),

                    new ol.layer.Tile({
                        title: 'Ortofoto 1998',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_98_00', VERSION: '1.1.1'}
                        })
                    }),

                    new ol.layer.Tile({
                        title: 'Ortofoto 1982',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_5000_1982', VERSION: '1.1.1'}
                        })
                    }),

                    new ol.layer.Tile({
                        title: 'Ortofoto 1929',
                        type: 'base',
                        visible: false,
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: {LAYERS: 'ortofoto_2500_1929', VERSION: '1.1.1'}
                        })
                    }),



                ]
            }),
            new ol.layer.Group({
                title: 'Overlays',
                layers: [
                    new ol.layer.Tile({
                        title: 'Countries',
                        source: new ol.source.TileWMS({
                            url: 'http://demo.opengeo.org/geoserver/wms',
                            params: {'LAYERS': 'ne:ne_10m_admin_1_states_provinces_lines_shp'},
                            serverType: 'geoserver'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Topografia',
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: { 'LAYERS': 'cartografia_topografica' }
                        }),
                        visible: false
                    }),
                    new ol.layer.Tile({
                        title: 'Carreteras',
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: { LAYERS: 'redCarreteras', VERSION: '1.1.1'}
                        }),
                        visible: false
                    }),

                    new ol.layer.Tile({
                        title: 'Municipios',
                        source: new ol.source.TileWMS({
                            url: 'http://idena.navarra.es/ogc/wms.aspx?',
                            params: { LAYERS: 'CATAST_Pol_Municipio___', VERSION: '1.1.1'}
                        })
                    }),

                ]
            })
        ],
        view: new ol.View({
            center: ol.proj.transform([ -1.64060,42.77829], 'EPSG:4326', 'EPSG:3857'),
            zoom: 9
        })
    });

    var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Optional label for button
    });
    map.addControl(layerSwitcher);

})();

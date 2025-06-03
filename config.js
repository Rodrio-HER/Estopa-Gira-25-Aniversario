var config = {
    style: 'mapbox://styles/rodrigo112233/cmb3d6irp00jb01sd1gc2drt0',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoicm9kcmlnbzExMjIzMyIsImEiOiJjbWFyeHdremkwZXIwMmlxcnQ2am00YjQxIn0.F9Gtgh2dvVZA8TUwDyQYLA', 
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Recorrido por las 26 ciudades que han vibrado con Estopa',
    subtitle: 'En su gira 25 aniversario la banda catalana ha recorrido 42.000 kilómetros por todo el mundo',
    byline: 'Por Rodrigo Parrado',
    footer: 'Fuente: Estopa, Sony Music',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '18 / 04 / 24 - VENEZUELA' ,
            image: './assets/estopa1.jpg',
            description: '<b>POLIEDRO DE CARACAS - CARACAS<br>| Complejo deportivo | 10.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-66.93850, 10.43372],
                zoom: 17.44,
                pitch: 71,
                bearing: -30.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: '21 / 04 / 24 - EE. UU.' ,
            image: './assets/estopa2.jpg',
            description: '<b>HARD ROCK LIVE - MIAMI<br>| Sala de conciertos | 7.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-80.2116126, 26.0523003],
                zoom: 17.09,
                pitch: 62.50,
                bearing: 57.81
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '24 / 04 / 24 - PERÚ' ,
            image: './assets/estopa3.jpg',
            description: '<b>COSTA 21 - LIMA<br>| Espacio al aire libre | 6.600 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-77.07979656764755, -12.095480653409922],
                zoom: 18,
                pitch: 74.50,
                bearing: 83.15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: '26 / 04 / 24 - CHILE' ,
            image: './assets/estopa4.jpg',
            description: '<b>MOVISTAR ARENA - SANTIAGO DE CHILE<br>|Complejo deportivo | 9.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-70.661944, -33.4627265],
                zoom: 18,
                pitch: 74.50,
                bearing: 83.15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '27 / 04 / 24 - ARGENTINA' ,
            image: './assets/estopa5.jpg',
            description: '<b>LUNA PARK - BUENOS AIRES<br>| Complejo deportivo | 8.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-58.3686914, -34.6024261],
                zoom: 18,
                pitch: 74.50,
                bearing: 83.15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: '11 / 05 / 24 - ESPAÑA' ,
            image: './assets/estopa6.jpg',
            description: '<b>BLBAO ARENA - BILBAO<br>| Complejo deportivo | 14.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-2.9260328, 43.2522022],
                zoom: 18,
                pitch: 74.50,
                bearing: 83.15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: '18 / 05 / 24 - ESPAÑA' ,
            image: './assets/estopa7.jpg',
            description: '<b>PLAZA DE TOROS - ALICANTE<br>| Plaza de toros | 8.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-0.4845371963318571, 38.35258817565724],
                zoom: 18.90,
                pitch: 73.50,
                bearing: 115.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'eighth-identifier',
            alignment: 'right',
            hidden: false,
            title: '25 / 05 / 24 - ESPAÑA' ,
            image: './assets/estopa8.jpg',
            description: '<b>LA CONDOMINA - MURCIA<br>| Plaza de toros | 10.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-1.1225321123953307, 37.98523041737126],
                zoom: 18.90,
                pitch: 73.50,
                bearing: 115.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: '8 / 06 / 24 - ESPAÑA' ,
            image: './assets/estopa9.jpg',
            description: '<b>LA CARTUJA - SEVILLA<br>| Estadio | 45.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-6.00460, 37.41735],
                zoom: 17.31,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'tenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '15 / 06 / 24 - ESPAÑA' ,
            image: './assets/estopa10.jpg',
            description: '<b>CIUDAD DE LAS ARTES Y LAS CIENCIAS - VALENCIA<br>| Espacio al aire libre | 20.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-0.35398989207994497, 39.45669379917191],
                zoom: 17.31,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: '22 / 06 / 24 - ESPAÑA' ,
            image: './assets/estopa11.jpg',
            description: '<b>ESTADIO METROPOLITANO - MADRID<br>| Estadio | 58.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-3.5997158, 40.436053],
                zoom: 17.31,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twelfth-identifier',
            alignment: 'right',
            hidden: false,
            title: '29 / 06 / 24 - ESPAÑA' ,
            image: './assets/estopa12.jpg',
            description: '<b>PLAZA DE TOROS - GRANADA<br>| Plaza de toros | 12.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-3.6076486170599553, 37.189070188736494],
                zoom: 18.30,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'thirteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '6 / 07 / 24 - ESPAÑA' ,
            image: './assets/estopa13.jpg',
            description: '<b>GRANCA LIVE FEST - LAS PALMAS DE GRAN CANARIA<br>| Espacio al aire libre | 30.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-15.45669939883755, 28.10037017347956],
                zoom: 18.30,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourtenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '10 / 07 / 24 - ESPAÑA' ,
            image: './assets/estopa14.jpg',
            description: '<b>ESTADI OLÍMPIC LLUÍS COMPANYS - BARCELONA<br>| Estadio | 60.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [2.1556451, 41.36472],
                zoom: 18.30,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'fifteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '3 / 08 / 24 - ESPAÑA' ,
            image: './assets/estopa15.jpg',
            description: '<b>PARQUE HERMANOS CASTRO - GIJÓN<br>| Espacio al aire libre | 15.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-5.6404321, 43.5398689],
                zoom: 18.30,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sixteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: '9 / 08 / 24 - ESPAÑA' ,
            image: './assets/estopa16.jpg',
            description: '<b>CONCERT MUSIC FESTIVAL - CHICLANA DE LA FRONTERA (Cádiz)<br>| Espacio al aire libre | 7.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-6.207180536618507, 36.39509592745038],
                zoom: 18.30,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'seventeenth-identifier',
            alignment: 'right',
            hidden: false,
            title: '10 / 08 / 24 - ESPAÑA' ,
            image: './assets/estopa17.jpg',
            description: '<b>MARENOSTRUM - FUENGIROLA (Málaga)<br>| Espacio al aire libre | 17.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-4.628471253005024, 36.52422517953038],
                zoom: 18.30,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'eighteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '23 / 08 / 24 - ESPAÑA' ,
            image: './assets/estopa18.jpg',
            description: '<b>RECINTO FERIAL - ALMERÍA<br>| Recinto ferial | 22.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-4.28629, 37.98323],
                zoom: 17.46,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'nineteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: '26 / 08 / 24 - ESPAÑA' ,
            image: './assets/estopa19.jpg',
            description: '<b>OCCDENT SUMMERFEST - CERDANYA (Girona)<br>| Espacio al aire libre | 3.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [1.9306736589629088, 42.42226894252962],
                zoom: 17.46,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twentieth-identifier',
            alignment: 'right',
            hidden: false,
            title: '30 / 08 / 24 - ESPAÑA' ,
            image: './assets/estopa20.jpg',
            description: '<b>JOSÉ COPETE - ALBACETE<br>| Estadio | 17.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-1.85054, 38.97750],
                zoom: 18,
                pitch: 59.50,
                bearing: 101.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twenty first-identifier',
            alignment: 'right',
            hidden: false,
            title: '7 / 09 / 24 - ESPAÑA' ,
            image: './assets/estopa21.jpg',
            description: '<b>TRUI SON FUSTERET - PALMA DE MALLORCA<br>| Espacio al aire libre | 15.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [2.66983, 39.59262],
                zoom: 17.69,
                pitch: 67.50,
                bearing: 12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twenty-two-identifier',
            alignment: 'left',
            hidden: false,
            title: '14 / 09 / 24 - ESPAÑA' ,
            image: './assets/estopa22.jpg',
            description: '<b>ANILLO MEDITERRÁNEO - TARRAGONA<br>| Complejo deportivo | 9.900 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [1.2054554233067514, 41.122728204896475],
                zoom: 17.69,
                pitch: 67.50,
                bearing: 12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twenty-three-identifier',
            alignment: 'left',
            hidden: false,
            title: '21 / 09 / 24 - ESPAÑA' ,
            image: './assets/estopa23.jpg',
            description: '<b>FERIA DE VALLADOLID - VALLADOLID<br>| Recinto ferial | 20.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-4.739440228953266, 41.65595287206812],
                zoom: 17.69,
                pitch: 67.50,
                bearing: 12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twenty-four-identifier',
            alignment: 'right',
            hidden: false,
            title: '28 / 09 / 24 - ESPAÑA' ,
            image: './assets/estopa24.jpg',
            description: '<b>NAVARRA ARENA - PAMPLONA<br>| Complejo deportivo | 14.200 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-1.6352325383997202, 42.79599677097264],
                zoom: 17.69,
                pitch: 67.50,
                bearing: 12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twenty-five-identifier',
            alignment: 'right',
            hidden: false,
            title: '5 / 10 / 24 - ESPAÑA' ,
            image: './assets/estopa25.jpg',
            description: '<b>COLISEUM - A CORUÑA<br>| Complejo deportivo | 8.770 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-8.4096997, 43.3387359],
                zoom: 17.69,
                pitch: 67.50,
                bearing: 12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'twenty-six-identifier',
            alignment: 'right',
            hidden: false,
            title: '11 / 10 / 24 - ESPAÑA' ,
            image: './assets/estopa26.jpg',
            description: '<b>PABELLÓN PRÍNCIPE FELIPE - ZARAGOZA<br>| Complejo deportivo | 8.500 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-0.8662366, 41.6353666],
                zoom: 17.69,
                pitch: 67.50,
                bearing: 12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twenty-seven-identifier',
            alignment: 'left',
            hidden: false,
            title: '18 / 10 / 24 - ESPAÑA' ,
            image: './assets/estopa27.jpg',
            description: '<b>PALAU SANT JORDI - BARCELONA<br>| Complejo deportivo | 18.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [2.1525682, 41.3634668],
                zoom: 17.69,
                pitch: 67.50,
                bearing: 12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twenty-eight-identifier',
            alignment: 'left',
            hidden: false,
            title: '28 / 12 / 24 - ESPAÑA' ,
            image: './assets/estopa28.jpg',
            description: '<b>IFEMA - MADRID<br>| Recinto ferial | 15.000 espectadores | </b> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut arcu at nunc vulputate ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            location: {
                center: [-3.617214, 40.4663707],
                zoom: 17.69,
                pitch: 67.50,
                bearing: 12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
       
    ]
};

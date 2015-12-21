/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-ui.js",
            js+"jquery-ui.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_12',
                            type: 'image',
                            rect: ['-3.3%', '41%', '20.1%', '22%', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px']
                        },
                        {
                            id: 'FIRST',
                            type: 'image',
                            rect: ['-40%', '42.8%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"FIRST.svg",'0px','0px']
                        },
                        {
                            id: '_18',
                            type: 'image',
                            rect: ['41.5%', '18.8%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"18.svg",'0px','0px']
                        },
                        {
                            id: '_16',
                            type: 'image',
                            rect: ['-43.8%', '-17.7%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"16.svg",'0px','0px']
                        },
                        {
                            id: '_15',
                            type: 'image',
                            rect: ['-20.4%', '36.5%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"15.svg",'0px','0px']
                        },
                        {
                            id: '_14',
                            type: 'image',
                            rect: ['-1.8%', '47%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"14.svg",'0px','0px']
                        },
                        {
                            id: '_13',
                            type: 'image',
                            rect: ['8.2%', '24.6%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"13.svg",'0px','0px']
                        },
                        {
                            id: '_122',
                            type: 'image',
                            rect: ['38.1%', '42.7%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"12.svg",'0px','0px']
                        },
                        {
                            id: '_11',
                            type: 'image',
                            rect: ['25.3%', '44.6%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"11.svg",'0px','0px']
                        },
                        {
                            id: '_10',
                            type: 'image',
                            rect: ['44.7%', '-5.2%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"10.svg",'0px','0px']
                        },
                        {
                            id: '_9',
                            type: 'image',
                            rect: ['42.7%', '-30.7%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"9.svg",'0px','0px']
                        },
                        {
                            id: '_8',
                            type: 'image',
                            rect: ['18.7%', '-6.5%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"8.svg",'0px','0px']
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['18%', '-37%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"7.svg",'0px','0px']
                        },
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['-5.6%', '-13.2%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"6.svg",'0px','0px']
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['-37%', '-9%', '116.4%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"5.svg",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['-34.9%', '-36.9%', '116.4%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"4.svg",'0px','0px']
                        },
                        {
                            id: 'text',
                            type: 'image',
                            rect: ['1.3%', '9%', '100%', '85.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"text.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '100%', '100%'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4352,
                    autoPlay: true,
                    data: [
                        [
                            "eid22",
                            "opacity",
                            2592,
                            500,
                            "linear",
                            "${_6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            2136,
                            500,
                            "linear",
                            "${_9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1399,
                            500,
                            "linear",
                            "${_13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            1376,
                            500,
                            "linear",
                            "${_16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            3352,
                            500,
                            "linear",
                            "${_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1836,
                            500,
                            "linear",
                            "${_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            2269,
                            500,
                            "linear",
                            "${_7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            2360,
                            500,
                            "linear",
                            "${_122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            2428,
                            500,
                            "linear",
                            "${_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            2806,
                            500,
                            "linear",
                            "${_8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1756,
                            500,
                            "linear",
                            "${_18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${FIRST}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            3233,
                            500,
                            "linear",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            3852,
                            500,
                            "linear",
                            "${text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            2106,
                            500,
                            "linear",
                            "${_15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1756,
                            500,
                            "linear",
                            "${_14}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-3_edgeActions.js");
})("EDGE-201428339");

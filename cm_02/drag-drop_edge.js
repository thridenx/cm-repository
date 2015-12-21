/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'adamina, serif': '<script src=\"http://use.edgefonts.net/adamina:n4:all.js\"></script>',
            'abril-fatface, serif': '<script src=\"http://use.edgefonts.net/abril-fatface:n4,i4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.11.2.min.js",
            "http://code.jquery.com/jquery-1.11.3.min.js",
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
                            id: 'Text',
                            type: 'text',
                            rect: ['16.1%', '47.9%', '67.7%', '4.3%', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 35px;\">Gr​owing up — that is our new work, and it is total.</span></p>",
                            font: ['abril-fatface, serif', [1.5, "em"], "rgba(0,0,0,1.00)", "700", "none", "", "break-word", "normal"]
                        },
                        {
                            id: '_2_copy',
                            type: 'image',
                            rect: ['38.8%', '45.9%', '172px', '149px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"2%20copy.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['41.2%', '53.2%', '172px', '149px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['38.8%', '45.9%', '112px', '75px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['38.8%', '45.9%', '126px', '92px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['38.8%', '45.9%', '104px', '114px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"7.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_8',
                            type: 'image',
                            rect: ['38.8%', '45.9%', '98px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"8.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_9',
                            type: 'image',
                            rect: ['3.6%', '68.1%', '137px', '111px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"9.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_10',
                            type: 'image',
                            rect: ['46.6%', '12.9%', '134px', '141px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"10.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_12',
                            type: 'image',
                            rect: ['79.6%', '69.9%', '142px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_318d17',
                            type: 'image',
                            rect: ['50.5%', '40%', '172px', '141px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"318d17.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_2637273_orig',
                            type: 'image',
                            rect: ['65.3%', '33.3%', '254px', '249px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"2637273_orig.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: '_1395930815109241292vintage_butterfly_real_purpl_grey-hi',
                            type: 'image',
                            rect: ['75.2%', '53.1%', '186px', '163px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"1395930815109241292vintage%20butterfly%20real%20purpl%20grey-hi.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'b-w-butterfly',
                            type: 'image',
                            rect: ['46.3%', '51.6%', '225px', '232px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b-w-butterfly.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'blue-butterfly-1',
                            type: 'image',
                            rect: ['61.7%', '51.8%', '208px', '196px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"blue-butterfly-1.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'Blue-Butterfly-psd487002',
                            type: 'image',
                            rect: ['55.9%', '46%', '203px', '149px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Blue-Butterfly-psd487002.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'blue-butterfly',
                            type: 'image',
                            rect: ['50.6%', '61.5%', '230px', '217px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"blue-butterfly.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'BUTTERFLY_WING_OPTICS',
                            type: 'image',
                            rect: ['18.2%', '75.1%', '233px', '149px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"BUTTERFLY%20WING%20OPTICS.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly_1_png_stock_by_lubman-d75uqdo-1',
                            type: 'image',
                            rect: ['41.2%', '27.6%', '263px', '217px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly_1_png_stock_by_lubman-d75uqdo-1.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly_1_png_stock_by_lubman-d75uqdo',
                            type: 'image',
                            rect: ['24.9%', '29%', '264px', '218px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly_1_png_stock_by_lubman-d75uqdo.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly_3_png_stock_by_lubman-d75uqyd',
                            type: 'image',
                            rect: ['20.1%', '41.5%', '193px', '150px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly_3_png_stock_by_lubman-d75uqyd.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'Butterfly_Land_and_Up_0086-filtered',
                            type: 'image',
                            rect: ['65.5%', '52.1%', '484px', '272px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Butterfly_Land_and_Up_0086-filtered.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly_PNG10162',
                            type: 'image',
                            rect: ['66.3%', '69.9%', '170px', '163px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly_PNG10162.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly_PNG10442',
                            type: 'image',
                            rect: ['1.5%', '26.5%', '320px', '230px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly_PNG10442.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly_PNG10552',
                            type: 'image',
                            rect: ['19.5%', '11.2%', '333px', '223px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly_PNG10552.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'Butterfly-1-LeapingFrogDesi2',
                            type: 'image',
                            rect: ['25.9%', '58.3%', '325px', '218px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Butterfly-1-LeapingFrogDesi2.png",'0px','0px'],
                            userClass: "butterfly",
                            transform: [[],['243']]
                        },
                        {
                            id: 'butterfly-clip-art-1891650',
                            type: 'image',
                            rect: ['58.7%', '31.7%', '262px', '175px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly-clip-art-1891650.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly-md',
                            type: 'image',
                            rect: ['40.6%', '55.3%', '276px', '297px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly-md.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly-png-image-212',
                            type: 'image',
                            rect: ['68.6%', '23.1%', '382px', '293px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly-png-image-21.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly',
                            type: 'image',
                            rect: ['58.2%', '8.8%', '300px', '230px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'Butterfly1-1',
                            type: 'image',
                            rect: ['11.9%', '51.6%', '290px', '217px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Butterfly1-1.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly12',
                            type: 'image',
                            rect: ['71.1%', '10.2%', '163px', '163px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly12.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'butterfly18',
                            type: 'image',
                            rect: ['86.3%', '53.1%', '133px', '150px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"butterfly18.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'GiantSwallowtail_copy',
                            type: 'image',
                            rect: ['75.8%', '23.9%', '172px', '132px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"GiantSwallowtail%20copy.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'Monarch_Butterfly_Web_full',
                            type: 'image',
                            rect: ['9.5%', '73.7%', '223px', '164px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Monarch%20Butterfly%20Web_full.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'Monarch-Butterfly',
                            type: 'image',
                            rect: ['47.5%', '18.3%', '223px', '196px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Monarch-Butterfly.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'PNG_Transparent_Brown_and_Yellow_Real_Butterfly_Clipart2',
                            type: 'image',
                            rect: ['16.8%', '52.6%', '131px', '101px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"PNG_Transparent_Brown_and_Yellow_Real_Butterfly_Clipart2.png",'0px','0px'],
                            userClass: "butterfly",
                            transform: [[],['33']]
                        },
                        {
                            id: 'PNG_Transparent_Butterfly_Clipart',
                            type: 'image',
                            rect: ['29.8%', '23.3%', '148px', '141px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"PNG_Transparent_Butterfly_Clipart.png",'0px','0px'],
                            userClass: "butterfly",
                            transform: [[],['-37']]
                        },
                        {
                            id: 'queen_alexander_butterfly_by_madetobeunique-d30711b2',
                            type: 'image',
                            rect: ['3.5%', '46.8%', '154px', '196px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"queen_alexander_butterfly_by_madetobeunique-d30711b2.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'Tiger_Swallow_Butterfly',
                            type: 'image',
                            rect: ['6.3%', '12.5%', '126px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Tiger%20Swallow%20Butterfly.png",'0px','0px'],
                            userClass: "butterfly",
                            transform: [[],['30']]
                        },
                        {
                            id: 'Untitled-1',
                            type: 'image',
                            rect: ['15.6%', '29.6%', '131px', '137px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px'],
                            userClass: "butterfly"
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['16.8%', '4.4%', '67.7%', '4.3%', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: center; text-indent: 0%;\">​<span style=\"font-size: 0.7em; word-spacing: 0em; letter-spacing: 0em;\">Drag the butterflies away to read the message.</span></p>",
                            font: ['adamina, serif', [1.5, "em"], "rgba(0,0,0,1.00)", "100", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(235,255,249,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid128",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${PNG_Transparent_Butterfly_Clipart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid102",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_2_copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly_1_png_stock_by_lubman-d75uqdo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${blue-butterfly}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Untitled-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '4.42%',
                            '4.42%'
                        ],
                        [
                            "eid107",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_2637273_orig}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly-md}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly_PNG10442}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${BUTTERFLY_WING_OPTICS}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly_1_png_stock_by_lubman-d75uqdo-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${queen_alexander_butterfly_by_madetobeunique-d30711b2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '16.76%',
                            '16.76%'
                        ],
                        [
                            "eid126",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly-png-image-212}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly-clip-art-1891650}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_1395930815109241292vintage_butterfly_real_purpl_grey-hi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly_3_png_stock_by_lubman-d75uqyd}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Monarch-Butterfly}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly_PNG10552}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Butterfly1-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${butterfly_PNG10162}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${blue-butterfly-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_318d17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${b-w-butterfly}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Blue-Butterfly-psd487002}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${GiantSwallowtail_copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Butterfly_Land_and_Up_0086-filtered}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Monarch_Butterfly_Web_full}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Butterfly-1-LeapingFrogDesi2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0.8333330154418945'
                        ],
                        [
                            "eid51",
                            "opacity",
                            500,
                            2500,
                            "linear",
                            "${TextCopy}",
                            '0.8333330154418945',
                            '0'
                        ],
                        [
                            "eid95",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${PNG_Transparent_Brown_and_Yellow_Real_Butterfly_Clipart2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tiger_Swallow_Butterfly}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drag-drop_edgeActions.js");
})("EDGE-188339156");

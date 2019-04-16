import React from 'react';

const invisible = "white";



class FloorPlan extends React.Component {

    constructor(props) {
        super(props);
        {/* TODO: change all initial room state to sync with average temperature. */}
    }

    colorRender(e) {
    	{/* Used for passing argument to 'fill' property of room SVG component. */}
    	if (this.props.visible[e] === false) {
    		return invisible;
    	} else {
    		return this.props.rooms[e];
    	}
    }

   

    render() {
        const planStyle = {

            width: "717px",
            height: "539px",
            marginTop: "140px",
            viewBox: "0 0 717 539",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            style: "background: #FFFFFF"
        };

        return (
            <svg style={planStyle}>
                <title>floor_plan</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect id="Rectangle" stroke="#979797" strokeWidth="2" x="1" y="1" width="714" height="537" fill="white"></rect>
                    <rect id="Lounge" stroke="#979797" strokeWidth="2" x="16" y="26" width="289" height="182" fill= {this.colorRender(0)} onClick={() => this.props.onClick(0)}></rect>
                    <rect id="Room-1" stroke="#979797" strokeWidth="2" x="16" y="356" width="100" height="182" fill= {this.colorRender(1)} onClick={() => this.props.onClick(1)}></rect>
                    <rect id="Room-2" stroke="#979797" strokeWidth="2" x="133" y="356" width="100" height="182" fill={this.colorRender(2)} onClick={() => this.props.onClick(2)}></rect>
                    <rect id="Room-3" stroke="#979797" strokeWidth="2" x="250" y="356" width="100" height="182" fill={this.colorRender(3)} onClick={() => this.props.onClick(3)}></rect>
                    <rect id="Room-4" stroke="#979797" strokeWidth="2" x="367" y="356" width="100" height="182" fill={this.colorRender(4)} onClick={() => this.props.onClick(4)}></rect>
                    <rect id="Room-5" stroke="#979797" strokeWidth="2" x="484" y="356" width="100" height="182" fill={this.colorRender(5)} onClick={() => this.props.onClick(5)}></rect>
                    <rect id="Room-6" stroke="#979797" strokeWidth="2" x="601" y="356" width="100" height="182" fill={this.colorRender(6)} onClick={() => this.props.onClick(6)}></rect>
                    <text id="Room-0" fontFamily="Roboto" fontSize="28" fontWeight="normal" fill="#000000">
                        <tspan x="114.003315" y="189">Room 0</tspan>
                    </text>
                    <text id="R1" fontFamily="Roboto" fontSize="28" fontWeight="normal" fill="#000000">
                        <tspan x="52.0618785" y="518">R1</tspan>
                    </text>
                    <text id="R2" fontFamily="Roboto" fontSize="28" fontWeight="normal" fill="#000000">
                        <tspan x="172.292818" y="518">R2</tspan>
                    </text>
                    <text id="R3" fontFamily="Roboto" fontSize="28" fontWeight="normal" fill="#000000">
                        <tspan x="287.292818" y="518">R3</tspan>
                    </text>
                    <text id="R4" fontFamily="Roboto" fontSize="28" fontWeight="normal" fill="#000000">
                        <tspan x="401.292818" y="518">R4</tspan>
                    </text>
                    <text id="R5" fontFamily="Roboto" fontSize="28" fontWeight="normal" fill="#000000">
                        <tspan x="517.292818" y="518">R5</tspan>
                    </text>
                    <text id="R6" fontFamily="Roboto" fontSize="28" fontWeight="normal" fill="#000000">
                        <tspan x="634.292818" y="518">R6</tspan>
                    </text>
                    <rect id="Rectangle" stroke="#979797" strokeWidth="3" x="518.5" y="243.5" width="196" height="16"></rect>
                    <path d="M3,13.5 L317,13.5" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M317,13.5 L317,80" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M317,83.5 L711,83.5" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M10,352.5 L705,352.5" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M316,94.5 L715,94.5" id="Line" stroke="#979797" strokeWidth="3" strokeLinecap="square"></path>
                    <path d="M316,258 L316,94.5" id="Line" stroke="#979797" strokeWidth="3" strokeLinecap="square"></path>
                    <path d="M414,210 L414,95.5" id="Line" stroke="#979797" strokeWidth="4" strokeLinecap="square"></path>
                    <rect id="Rectangle" stroke="#979797" strokeWidth="3" fill="#FFFFFF" transform="translate(691.500000, 96.000000) rotate(90.000000) translate(-691.500000, -96.000000) " x="686" y="73" width="11" height="46"></rect>
                    <rect id="Rectangle" stroke="#979797" strokeWidth="3" fill="#FFFFFF" transform="translate(575.500000, 96.000000) rotate(90.000000) translate(-575.500000, -96.000000) " x="570" y="73" width="11" height="46"></rect>
                    <path d="M9,259.5 L9,13.5" id="Line" stroke="#979797" strokeWidth="3" strokeLinecap="square"></path>
                    <path d="M9,259.5 L316,259.5" id="Line" stroke="#979797" strokeWidth="3" strokeLinecap="square"></path>
                    <rect id="Rectangle-2" stroke="#979797" strokeWidth="2" x="58" y="214" width="111" height="38" rx="5"></rect>
                    <rect id="Rectangle" stroke="#979797" strokeWidth="2" x="179" y="214" width="124" height="38" rx="5"></rect>
                    <rect id="Rectangle" stroke="#979797" strokeWidth="2" x="16" y="214" width="32" height="38" rx="5"></rect>
                    <path d="M414,212.5 L422,212.5" id="Line" stroke="#979797" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round"></path>
                    <path d="M500,253.5 L517,253.5" id="Line" stroke="#979797" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round"></path>
                    <path d="M496,253.5 L496,249" id="Line" stroke="#979797" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round"></path>
                    <path d="M254,393 C254.267626,372.519776 270.95298,356 291.496735,356 C291.663658,356 291.830327,356.001091 291.996735,356.003265 L291.996735,393 L254,393 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(272.998367, 374.500000) rotate(-180.000000) translate(-272.998367, -374.500000) "></path>
                    <path d="M191,393 C191.267626,372.519776 207.95298,356 228.496735,356 C228.663658,356 228.830327,356.001091 228.996735,356.003265 L228.996735,393 L191,393 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(209.998367, 374.500000) scale(-1, 1) rotate(-180.000000) translate(-209.998367, -374.500000) "></path>
                    <path d="M74,393 C74.2676263,372.519776 90.9529804,356 111.496735,356 C111.663658,356 111.830327,356.001091 111.996735,356.003265 L111.996735,393 L74,393 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(92.998367, 374.500000) scale(-1, 1) rotate(-180.000000) translate(-92.998367, -374.500000) "></path>
                    <path d="M542,393 C542.267626,372.519776 558.95298,356 579.496735,356 C579.663658,356 579.830327,356.001091 579.996735,356.003265 L579.996735,393 L542,393 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(560.998367, 374.500000) scale(-1, 1) rotate(-180.000000) translate(-560.998367, -374.500000) "></path>
                    <path d="M425,393 C425.267626,372.519776 441.95298,356 462.496735,356 C462.663658,356 462.830327,356.001091 462.996735,356.003265 L462.996735,393 L425,393 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(443.998367, 374.500000) scale(-1, 1) rotate(-180.000000) translate(-443.998367, -374.500000) "></path>
                    <path d="M605,393 C605.267626,372.519776 621.95298,356 642.496735,356 C642.663658,356 642.830327,356.001091 642.996735,356.003265 L642.996735,393 L605,393 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(623.998367, 374.500000) rotate(-180.000000) translate(-623.998367, -374.500000) "></path>
                    <path d="M200,284 C200,270.192881 212.536027,259 228,259 L228,284 L200,284 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(214.000000, 271.500000) rotate(-180.000000) translate(-214.000000, -271.500000) "></path>
                    <path d="M229,284 C229,270.192881 241.536027,259 257,259 L257,284 L229,284 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(243.000000, 271.500000) scale(-1, 1) rotate(-180.000000) translate(-243.000000, -271.500000) "></path>
                    <path d="M78,284 C78,270.192881 90.536027,259 106,259 L106,284 L78,284 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(92.000000, 271.500000) rotate(-180.000000) translate(-92.000000, -271.500000) "></path>
                    <path d="M108,284 C108,270.192881 120.536027,259 136,259 L136,284 L108,284 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(122.000000, 271.500000) scale(-1, 1) rotate(-180.000000) translate(-122.000000, -271.500000) "></path>
                    <path d="M316,141 C316.320223,121.624383 335.223624,106 358.495871,106 C358.662764,106 358.829432,106.000804 358.995871,106.002406 L358.995871,141 L316,141 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(337.497935, 123.500000) rotate(-180.000000) translate(-337.497935, -123.500000) "></path>
                    <path d="M15.5017197,204.50172 C15.7836193,184.021495 33.358859,167.50172 54.9982803,167.50172 C55.1651908,167.50172 55.3318595,167.502702 55.4982803,167.504662 L55.4982803,204.50172 L15.5017197,204.50172 Z" id="Combined-Shape" stroke="#979797" strokeWidth="2" transform="translate(35.500000, 186.001720) rotate(-270.000000) translate(-35.500000, -186.001720) "></path>
                    <rect id="Rectangle" stroke="#979797" strokeWidth="3" fill="#FFFFFF" transform="translate(164.500000, 263.000000) rotate(90.000000) translate(-164.500000, -263.000000) " x="159" y="240" width="11" height="46"></rect>
                    <path d="M411.5,114.5 L411.5,160.5 L422.5,160.5 L422.5,114.5 L411.5,114.5 Z M316.5,256.5 L270.5,256.5 L270.5,267.5 L316.5,267.5 L316.5,256.5 Z" id="Rectangle-3" stroke="#979797" strokeWidth="3" fill="#FFFFFF"></path>
                    <path d="M8,352.5 L8,534" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M124,352.5 L124,534" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M241,352.5 L241,534" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M358,352.5 L358,534" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M475,352.5 L475,534" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M592,352.5 L592,534" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <path d="M707,352.5 L707,534" id="Line" stroke="#979797" strokeWidth="6" strokeLinecap="square"></path>
                    <rect id="Rectangle" stroke="#979797" strokeWidth="3" fill="#FFFFFF" transform="translate(148.500000, 27.000000) rotate(90.000000) translate(-148.500000, -27.000000) " x="143" y="4" width="11" height="46"></rect>
                    <rect id="Rectangle" stroke="#979797" strokeWidth="3" fill="#FFFFFF" transform="translate(285.500000, 27.000000) rotate(90.000000) translate(-285.500000, -27.000000) " x="280" y="4" width="11" height="46"></rect>
                </g>
            </svg>
        );
    }
}

export default FloorPlan;
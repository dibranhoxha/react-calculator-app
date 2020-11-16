import React from 'react'


const clearStyle = { background: '#beaea4' },
    operatorStyle = { background: '#eafdfe' },
    equalsStyle = {
        background: '#abb7a5',
        position: 'absolute',
        height: 130,
        bottom: 5,
    };

const Buttons = (props) => {
    return (
        <div >
            <button
                className="jumbo"
                id="clear"
                style={clearStyle}
                value="AC"
                onClick={e => {
                    props.setData("")
                }}
            >
                AC
        </button>
            <button
                id="divide"
                style={operatorStyle}
                value="/"
                onClick={e => {
                    props.setData(props.data + e.target.value)
                }}
            >
                /
        </button>
            <button
                id="multiply"
                style={operatorStyle}
                value="*"
                onClick={e => {
                    props.setData(props.data + e.target.value)
                }}
            >
                x
        </button>
            <button id="seven" value="7" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                7
        </button>
            <button id="eight" value="8" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                8
        </button>
            <button id="nine" value="9" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                9
        </button>
            <button
                id="subtract"
                style={operatorStyle}
                value="‑"
                onClick={e => {
                    props.setData(props.data + e.target.value)
                }}
            >
                ‑
        </button>
            <button id="four" value="4" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                4
        </button>
            <button id="five" value="5" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                5
        </button>
            <button id="six" value="6" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                6
        </button>
            <button
                id="add"
                style={operatorStyle}
                value="+"
                onClick={e => {
                    props.setData(props.data + e.target.value)
                }}
            >
                +
        </button>
            <button id="one" value="1" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                1
        </button>
            <button id="two" value="2" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                2
        </button>
            <button id="three" value="3" onClick={e => {
                props.setData(props.data + e.target.value)
            }}>
                3
        </button>
            <button
                className="jumbo"
                id="zero"
                value="0"
                onClick={e => {
                    props.setData(props.data + e.target.value)
                }}
            >
                0
        </button>
            <button id="decimal" value=".">
                .
        </button>
            <button
                id="equals"
                style={equalsStyle}
                value="="

            // try {
            //     String(eval(props.data)).length > 3 &&
            //         String(eval(props.data)).includes('.')
            //         ? String(eval(props.data).toFixed(4))
            //         : String(eval(props.data))

            // }
            // catch (err) {
            //     console.log(err);
            // }
            >
                =
        </button>
        </div>
    )
}

export default Buttons

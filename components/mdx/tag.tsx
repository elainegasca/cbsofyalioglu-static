
type RadixColor = "tomato" | "crimson" | "pink" | "plum" | "purple" | "violet" | "indigo" | "blue" | "sky" | "cyan" | "teal" | "mint" | "green" | "lime" | "yellow" | "amber" | "orange" 


const tagColorizer = (color: RadixColor) => {
    const styles = {
        color: "#000",
        backgroundColor: "#fff",
    }
    switch(color) {
        case "tomato":
            styles.color = "#f06950"
            styles.backgroundColor = "#471a14"
            break;
        case "crimson":
            styles.color = "#f66290"
            styles.backgroundColor = "#471a2e"
            break;
        case "pink":
            styles.color = "#f65cb6"
            styles.backgroundColor = "#451b37"
            break;
        case "plum":
            styles.color = "#d965d8"
            styles.backgroundColor = "#3e1e40"
            break;
        case "purple":
            styles.color = "#bf7af0"
            styles.backgroundColor = "#3a1e48"
            break;
        case "violet":
            styles.color = "#9e8cfc"
            styles.backgroundColor = "#2c2150"
            break;
        case "indigo":
            styles.color = "#849dff"
            styles.backgroundColor = "#1b274f"
            break;
        case "blue":
            styles.color = "#53a9ff"
            styles.backgroundColor = "#102a4d"
            break;
        case "sky":
            styles.color = "#2dc8ee"
            styles.backgroundColor = "#072c41"
            break;
        case "cyan":
            styles.color = "#00c1d7"
            styles.backgroundColor = "#08303b"
            break;
        case "teal":
            styles.color = "#0cc5b3"
            styles.backgroundColor = "#07312b"
            break;
        case "mint":
            styles.color = "#25cfab"
            styles.backgroundColor = "#05312c"
            break;
        case "green":
            styles.color = "#4dc28a"
            styles.backgroundColor = "#123123"
            break;
        case "lime":
            styles.color = "#87be22"
            styles.backgroundColor = "#252f0e"
            break;
        case "yellow":
            styles.color = "#efc001"
            styles.backgroundColor = "#352900"
            break;
        case "amber":
            styles.color = "#f0a20f"
            styles.backgroundColor = "#3f2200"
            break;
        case "orange":
            styles.color = "#ff8b3e"
            styles.backgroundColor = "#441f04"
            break;
        default:
            styles.color = "#000"
            styles.backgroundColor = "#fff"
    }
    return styles
}

export const Tag = (props) => {
    const tagStyle = {
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '8px',
        marginRight: "8px",
        marginTop: "8px",
        fontWeight: 500,
        opacity: 0.75,
        fontSize: '0.875rem',
        ...(props.color && tagColorizer(props.color))
    }


    return (
        <span {...props} style={tagStyle} />
    )
}


export const TagList = (props) => <div style={{border:"1px solid rgba(255,255,255,0.4)", borderRadius: "0.25rem", padding:"2px"}} {...props} />
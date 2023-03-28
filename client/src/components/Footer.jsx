import { borderRadius } from "@mui/system"
import React from "react"

export default function Footer() {
    return (
        <div style={{display: "flex", justifyContent:"center", alignItems: "center", position: "fixed", bottom:"0", left:"0", right:"0"}}>
            <span style={{marginRight:"5px", fontSize:"1.2rem", fontWeight:"bold"}}>{`<`}{`/`}{`>`}</span>
            <p style={{fontWeight:"bold"}}>
                Developed by<a href="https://github.com/gjha133" target="blank" style={{padding:"5px"}}>Gautam Jha</a>
            </p>
        </div>
    )
}
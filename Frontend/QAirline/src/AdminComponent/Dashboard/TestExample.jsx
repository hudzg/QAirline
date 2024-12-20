import { Typography, Paper, Button } from "@mui/material";
import React from "react";

const TestExample = (props) => {
    const { bgColor = "#E5D9F2", textColor = "#A294F9", data, label, children } = props;
    const bgCard = "#F5EFFF"
    return (
        <div className="justify-items-center items-center">
            <Paper elevation={3}
            className="p-8"
            style={{
                backgroundColor: bgCard
            }}
            >
                <div className="grid grid-cols-2 items-center w-[11vw] h-20">
                    {/* Cột 1 */}
                    <div 
                    className="flex justify-center items-center rounded-full w-12 h-12"
                    style={{
                        backgroundColor: bgColor,
                        color: textColor
                    }}  
                    >
                        {props.children}
                    </div>
    
                    {/* Cột 2 */}
                    <div className="flex flex-col justify-center">
                        <Typography variant="h5" className="mb-2">
                            {props.data}
                        </Typography>
                        <Typography variant="body1">
                            {props.label}
                        </Typography>
                    </div>
                </div>
            </Paper>
        </div>
    );
    
    
}

export default TestExample
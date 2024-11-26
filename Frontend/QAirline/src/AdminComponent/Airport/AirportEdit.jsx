import {
    Avatar,
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const AirportList = [1, 1, 1, 1];

const Airports = () => {
    return (
        <div className="w-[50vw] mx-auto m-4 p-5 bg-indigo-100">
            <div className="flex justify-between items-center">
                <Typography variant="h4">Chỉnh sửa sân bay</Typography>
                <div className="flex">
                    <Typography>Thêm chuyến bay </Typography>
                    <AddIcon /> 
                </div>
                
            </div>
            <div className="flex justify-items-center">
                <Paper className="mt-2">
                    {/* <TableContainer component={Paper}> */}
                    <Table className="table-fixed w-full">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className="w-1/5">Mã sân bay</TableCell>
                                <TableCell align="center" className="w-1/5">Tên sân bay</TableCell>
                                <TableCell align="center" className="w-1/5">Thành phố</TableCell>
                                <TableCell align="center" className="w-1/5">Quốc gia</TableCell>
                                <TableCell align="center" className="w-1/5"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AirportList.map((item) => (
                                <TableRow
                                >
                                    <TableCell align="center" className="w-1/5">HN</TableCell>
                                    <TableCell align="center" className="w-1/5">Noi Bai</TableCell>
                                    <TableCell align="center" className="w-1/5">Ha Noi</TableCell>
                                    <TableCell align="center" className="w-1/5">Viet Nam</TableCell>
                                    <TableCell align="center" className="w-1/5">
                                        <div className="flex justify-between items-center">
                                            <EditIcon />
                                            <DeleteIcon />
                                        </div>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {/* </TableContainer> */}
                </Paper>
            </div>
        </div>
    );
};

export default Airports;
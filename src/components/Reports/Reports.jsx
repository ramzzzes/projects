import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import {getProjects} from "../../services/ProjectServices";

const Reports = () => {

    const [projects,setProjects] = useState([])

    useEffect(() => {
       getProjects().then((response) => {
           setProjects(response.data?.data)
       })
    },[])

    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">id</TableCell>
                        <TableCell align="center">name</TableCell>
                        <TableCell align="center">structure</TableCell>
                        <TableCell align="center">industry</TableCell>
                        <TableCell align="center">website</TableCell>
                        <TableCell align="center">image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.projectId}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.structure}</TableCell>
                            <TableCell align="center">{row.industry}</TableCell>
                            <TableCell align="center">{row.website}</TableCell>
                            <TableCell align="center">
                                <img src={row.image}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Reports
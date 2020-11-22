import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from './components/Nav'
import Middle from './components/Middle'

const useStyles = makeStyles({

});

export const Home = props => {
    const classes = useStyles();

    const [valueState, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (
        <>
            <Nav />
            <Middle />
        </>
    );
}

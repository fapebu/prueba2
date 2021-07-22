import { Button, InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import './searchbarstyle.css'
import React, { useState, useEffect } from 'react';
import { getListPersona } from '../../services/serviceget';

export default function SearchBar() {

    const [ allData, setAlldata ] = useState([])
    const [ filteredData, setFilteredData ] = useState(allData)
    const [ inputValue, setInputValue ] = useState()

    useEffect(() => {
        myFecth()
    }, [])

    const myFecth = async () => {
        const list = await getListPersona()
        setAlldata(list)
        setFilteredData(list)
    }


    const handleSearch = () => {

    }

    const onChange = (event) => {
        setFilteredData(event.target.value)
    }


    return (
        <div className="contentInputSearch">
            <div className="contentInputSearch___child">
                <input type="text"
                    defaultValue={ inputValue }
                    id="inputGroup-sizing-default"
                    onChange={ (e) => setInputValue(e.target.value) }
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
                <Button onClick={ () => handleSearch() } >Buscar</Button>
                <p>{ inputValue }</p>
            </div>
        </div>
    )
}




    // const handleSearch = (event) => {
    //     let value = event.target.value.toLowerCase()
    //     console.log(value)
    //     const result = allData.filter((value, index) => (
    //         value.nombre.toLowerCase().includes(allData) ||
    //         value.apellido.toLowerCase().includes(allData) ||
    //         value.alias.toLowerCase().includes(allData) ||
    //         value.email.toLowerCase().includes(allData)
    //     )
    //     )
    //     setFilteredData(result)
    // }
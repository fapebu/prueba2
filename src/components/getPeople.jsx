import { connect } from 'react-redux'
import { viewDataBase } from '../components/redux/actions/actions'
import { useState, useEffect } from 'react'

const Get = (props) => {

    const [ data, setData ] = useState([ '' ])

    useEffect(() => {
        props.viewDataBase();
    });

    useEffect(() => {
        myData()
    }, [ props.nombreFilter, props.list ])

    const myData = setData(props.data.filter(({ nombre }) => {
        return nombre.includes(props.nombreFilter)
    }))


}
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Media = props => {

    const { min, max } = props
    return (
        <Card title="Média dos Números" green>
            <span>Resultado:</span>
            <strong>{(max + min) / 2}</strong>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Media);
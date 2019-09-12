import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import L from 'leaflet'

const MapWrapper = styled.div`
    display: inline-block;
    /* border: 1px solid blue; */
    height: 30vh;
    width: 100%;
    /* margin: 10px; */
`

const LocalMap = props => {
    let lat = parseFloat(props.lat)
    let long = parseFloat(props.long)
    useEffect(() => {
        var mymap = L.map('mapid').setView([lat, long], 13)

        L.tileLayer(
            'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
            {
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
            }
        ).addTo(mymap)
    })

    return (
        <div>
            <MapWrapper id="mapid"></MapWrapper>
        </div>
    )
}

export default LocalMap

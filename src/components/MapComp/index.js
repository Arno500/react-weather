import React, { Component } from "react";

import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";

export default class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 13.5
    };
    this.mapRef = React.createRef();
  }
  render() {
    if (this.props.loc === null || this.props.loc === undefined) {
      return null;
    }
    return (
      <Map ref={this.mapRef} center={this.props.loc} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

import React, { Component } from "react";

import Header from "../../components/header";
import ItemList from "../../components/item-list";
import PersonDetails from "../../components/person-details"

import "./app.css";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ItemList />
                <PersonDetails />
            </div>
        )
    }
};

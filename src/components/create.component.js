import React, { Component } from 'react';
import Form from "./form";

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            titleValid: true,
            description: '',
            descriptionValid: true,
            number: '',
            numberValid: true
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        })
    }

    onSubmit() {
        let ads = localStorage.getItem('ads') ? JSON.parse(localStorage.getItem('ads')) : {ads:[]};
        const newAd = {id: ads.ads.length, title: this.state.title, description: this.state.description, number: this.state.number};
        ads.ads.push(newAd);
        localStorage.setItem('ads', JSON.stringify(ads));
        this.setState({
            title: '',
            description: '',
            number: ''
        })
    }

    render() {
        return (
            <div >
                <h3>Создать объявление</h3>
                <Form
                    style={{marginTop: 10}}
                    obj={this.state}
                    onSubmit={(e) => this.onSubmit(e)}
                    onChangeTitle={(e) => this.onChangeTitle(e)}
                    onChangeDescription={(e) => this.onChangeDescription(e)}
                    onChangeNumber={(e) => this.onChangeNumber(e)}
                 />
            </div>
        )
    }
}
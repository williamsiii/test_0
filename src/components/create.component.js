import React, { Component } from 'react';

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

    onSubmit(e) {
        e.preventDefault();
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
            <div style={{marginTop: 10}}>
                <h3>Создать объявление</h3>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group">
                        <label>Название:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            maxLength={100}
                            onChange={(e) => this.onChangeTitle(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Описание: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.description}
                               maxLength={300}
                               onChange={(e) => this.onChangeDescription(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Номер телефона: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.number}
                               onChange={(e) => this.onChangeNumber(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Создать" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
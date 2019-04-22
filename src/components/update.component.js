import React, { Component } from 'react';

export default class Update extends Component {

    constructor(props) {
        super(props);
        this.ads = null;
        this.id = 0;
        this.state = {
            id: 0,
            title: '',
            description: '',
            number:''
        }
    }

    componentDidMount() {
        try {
            this.id = Number(this.props.match.params.id);
            this.ads = JSON.parse(localStorage.getItem('ads'));
            const ad = this.ads.ads.filter((x) => x.id === this.id)[0];
            this.setState({
                id: this.id,
                title: ad.title,
                description: ad.description,
                number: ad.number });

        } catch(err){
            throw Error(err);
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
        const obj = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            number: this.state.number
        };

        this.ads.ads = this.ads.ads.map((x) => {
            return x.id === this.id ?
                {id: x.id, title: this.state.title, description: this.state.description, number: this.state.number} : x;
        });
        const ads = JSON.stringify(this.ads);
        localStorage.setItem('ads', ads);

        this.props.history.push('/read');
    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Редактировать объявление</h3>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group">
                        <label>Название:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title || ''}
                            onChange={(e) => this.onChangeTitle(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Описание: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.description || ''}
                               onChange={(e) => this.onChangeDescription(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Номер телефона: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.number || ''}
                               onChange={(e) => this.onChangeNumber(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Обновить" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
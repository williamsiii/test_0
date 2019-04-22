import React, { Component } from 'react';

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titleValid: true,
            descriptionValid: true,
            numberValid: true
        }
    }

    checkValid(field){
        return this.state[field] ? 'hide' : 'error';
    }

    onChangeTitle(e) {

        this.props.onChangeTitle && this.props.onChangeTitle(e);
    }

    onChangeDescription(e) {
        this.props.onChangeDescription && this.props.onChangeDescription(e);
    }

    onChangeNumber(e) {
        this.props.onChangeNumber && this.props.onChangeNumber(e);
    }

    onSubmit(e) {
        e.preventDefault();

        let titleValid = true, descriptionValid = true, numberValid = true;
        if (this.props.obj.title.length === 0 || this.props.obj.title.length > 100)
            titleValid = false;
        this.setState({titleValid: titleValid});

        if (this.props.obj.description.length > 300)
            descriptionValid = false;
        this.setState({descriptionValid: descriptionValid});

        if (!this.props.obj.number.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/))
            numberValid = false;
        this.setState({numberValid: numberValid});

        if (numberValid * descriptionValid * numberValid)
            this.props.onSubmit && this.props.onSubmit();
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <div className="form-group">
                    <label>Название:  </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={"Название"}
                        value={this.props.obj.title}
                        maxLength={100}
                        onChange={(e) => this.onChangeTitle(e)}
                    />
                    <div className={this.checkValid('titleValid')}>Обязательно для заполнения. Не более 100 символов</div>
                </div>
                <div className="form-group">
                    <label>Описание: </label>
                    <input type="text"
                           className="form-control"
                           placeholder={"Описание"}
                           value={this.props.obj.description}
                           maxLength={300}
                           onChange={(e) => this.onChangeDescription(e)}
                    />
                    <div className={this.checkValid('descriptionValid')}>Не более 300 символов</div>
                </div>
                <div className="form-group">
                    <label>Номер телефона: </label>
                    <input type="text"
                           className="form-control"
                           placeholder={"+7(999)999-11-11"}
                           value={this.props.obj.number}
                           onChange={(e) => this.onChangeNumber(e)}
                    />
                    <div className={this.checkValid('numberValid')}>Обязательно для заполнения. Формат ввода: +7(999)999-99-99</div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Создать" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}
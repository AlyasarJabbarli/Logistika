import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeStateValue } from '../redux/MainReducer';

export class AddBtn extends Component {

    openModalBtn() {
        this.props.changeStateValue({
            name: 'modalVisible',
            value: true
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <button onClick={this.openModalBtn.bind(this)} className='add_btn'>Add</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = { changeStateValue }
export default connect(mapStateToProps, mapDispatchToProps)(AddBtn)
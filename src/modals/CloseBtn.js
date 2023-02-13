import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeStateValue } from '../redux/MainReducer';

export class CloseBtn extends Component {

    closeModalBtn() {
        this.props.changeStateValue({
            name: 'modalVisible',
            value: false
        })
    }

    render() {
        return (
            <button onClick={this.closeModalBtn.bind(this)} className='close_btn'>Close</button>
        )
    }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = { changeStateValue }
export default connect(mapStateToProps, mapDispatchToProps)(CloseBtn)
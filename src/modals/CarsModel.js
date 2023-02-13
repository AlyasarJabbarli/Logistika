import React, { Component } from 'react'
import { connect } from 'react-redux';
import CloseBtn from './CloseBtn'
import { insertData } from '../actions/MainAction';
import Swal from 'sweetalert2';
import { changeStateValue } from '../redux/MainReducer';
export class CarsModel extends Component {
    state={
        model: '',
        plate_number: ''
    }

    changeInpValue(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addDataBtn(model, plate_number, e){
        if(model != '' && plate_number != ''){
            this.props.insertData("cars", {model, plate_number})
            .then(resp=>{
                Swal.fire(
                    'Added!',
                    'Your file has been added.',
                    'success'
                )
                this.props.getAfterInsert()
                this.props.changeStateValue({
                    name: 'modalVisible',
                    value: false
                })
            })
        }
    }
    render() {
        const {model, plate_number} = this.state;
        return (
            <div>
                <div className='background_shadow'>
                    <div className='modal_body'>
                        <div className='modal_header'>
                            <h2>Add Data</h2>
                        </div>
                        <div className='modal_grid'>

                            <div className='modal_inp_container'>
                                <label htmlFor='name'>Model</label>
                                <input onChange={this.changeInpValue.bind(this)} value={model} name="model" type='text' id="name" />
                            </div>
                            <div className='modal_inp_container'>
                                <label htmlFor='name'>Plate Number</label>
                                <input onChange={this.changeInpValue.bind(this)} value={plate_number} name="plate_number" type='text' id="name" />
                            </div>
                           
                        </div>
                        <div className='modal_btn'>
                            <CloseBtn />
                            <button onClick={this.addDataBtn.bind(this, model, plate_number)} className='save_btn'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({});
const mapDispatchToProps = {insertData, changeStateValue}
export default connect(mapStateToProps, mapDispatchToProps)(CarsModel)
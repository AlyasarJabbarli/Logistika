import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {changeStateValue} from '../../redux/MainReducer';
import {getOneParams, updateData} from '../../actions/MainAction';
function withHooks(Component){
  return props => <Component {...props} params={useParams()} navigate={useNavigate()} />
}
export class CarsEdit extends Component {

  componentDidMount(){
    this.props.getOneParams(`cars/${this.props.params.id}`)
  }

  getInpValue(e){
    this.props.changeStateValue({
      name: "oneData."+e.target.name,
      value: e.target.value
    })
  }

  saveDataBtn(data, e){
    if(data.model != '' && data.plate_number != ''){
      this.props.updateData(`cars/${this.props.params.id}`, data)
      .then(resp=>{
          this.props.navigate('/cars')
      })
    } 
  }
  render() {
    const {oneData} = this.props;
    console.log(oneData)
    return (
      <div className='modal_body'>
          <div className='modal_header'>
              <h2>Edit Data</h2>
          </div>
          <div className='modal_grid'>
              <div className='modal_inp_container'>
                  <label htmlFor='name'>Model</label>
                  <input name="model" value={oneData.model} onChange={this.getInpValue.bind(this)} type='text' id="name" />
              </div>
              <div className='modal_inp_container'>
                  <label htmlFor='name'>Plate Number</label>
                  <input name="plate_number" value={oneData.plate_number} onChange={this.getInpValue.bind(this)} type='text' id="name" />
              </div>
          </div>
          <div className='modal_btn'>
              <Link to={'/cars'} className='close_btn'>Close</Link>
              <button onClick={this.saveDataBtn.bind(this, oneData)} className='save_btn'>Save</button>
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  oneData: state.Data.oneData
});
const mapDispatchToProps = {getOneParams, changeStateValue, updateData}
export default connect(mapStateToProps, mapDispatchToProps)(withHooks(CarsEdit))
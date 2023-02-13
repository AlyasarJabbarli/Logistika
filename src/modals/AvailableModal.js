import React, { Component } from 'react'
import { connect } from 'react-redux';
import CloseBtn from './CloseBtn'
import { changeStateValue } from '../redux/MainReducer';
import { getBranch, getWorker, insertData } from '../actions/MainAction';
import Swal from 'sweetalert2';
export class AvailableModal extends Component {

    state={
        user_id: '',
        branch_id: ''
    }
    componentDidMount(){
        this.props.getBranch()
        this.props.getWorker()
    }
    getSelectedData(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addDataBtn(user_id, branch_id, e){
        if(user_id != '' && branch_id != ''){
            this.props.insertData("available-branch", {user_id, branch_id})
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
    const {branch, workers} = this.props;
    const {user_id, branch_id} = this.state;
    return (
        <div>
        <div className='background_shadow'>
            <div className='modal_body'>
                <div className='modal_header'>
                    <h2>Add Data</h2>
                </div>
                <div className='modal_grid'>
                    <div className='modal_inp_container'>
                        <label htmlFor='name'>Worker</label>
                        <select value={user_id} name="user_id" onChange={this.getSelectedData.bind(this)}>
                            <option value={''}>Select a Worker</option>
                            {
                                workers.map((user, i)=>{
                                    return(
                                        <option value={user.id} key={i}>{user.fullName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='modal_inp_container'>
                        <label htmlFor='name'>Branch</label>
                        <select value={branch_id} name="branch_id" onChange={this.getSelectedData.bind(this)}>
                            <option value={''}>Select a Branch</option>
                            {
                                branch.map((data, i)=>{
                                    return(
                                        <option value={data.id} key={i}>{data.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='modal_btn'>
                    <CloseBtn />
                    <button onClick={this.addDataBtn.bind(this, user_id, branch_id)} className='save_btn'>Save</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
const mapStateToProps = (state) =>({
    workers: state.Data.workers,
    branch: state.Data.branch,
});
const mapDispatchToProps = {getWorker, getBranch,insertData, changeStateValue}
export default connect(mapStateToProps, mapDispatchToProps)(AvailableModal)
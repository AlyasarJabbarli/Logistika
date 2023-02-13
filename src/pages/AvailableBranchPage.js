import React, { Component } from 'react'
import { connect } from 'react-redux';
import MainCard from '../components/MainCard'
import { getAvailable } from '../actions/MainAction';
import AvailableModal from '../modals/AvailableModal';

export class AvailableBranchPage extends Component {

  componentDidMount(){
    this.props.getAvailable()
  }
  getAfterInsert=()=>{
    this.props.getAvailable()
  }
  getAfterDelete = () =>{
    this.props.getAvailable()

  }
  render() {
    const { available, modalVisible } = this.props
    console.log('sss',available);
    return (
      <div>
        <section>
          <div className='container'>
            <div className='grid_container'>
            {
              available.map((data, i) => {
                return (
                  <MainCard key={i}
                    branch={data.branch.name}
                    title={data.user.fullName}
                    url={`available-branch/${data.id}`}
                    getAfterDelete={this.getAfterDelete} />
                )
              })
            }
            </div>
          </div>
        </section>
        {
          modalVisible?
          <AvailableModal getAfterInsert={this.getAfterInsert} />:null
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  available: state.Data.available,
  modalVisible: state.Data.modalVisible,
});

const mapDispatchToProps = { getAvailable };
export default connect(mapStateToProps, mapDispatchToProps)(AvailableBranchPage)
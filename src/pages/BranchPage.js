import React, { Component } from 'react'
import MainCard from '../components/MainCard'
import { getBranch } from '../actions/MainAction';
import { connect } from 'react-redux';
import BranchModal from '../modals/BranchModal';

export class BranchPage extends Component {

  componentDidMount() {
    this.props.getBranch()
  }

  getAfterDelete = () => {
    this.props.getBranch()
  }

  render() {
    const { branch, modalVisible } = this.props
    console.log(branch);
    return (
      <div>
        <section>
          <div className='container'>
            <div className='grid_container'>
              {
                branch.map((data, i) => {
                  return (
                    <MainCard
                      key={i}
                      title={data.name}
                      km={data.km}
                      url={`branch/${data.id}`}
                      getAfterDelete={this.getAfterDelete} />
                  )
                })
              }

            </div>
          </div>
          {
            modalVisible ?
              <BranchModal /> : null
          }
        </section>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  branch: state.Data.branch,
  modalVisible: state.Data.modalVisible,
});

const mapDispatchToProps = { getBranch };
export default connect(mapStateToProps, mapDispatchToProps)(BranchPage)
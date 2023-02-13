import React, { Component } from 'react'
import MainCard from '../components/MainCard'
import { getWorker } from '../actions/MainAction'
import { connect } from 'react-redux'
import WorkerModal from '../modals/WorkerModal'

export class WorkerPage extends Component {

  componentDidMount() {
    this.props.getWorker()
  }

  getAfterDelete = () => {
    this.props.getWorker()
  }

  render() {
    const { workers, modalVisible } = this.props
    console.log(workers);
    return (
      <div>
        <section>
          <div className='container'>
            <div className='grid_container'>
              {
                workers.map((data, i) => {
                  return (
                    <MainCard
                      key={i}
                      title={data.fullName}
                      email={data.email}
                      phone_number={data.phone_number}
                      url={`user/${data.id}`}
                      getAfterDelete={this.getAfterDelete} />
                  )
                })
              }

            </div>
          </div>
          {
            modalVisible ?
              <WorkerModal /> : null
          }
        </section>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  workers: state.Data.workers,
  modalVisible: state.Data.modalVisible
});

const mapDispatchToProps = { getWorker };
export default connect(mapStateToProps, mapDispatchToProps)(WorkerPage)
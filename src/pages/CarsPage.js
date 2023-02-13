import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCars } from '../actions/MainAction';
import MainCard from '../components/MainCard'
import CarsModel from '../modals/CarsModel';

export class CarsPage extends Component {

  componentDidMount() {
    this.props.getCars()
  }

  getAfterDelete = () => {
    this.props.getCars()
  }
  getAfterInsert = () => {
    this.props.getCars()
  }

  render() {
    const { cars, modalVisible } = this.props
    console.log(cars);
    return (
      <section>
        <div className='container'>
          <div className='grid_container'>
            {
              cars.map((data, i) => {
                return (
                  <MainCard key={i}
                    model={data.model}
                    title={data.plate_number}
                    url={`cars/${data.id}`}
                    getAfterDelete={this.getAfterDelete} />
                )
              })
            }

          </div>
        </div>
        {
          modalVisible ?
            <CarsModel getAfterInsert={this.getAfterInsert} /> : null
        }
      </section>
    )
  }
}
const mapStateToProps = (state) => ({
  cars: state.Data.cars,
  modalVisible: state.Data.modalVisible,
});

const mapDispatchToProps = { getCars };
export default connect(mapStateToProps, mapDispatchToProps)(CarsPage)
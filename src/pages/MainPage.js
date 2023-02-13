import React, { Component } from 'react'
import MainCard from '../components/MainCard'
import { getHome } from '../actions/MainAction'
import { connect } from 'react-redux'
import MainModal from '../modals/MainModal'

export class MainPage extends Component {

    componentDidMount() {
        this.props.getHome()
    }

    render() {
        const { home, modalVisible } = this.props
        console.log(home);
        return (
            <section>
                <div className='container'>
                    <div className='grid_container'>
                        <MainCard />
                        <MainCard />
                        <MainCard />
                    </div>
                </div>
                {
                    modalVisible ?
                        <MainModal /> : null
                }
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    home: state.Data.home,
    modalVisible: state.Data.modalVisible,
});

const mapDispatchToProps = { getHome };
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
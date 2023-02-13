import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteItem } from '../actions/MainAction';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export class MainCard extends Component {

    deleteDataBtn(url, e) {
        console.log(url);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteItem(url)
                    .then(resp => {
                        this.props.getAfterDelete()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })

            }
        })
    }

    render() {
        const { title = '', model = '', km = '', phone_number = '', email = '', url, branch = '' } = this.props
        return (
            <div className='main_card'>
                <div className='card_title'>
                    {
                        title != '' ?
                            <h2>{title}</h2> : null
                    }

                </div>
                <div className='card_body'>
                    <ul>
                        {
                            model != '' ?
                                <li>Model: <span>{model}</span></li> : null
                        }
                        {
                            km != '' ?
                                <li>Km: <span>{km}</span></li> : null
                        }
                        {
                            branch != '' ?
                                <li>Branch: <span>{branch}</span></li> : null
                        }
                        {
                            phone_number != '' ?
                                <li>Phone Number:<span>{phone_number}</span></li> : null
                        }
                        {
                            email != '' ?
                                <li>Email: <span>{email}</span></li> : null
                        }

                    </ul>
                    <div className='row'>
                        <button onClick={this.deleteDataBtn.bind(this, url)}>Delete</button>
                        <Link to={`/${url}`}>Edit</Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = { deleteItem }
export default connect(mapStateToProps, mapDispatchToProps)(MainCard)
import React, { Component } from 'react'

export class Modals extends Component {
    render() {
        return (
            <div>
                <div className='background_shadow'>
                    <div className='modal_body'>
                        <div className='modal_header'>
                            <h2>Add Data</h2>
                        </div>
                        <div className='modal_grid'>
                            <div className='modal_inp_container'>
                                <label htmlFor='name'>Title</label>
                                <input type='text' id="name" />
                            </div>
                            <div className='modal_inp_container'>
                                <label htmlFor='name'>Title</label>
                                <input type='text' id="name" />
                            </div>
                            <div className='modal_inp_container'>
                                <label htmlFor='name'>Title</label>
                                <input type='text' id="name" />
                            </div>
                        </div>
                        <div className='modal_btn'>
                            <button className='close_btn'>Close</button>
                            <button className='save_btn'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modals
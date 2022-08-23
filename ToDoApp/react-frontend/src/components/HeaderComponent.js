import React, { Component } from 'react'


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
              
        }
        
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/todos" className="navbar-brand"><h3>ToDo Management System</h3></a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent

import React from 'react'
import {Link} from "gatsby";

class NavItem extends React.Component {    
    render() {        
        return <Link
            target={this.props.external ? '_blank' : '_self'}
            rel="noopener"
            to={this.props.to}
            className={`${this.props.page === this.props.to ? 'bg-gradient-to-tr from-black/70 via-black/80 to-black text-white shadow-md shadow-black/40' : 'text-gray-500'} ${this.props.bordered ? 'border-2 border-black' : ''} ${this.props.large ? 'px-5 py-3' : 'px-3 py-2'} items-center hover:shadow-md hover:shadow-black/40 block lg:inline-block lg:mt-0 hover:text-white hover:bg-black hover:text-white font-bold transition duration-300`}
        >
            {this.props.children}
        </Link>
    }
}

export default NavItem
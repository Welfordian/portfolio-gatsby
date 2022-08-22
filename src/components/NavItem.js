import React from 'react'
import {Link} from "gatsby";

class NavItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {       
        if (this.props.external) {
            return <a 
                target="_blank"
                rel="noopener"
                href={this.props.to}
                className={`${this.props.page === this.props.to ? 'bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 text-white shadow-md shadow-black/40' : 'text-gray-500'} ${this.props.bordered ? 'border-2 border-black' : ''} ${this.props.large ? 'px-5 py-3' : 'px-3 py-2'} w-full md:w-auto items-center hover:shadow-md hover:shadow-black/40 block lg:inline-block lg:mt-0 hover:text-white hover:bg-gray-800 hover:text-white font-bold transition duration-300 dark:text-gray-300`}
            >
                {this.props.children}
            </a>
        }
        
        return <Link
            to={this.props.to}
            onClick={() => { 'onClick' in this.props ? this.props.onClick() : (()=>{ alert('no') })() }}
            className={`${this.props.page === this.props.to ? 'bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 text-white shadow-md shadow-black/40' : 'text-gray-500'} ${this.props.bordered ? 'border-2 border-black' : ''} ${this.props.large ? 'px-5 py-3' : 'px-3 py-2'} w-full md:w-auto items-center hover:shadow-md hover:shadow-black/40 block lg:inline-block lg:mt-0 hover:text-white hover:bg-gray-800 hover:text-white font-bold transition duration-300 dark:text-gray-300`}
        >
            {this.props.children}
        </Link>
    }
}

export default NavItem
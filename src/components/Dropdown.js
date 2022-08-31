import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected: ('initial' in this.props) ? this.props.initial : this.props.options[0]
        }
    }
    
    setActive(option) {
        this.setState({
            selected: option,
        })
        
        this.props.onSelect(option);
    }

    render() {
        return (
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center border dark:border-gray-600 border-gray-300 dark:text-gray-300 dark:bg-gray-700 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        { this.state.selected.replace('_', ' ').replace(/(\b\w)/g, (s) => s.toUpperCase()) }
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="z-10 absolute right-0 mt-2 w-56 origin-top-right dark:text-gray-300 dark:bg-gray-700 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {
                                this.props.options.map(option => {
                                    return <Menu.Item>
                                        {({ active }) => (
                                            <span
                                                onClick={() => { this.setActive(option) }}
                                                href="#"
                                                className={classNames(
                                                    active ? 'dark:bg-gray-600 bg-gray-100 dark:text-gray-300 text-gray-900' : 'dark:text-gray-300 text-gray-700',
                                                    'block px-4 py-2 text-sm cursor-pointer'
                                                )}
                                            >
                                                { option.replace('_', ' ').replace(/(\b\w)/g, (s) => s.toUpperCase()) }
                                            </span>
                                        )}
                                    </Menu.Item>
                                })
                            }
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        )
    }
}
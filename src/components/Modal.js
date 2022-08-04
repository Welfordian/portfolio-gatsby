import * as React from "react";

class Modal extends React.Component {
    constructor() {
        super();
    }
    
    render () {
        return (
            <div className={`relative z-10 ${this.props.open ? '' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <div className="relative bg-gray-800 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                            <div className="px-4 pt-5 pb-5 sm:p-6 sm:pb-6">
                                <div className="sm:flex sm:items-start flex-grow">
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left flex-grow">
                                        <h3 className="text-xl leading-6 font-medium text-gray-200 mb-8" id="modal-title">{ this.props.title }</h3>
                                        
                                        <div className="mt-2">
                                            { this.props.children }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-800 px-4 py-3 sm:px-6 flex flex-row-reverse gap-3 mb-4">
                                { this.props.buttons.map(button => {
                                    return button
                                }) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal
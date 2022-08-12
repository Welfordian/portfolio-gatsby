import React from "react";

export default class CaseStudy extends React.Component {
    render () {
        return (
            <div className={`flex flex-col justify-between ${this.props.inverted ? "bg-black text-white" : "text-black"} p-8`}>
                <div>
                    <p className="font-bold text-2xl mb-8">
                        {
                            this.props.redacted
                            ?
                                <span className={`block w-full bg-gray-500 w-3/4`}>&nbsp;</span>
                            :
                                this.props.name    
                        }
                    </p>
                </div>
                <p className="flex grow mt-2">
                    {
                        this.props.redacted
                            ?
                            <div className={`flex block w-full bg-gray-500 grow`}>&nbsp;</div>
                            :
                            this.props.description
                    }
                </p>
                
                <p className="mt-3 font-semibold text-gray-500">
                    {
                        this.props.redacted
                        ?
                            <span className={`block w-full bg-gray-500 w-1/2`}>&nbsp;</span>
                        :
                            this.props.length    
                    }
                </p>
            </div>
        )
    }
}
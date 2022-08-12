import React from "react";

export default class CaseStudy extends React.Component {
    render () {
        return (
            <div className={`flex flex-col justify-between ${this.props.inverted ? "bg-black text-white" : "text-black"} p-8`}>
                <div>
                    <p className="font-bold text-2xl mb-8">
                        {
                            this.props.name   
                        }
                    </p>
                </div>
                <p className="flex grow mt-2">
                    {
                        this.props.description
                    }
                </p>
                
                <p className="mt-3 font-semibold text-gray-500">
                    {
                        this.props.length
                    }
                </p>
            </div>
        )
    }
}
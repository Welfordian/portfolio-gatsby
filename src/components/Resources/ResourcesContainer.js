import React from "react";
import Resource from "./Resource";

export default class ResourcesContainer extends React.Component {
    render () {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-max mt-12">
                {
                    Object.keys(this.props.resources).map((index) => {
                        return (
                            <Resource resource={this.props.resources[index]}></Resource>
                        );
                    })
                }
            </div>
        )
    }
}
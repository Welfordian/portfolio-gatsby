import React from "react";

export default class BlogTags extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tags: []
        }
    }
    
    filterTag(tag) {
        if (! this.props.onTagUpdate) return false;
        
        let tags;
        
        if (this.state.tags.indexOf(tag.id) === -1) {
            tags = [...this.state.tags, tag.id];
        } else {
            tags = [...this.state.tags.filter((_tag) => {
                return _tag !== tag.id;
            })]
        }

        this.setState({
            tags
        });

        this.props.onTagUpdate(tags);
    }
    
    render() {                
        return (
            <div>
                {
                    this.props.tags.length
                    ? 
                    <div className={`flex mt-12 gap-4`}>
                        {
                            this.props.tags.map((tag) => {
                                let tagClass = 'bg-gray-500';
                                
                                if (this.state.tags.indexOf(tag.id) !== -1) {
                                    tagClass = 'bg-black';
                                }
                                
                                return <div onClick={() => this.filterTag(tag)} className={`${this.props.onTagUpdate ? 'cursor-pointer' : ''} select-none px-3 py-2 ${tagClass} text-white`}>{tag.name}</div>
                            })
                        }
                    </div>
                    : 
                    <p>No Tags.</p>
                }
            </div>
        );
    }
}
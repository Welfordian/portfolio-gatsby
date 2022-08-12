import React from 'react';

class ls extends React.Component{
    constructor(props) {     
        super(props);
        
        this.signature = 'ls';
        this.aliases = ['l'];
    }

    handle(args, app) {        
        let dirListing = app.props.directory === '~' ? app.props.dirListing : app.props.dirListing.find(item => {
            return item.name === app.props.directory;
        })['children'];
        
        return {output: (
            <div className={`${(args[1] === '-la' || args[1] === '-l') ? 'grid grid-cols-7 gap-x-3 grid-flow-row auto-cols-min' : 'flex gap-3'}`}>
                {
                    (args[1] === '-la' || args[1] === '-l')
                    ?
                        <p className={`col-span-7`}>total 0</p>
                    :
                        ""    
                }
                {
                    args[1] === '-la'
                    ?
                        <>
                            <div>drwxr-xr-x</div><div>7</div><div>josh</div><div>josh</div><div>160</div><div>Aug 10 22:54</div><div className={`text-blue-400`}>.</div>
                            <div>drwxr-xr-x@</div><div>1</div><div>josh</div><div>josh</div><div>4320</div><div>Aug 10 23:09</div><div className={`text-blue-400`}>..</div>
                        </>
                    :
                        ''
                }
                
                {
                    dirListing.map((item) => {
                        return args[1] === '-la' || args[1] === '-l' ?
                            <>
                            <div>-rw-r--r--</div><div>2</div><div>josh</div><div>staff</div><div>0</div><div>Aug 10 22:55</div><div className={'children' in item && item.children.length > 0 ? 'text-blue-400' : 'text-white'}>{item.name}</div>
                            </>
                        :
                            <p className={('children' in item) && item.children.length > 0 ? 'text-blue-400' : 'text-white'}>{item.name}</p>
                    })
                }
            </div>
        )};
    }
}

export default new ls()
import React from 'react';

class NanoView extends React.Component {
    constructor(props) {
        super(props);

        let dirListing = this.props.directory === '~' ? this.props.dirListing : this.props.dirListing.find(item => {
            return item.name === this.props.directory;
        })['children'];

        let foundItem = dirListing.find(item => {
            return item.name === this.props.file;
        })
        
        let url = `https://welford.me/${this.props.file.replace('.webloc', '') === 'home' ? '' : `${this.props.directory === '~' ? '' : `${this.props.directory}/`}${this.props.file.replace('.webloc', '')}`}`;
        
        if ('link' in foundItem) {
            url = foundItem.link;
        }
        
        this.state = {
            blinkTimeout: setTimeout.prototype,
            clearErrorTimeout: setTimeout.prototype,
            content: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
        <key>URL</key>
        <string>${url}</string>
</dict>
</plist>`
        }

        this.terminalInput = React.createRef();
    }
    
    componentDidMount() {
        this.focusInput();
    }

    focusInput(e) {
        this.terminalInput.current.focus();
    }
    
    showError() {
        clearTimeout(this.state.clearErrorTimeout);

        this.setState({
            showError: true
        })
        
        this.setState({ 
            clearErrorTimeout: setTimeout(() => {
                this.setState({
                    showError: false,
                })
            }, 5000)
        });
    }
    
    handleKeyDown(e) {
        if (
            (e.code === 'KeyX' || e.key === 'KeyX')
            && e.ctrlKey
        ) {
            this.props.onSetView('default')
            return;
        }
        
        if (e.ctrlKey) return;
        
        if (
            (e.code === 'ArrowUp' || e.key === 'ArrowUp')
            || (e.code === 'ArrowRight' || e.key === 'ArrowRight')
            || (e.code === 'ArrowDown' || e.key === 'ArrowDown')
            || (e.code === 'ArrowLeft' || e.key === 'ArrowLeft')
        ) return;
        
        e.preventDefault();
        
        document.querySelector('.caretover')?.classList.remove('blink');
        
        this.showError();
    }
    
    handleKeyUp() {
        clearTimeout(this.state.blinkTimeout);
        
        this.setState({
            blinkTimeout: setTimeout(() => {
                document.querySelector('.caretover')?.classList.add('blink');
            }, 1000)
        })
    }
    
    handleSelect(e) {
        let isMouse = e.nativeEvent.type === 'mouseup';
        let x;
        let sel = window.getSelection();
        (x=document.querySelector('.caretover')) && x.classList.remove('caretover', 'blink')
        
        if (sel.focusNode.parentNode.tagName == 'SPAN') {
            sel.focusNode.parentNode.classList.add('caretover')
            
            if (isMouse) {
                sel.focusNode.parentNode.classList.add('blink')
            }
        }
            
    }

    render () {        
        return (
            <div className={`grow flex flex-col`} onClick={(e) => this.focusInput(e)}>
                <div className={`cursor-text bg-[#999999] text-sm text-black px-5 flex`}>
                    <p>UW PICO 5.09</p>
                    
                    <div className={`flex grow justify-center`}>
                        <p>File: {this.props.file}</p>
                    </div>
                </div>
                
                <div className={`grow flex relative`}>
                    <div className={`absolute top-0 left-0 w-full h-full`}></div>
                    <div className={`inline-block grow`}>
                        <pre
                            onSelect={e => this.handleSelect(e)}
                            onClick={e => e.preventDefault()}
                            suppressContentEditableWarning={true}
                            ref={this.terminalInput}
                            contentEditable={true}
                            onKeyDown={e => this.handleKeyDown(e)}
                            onKeyUp={e => this.handleKeyUp()}
                            className={`text-[#999999] outline-none grow caret-transparent`}
                            spellCheck={false}
                        >{
                            this.state.content.split('').map(char => {
                                return (<span className={`relative`}>{char}</span>)
                            })
                        }</pre>
                    </div>
                </div>

                {
                    this.state.showError
                    ?
                        <div className={`flex justify-center`}>
                            <p className={`bg-[#999999] text-black text-sm`}>[ Key illegal in VIEW mode ]</p>
                        </div>
                    : ""    
                }
                
                <div className={`cursor-text`}>
                    <div class={`grid grid-cols-3 lg:grid-cols-6 auto-rows-max text-[#999999]`}>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^G</span>
                            <span>Get Help</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^O</span>
                            <span>WriteOut</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^R</span>
                            <span>Read File</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^Y</span>
                            <span>Prev Pg</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^K</span>
                            <span>Cut Text</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^C</span>
                            <span>Cur Pos</span>
                        </div>

                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^X</span>
                            <span>Exit</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^J</span>
                            <span>Justify</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^W</span>
                            <span>Where is</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^V</span>
                            <span>Next Pg</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^U</span>
                            <span>UnCut Text</span>
                        </div>
                        <div className={`flex gap-2 text-sm`}>
                            <span className={`bg-[#999999] text-black`}>^T</span>
                            <span>To Spell</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NanoView
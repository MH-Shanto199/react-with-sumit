import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps) 
    {
        const { callFunc: currentVal, locale: currentLocale } = this.props
        const { callFunc: nextVal, locale: nextLocale } = nextProps
        if ( currentVal === nextVal && currentLocale === nextLocale ) {
            return false;
        } else {
            return true;
        }
    }
    render()
    {
        // console.log('Button component')
        const { callFunc } = this.props;
        return (
            <button className="btn btn-primary mt-2" type="button" onClick={callFunc}>Change Locale</button>
        )
    }
}

export default Button;
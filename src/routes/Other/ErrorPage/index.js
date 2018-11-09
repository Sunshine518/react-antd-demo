import React from 'react'
import img from './404.png'

class ErrorPage extends React.Component {
    state = {
        animated: ''
    };
    enter = () => {
        this.setState({animated: 'wobble'})
    };

    render() {
        return (
            <div style={styles.errorBox}>
                <img src={img} alt="404" className={`animated tada ${this.state.animated}`} onMouseEnter={this.enter}/>
            </div>
        )
    }
}

const styles = {
    errorBox: {
        position: 'fixed',
        top: 0,
        left: 0,
        background: '#ececec',
        width: '100vw',
        height: '100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}

export default ErrorPage
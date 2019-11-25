import React from 'react'; 

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // process the error 
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
       if(this.state.hasErrored) {
          return <div>Something has went wrong...</div> 
       }

       return this.props.children;
    }


}

export default ErrorBoundary;
import React, {Component} from 'react';
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
    state = { hasError: false}
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      console.error("ErrorBoundary caught an Error", error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
        <h1>Something went wrong. <Link to="/">Click here</Link> to go back to the home page</h1>
        )
      }
  
      return this.props.children; 
    }
  }    

  export default ErrorBoundary;
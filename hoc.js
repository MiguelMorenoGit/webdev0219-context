export const withAuth = (Comp) => {
  return class WithAuthentication extends Component {
    render() {
      return (
        <myContext.Consumer>
          {value => <Comp user={value.loggedin} handleSuccess={value.handleSuccess} {...this.props}/>}
        </myContext.Consumer>
      )
    }
  }
}
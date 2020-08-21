import {Component} from 'React';
import fetch from 'isomorphic-unfetch';


class Page extends Component {
    
    constructor(props) {
        super(props);
        this.id = 1;
        this.state = {
                name: props[0].first_name,
                age: props[0].age,
        }
  }
    handleRefresh = async(e) => {    
        const res = await fetch('http://toni-develops.com/external-files/examples/sample-apis/users.json.php')
        const users = await res.json()
        this.setState({
            name: users[this.id].first_name,
            age: users[this.id].age,            
        });
        this.id = this.id > users.length - 2 ? 0 : this.id + 1;    
  }
    render() {
        return (
          <div>
          <a href="http://test.com/one">LINK 2</a>
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age}</p>
          <button onClick={this.handleRefresh}>Refresh</button>
        </div>
        )
    }
}

Page.getInitialProps = async ({ req }) => {
    const res = await fetch('http://toni-develops.com/external-files/examples/sample-apis/users.json')
    const users = await res.json()
    return users;
  }

export default Page
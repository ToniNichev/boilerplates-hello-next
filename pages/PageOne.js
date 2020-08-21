import fetch from 'isomorphic-unfetch';
const Page = (users) => {
    return (
        <div>
          <p>Name: {users[0].first_name} {users[0].last_name}</p>
          <p>Age: {users[0].age}</p>
        </div>);      
} 
Page.getInitialProps = async ({ req }) => {
  const res = await fetch('http://toni-develops.com/external-files/examples/sample-apis/users.json')
  const users = await res.json()
  //console.log(">>>", users[0] );
  return users;
}
export default Page
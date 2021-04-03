import Link from "next/link";
import Layout from "../comps/layout";

export const getStaticProps = async () => {

  const res = await fetch ('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  
  return {
    props: { users: data }
  }

}

const Users = ({ users }) => {
  return ( 
    <Layout>
      <h1>All Users</h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-5">
      {users.map(users => ( 
  <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
   
    <div class="flex-1 min-w-0">
    
    <Link key={users.id} href={'/users/'+users.id}>
      <a class="focus:outline-none">
        <span class="absolute inset-0" aria-hidden="true"></span>
        <p class="text-sm font-medium text-gray-900">
          { users.name }
          </p>
          </a>
          </Link>
          </div>
          </div>
      )
        )}

      
   
    </div>
    </Layout>
  
   );
}
 
export default Users;
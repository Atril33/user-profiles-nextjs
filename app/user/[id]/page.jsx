import '@/app/globals.css';

export function generateMetadata({params}) {
  const { id } = params;
  return {
    title: `User Detail - ${id}`,
    description: `Details of user with ID ${id}`,
  };
}



const UserDetail = async ({ params }) => {
  const { id } = params;

  // Fetch the user data asynchronously
  const data = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await data.json();

  // If the user is not found, display an error message
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <a href="/" className="underline text-blue-500">Back To Home</a>
      <h1>User Detail</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};


export default UserDetail;

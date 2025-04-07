

const UserDetail = async ({ params }) => {
  const { id } = params;

  const data = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await data.json(); 

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
       <a href="/" className="no-underline text-black">Back To Home</a>
      <h1>User Detail</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetail;

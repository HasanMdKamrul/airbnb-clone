import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../Apis/userCreationAndToken";

const AllUsers = () => {
  const { data: usersData = {}, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const data = await getAllUsers();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  const { data: users } = usersData;

  const makeHostHandler = async (user) => {
    console.log(user._id);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_url}/users/${user?._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ ...user, role: "host" }),
        }
      );
      const data = await response.json();

      console.log(data);
      refetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <th>1</th>
              <td>{user?.email}</td>
              <td>{user?.role}</td>
              <td>
                {user?.role && user?.role === "requested" && (
                  <button
                    onClick={() => makeHostHandler(user)}
                    className="btn btn-ghost btn-sm"
                  >
                    Approve Request
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

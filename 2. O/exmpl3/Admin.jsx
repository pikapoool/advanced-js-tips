import { User } from "./User";

export const Admin = ({ user }) => {
  return (
    <>
      <User user={user} />
      <div> This is admin user details</div>
    </>
  );
};

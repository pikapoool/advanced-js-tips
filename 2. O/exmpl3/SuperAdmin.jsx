import { User } from "./User";

export const SuperAdmin = ({ user }) => {
  return (
    <>
      <User user={user} />
      <div> This is super admin user details</div>
    </>
  );
};

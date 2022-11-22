import React, { useContext } from "react";
import BecomeHostForm from "../../../Components/BecomeHostForm";
import { UserRoleContext } from "../../../contexts/UserRoleProvider";

const BecomeAHost = () => {
  const { role, loadingRole } = useContext(UserRoleContext);

  return (
    <div>
      {role ? (
        <div className="h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
          Request Sent, wait for admin approval
        </div>
      ) : (
        !loadingRole && <BecomeHostForm />
      )}
    </div>
  );
};

export default BecomeAHost;

export const ProfileForm = (user: any) => {
  const { first_name, last_name, username} = user
  const fullName = `${first_name} ${last_name}`
  
  return (
    <>
      <div>
        <label>Legal name</label>
        <br />
        <input name="name" value={fullName} />
      </div>
      <div>
        <label>Username</label>
        <br />
        <input name="name" value={username} />
      </div>
    </>
  );
};

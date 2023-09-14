const user = {
  firstName: 'Alexandre',
  lastName: 'Munaier',
};

function User() {
  return (
    <span>{`${user.firstName} ${user.lastName}`}</span>
  );
}

export default User;

import { useNavigate, useParams } from "react-router";
import { deleteUser, getUser } from "../users";

export function User() {
  const { userId } = useParams();
  const user = getUser(+userId);

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteUser(+userId);
    navigate("/users");
  };

  if (!user) {
    return <div>No se encuentra el Pokemon</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <div>
        <strong>Hp: </strong> {user.hp}
      </div>
      <div>
        <strong>Attack: </strong> {user.attack}
      </div>
      <div>
        <strong>Defense: </strong> {user.defense}
      </div>

      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
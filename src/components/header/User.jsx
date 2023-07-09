import { Link } from 'react-router-dom';

export const User = ({ usuario }) => {
  return (
    <Link to={`/usuarios/${usuario.login.uuid}`}>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            className="rounded-circle"
            src={usuario.picture.thumbnail}
            alt="Usuario"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">
              {usuario.name.first} {usuario.name.last}
            </p>
            <p className="text-muted mb-0">{usuario.login.username}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

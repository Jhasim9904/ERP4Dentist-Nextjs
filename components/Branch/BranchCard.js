export default function BranchCard({ name, user, role, avatar, onDelete }) {
  const roleVariant = {
    "Super admin": "success",
    Admin: "primary",
    User: "secondary",
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex align-items-center gap-3">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-circle"
          width="50"
          height="50"
        />
        <div className="flex-grow-1">
          <h6 className="mb-0 fw-semibold">{name}</h6>
          <small className="text-muted">{user} - ({role})</small>
        </div>
        <span className={`badge bg-${roleVariant[role] || "secondary"}`}>
          {role}
        </span>
        <button
          className="btn btn-sm btn-outline-danger ms-2"
          onClick={onDelete}
        >
          🗑
          
        </button>
      </div>
    </div>
  );
}

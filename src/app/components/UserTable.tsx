
interface UserTableProps {
    client: {
        image: string;
        name: string;
    }
}

const UserTable: React.FC<UserTableProps> = ({ client }) => {
    return (
      <div className="flex items-center gap-2 ">
        <img src={client.image} alt={client.name} className="size-10 rounded-full object-cover" />
        <span className="ml-2">{client.name}</span>
      </div>
    );
  };

export default UserTable;
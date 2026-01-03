import "../styles/CreateDropdown.css";

interface CreateDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateDropdown = ({ isOpen, onClose }: CreateDropdownProps) => {

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="create-dropdown">
        <div className="dropdown-header">
          <h3>Create</h3>
        </div>
        <div className="dropdown-options">
          hey there
        </div>
      </div>
    </>
  );
};

export default CreateDropdown
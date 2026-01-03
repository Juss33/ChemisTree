import "../styles/CreateDropdown.css";

interface CreateDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateDropdownAU = ({ isOpen, onClose }: CreateDropdownProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>

      <div
        className="create-dropdown"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        <div className="dropdown-header">
          <h3>Create</h3>
        </div>

        <div className="dropdown-options">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Google
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default CreateDropdownAU;

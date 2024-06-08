import Dropdown from 'react-bootstrap/Dropdown';

function Dropdownp() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Available Time Slots
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">10:00AM</Dropdown.Item>
        <Dropdown.Item href="#/action-2">10:30AM</Dropdown.Item>
        <Dropdown.Item href="#/action-3">11:00AM</Dropdown.Item>
        <Dropdown.Item href="#/action-1">11:30AM</Dropdown.Item>
        <Dropdown.Item href="#/action-2">12:00PM</Dropdown.Item>
        <Dropdown.Item href="#/action-3">12:30PM</Dropdown.Item>
        <Dropdown.Item href="#/action-1">1:00PM</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2:00PM</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2:30PM</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdownp;
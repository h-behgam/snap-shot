import { memo, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EventKey } from "../../../node_modules/@restart/ui/esm/types";

function Navlinks() {
  const [isactive, setIsactive] = useState<EventKey>(0);
  const handleSelect = (eventKey : EventKey) => {
    setIsactive(eventKey);
  };
  return (
    <Nav justify variant="tabs" onSelect={handleSelect} activeKey={isactive}>
      <Nav.Item>
        <Nav.Link eventKey="1" to="/search/food" as={Link}>
          Food
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" to="/search/tree" as={Link}>
          Tree
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" to="/search/student" as={Link}>
          Student
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="4" to="/search/car" as={Link}>
          Car
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default memo(Navlinks);

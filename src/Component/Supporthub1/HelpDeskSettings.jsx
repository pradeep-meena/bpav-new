import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { GrChannel } from "react-icons/gr";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { FiSidebar } from "react-icons/fi";
import { BsReplyFill } from "react-icons/bs";
import { AiOutlineCustomerService } from "react-icons/ai";
import { GiPortal } from "react-icons/gi";
import { FcTemplate } from "react-icons/fc";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { FaVirusCovidSlash } from "react-icons/fa6";
import { RiFeedbackLine } from "react-icons/ri";
// import { all_routes } from "../router/all_routes";
import { Link } from "react-router-dom";


const HelpDeskSettings = () => {
  // Reusable card component
  const SettingCard = ({ icon, title, description, badge }) => (
    <Card className="p-3 shadow-sm border-0 mb-3">
    <div className="d-flex align-items-start">
      <div className="me-3 text-primary fs-4">
        {/* Render the icon dynamically */}
        {icon}
      </div>
      <div>
      <h6 className="fw-bold mb-1 d-flex align-items-center">
            {title}{" "}
            {badge && (
              <Badge
                bg={badge === "ENT" ? "secondary" : "info"}
                className="ms-2 text-uppercase"
                style={{ fontSize: "0.7rem" }}
              >
                {badge}
              </Badge>
            )}
            </h6>
        <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
          {description}
        </p>
       
    
      </div>
    </div>
  </Card>
  );

  return (
    <div className="page-wrapper">
    <Container fluid className="py-4">
      <h3 className="fw-bold mb-4">Help Desk Settings</h3>

      {/* Users and teams */}
      <h5 className="fw-bold mb-3">Users and teams</h5>
      <Row>
      <Col md={4}>
          <SettingCard
            icon={<FaUser style={{ fontSize: "1.9rem" }}/> } // Add the FaUser icon here
            title="Users"
            description="Manage users and access"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<FaUser />}
            title="User availability"
            description="Set users online or away"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<FaUser />}
            title="Skills"
            description="Manage skills used for routing"
            badge="ENT"
          />
        </Col>
      </Row>

      {/* Ticket sources and routing */}
      <h5 className="fw-bold mt-4 mb-3">Ticket sources and routing</h5>
      <Row>
        <Col md={4}>
          <SettingCard
            icon={<GrChannel style={{ fontSize: "1.9rem" }} />}
            title="Channels"
            description="Generate tickets in help desk"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<IoMdChatbubbles style={{ fontSize: "1.9rem" }}/>}
            title="Chatflows"
            description="Automate chat behaviors"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<BiSolidUserCircle style={{ fontSize: "1.9rem" }} />}
            title="IVR"
            description="Manage phone trees"
            badge="ENT"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<FaPhoneAlt style={{ fontSize: "1.9rem" }}/>}
            title="Skill-based routing"
            description="Assign tickets based on user skills"
            badge="ENT"
          />
        </Col>
      </Row>

      {/* Self-service and AI */}
      <h5 className="fw-bold mt-4 mb-3">Self-service and AI</h5>
      <Row>
        <Col md={4}>
        <Link to="/knowledgebase">
          <SettingCard
            icon={<IoBookSharp style={{ fontSize: "1.9rem" }}/>}
            title="Knowledge base"
            description="Answers to common questions"
          />
          </Link>
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<AiOutlineCustomerService style={{ fontSize: "1.9rem" }}/>}
            title="Customer agent"
            description="Automate customer responses"
            badge="BETA"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<GiPortal style={{ fontSize: "1.9rem" }}/>}
            title="Customer portal"
            description="Keep customers updated on inquiries"
          />
        </Col>
      </Row>

      {/* Help desk customization */}
      <h5 className="fw-bold mt-4 mb-3">Help desk customization</h5>
      <Row>
        <Col md={4}>
          <SettingCard
            icon={<FiSidebar style={{ fontSize: "1.9rem" }} />}
            title="Sidebar customization"
            description="Prioritize ticket information"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<BsReplyFill style={{ fontSize: "1.9rem" }}/>}
            title="Reply recommendations"
            description="AI powered suggestions"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<FcTemplate style={{ fontSize: "1.9rem" }}/>}
            title="Templates"
            description="Reusable templated responses"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<IoPlayCircleOutline style={{ fontSize: "1.9rem" }}/>}
            title="Playbooks"
            description="Written guidelines for service processes"
          />
        </Col>
        <Col md={4}>
          <SettingCard
            icon={<IoTicketOutline style={{ fontSize: "1.9rem" }} />}
            title="Ticket defaults"
            description="Property defaults for new tickets"
          />
        </Col>
      </Row>

      {/* Help desk automation */}
      <h5 className="fw-bold mt-4 mb-3">Help desk automation</h5>
      <Row>
        <Col md={4}>
          <SettingCard
            icon={<FaVirusCovidSlash style={{ fontSize: "1.9rem" }}/>}
            title="SLAs"
            description="Set service expectations"
          />
        </Col>
        <Col md={4}>
        <Link to = "/feedback">
          <SettingCard
            icon={<RiFeedbackLine style={{ fontSize: "1.9rem" }} />}
            title="Feedback surveys"
            description="Collect customer feedback"
          />
          </Link>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default HelpDeskSettings;

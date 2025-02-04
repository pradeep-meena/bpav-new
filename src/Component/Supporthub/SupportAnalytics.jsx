import React from "react";
import { Container, Row, Col, Card, Dropdown, Button } from "react-bootstrap";
import { MdOutlineDashboard } from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SupportAnalytics = () => {
  // Chart 1: Tickets Created Over Time
  const ticketsChartData = {
    labels: ["Dec 2023", "Feb 2024", "Apr 2024", "Jun 2024", "Aug 2024", "Oct 2024"],
    datasets: [
      {
        label: "Count of Tickets",
        data: [153, 177, 168, 149, 230, 114],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const ticketsChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
    },
    scales: {
      x: { title: { display: true, text: "Create date" } },
      y: { title: { display: true, text: "Count of Tickets" } },
    },
  };

  // Chart 2: SLA Completion Status (Dual Dataset)
  const slaChartData = {
    labels: ["Dec 2023", "Feb 2024", "Apr 2024", "Jun 2024", "Aug 2024", "Oct 2024"],
    datasets: [
      {
        label: "SLA completed late",
        data: [0, 0, 1, 0, 8, 6],
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Red
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "SLA completed on time",
        data: [0, 0, 0, 19, 10, 5],
        backgroundColor: "rgba(75, 192, 192, 0.5)", // Blue
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const slaChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
    },
    scales: {
      x: { stacked: true, title: { display: true, text: "Time to First Response SLA Due Date" } },
      y: { stacked: true, title: { display: true, text: "Count of Tickets" } },
    },
  };

  // Chart 3: Messages Received Over Time
  const messagesChartData = {
    labels: ["Jun 2024", "Aug 2024", "Oct 2024", "Dec 2024"],
    datasets: [
      {
        label: "Count of Messages",
        data: [391, 252, 194, 123],
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const messagesChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
    },
    scales: {
      x: { title: { display: true, text: "Timestamp - Monthly" } },
      y: { title: { display: true, text: "Count of Messages" } },
    },
  };

  // Chart 4: Next Response SLA Completion Status (Dual Dataset)
  const nextSlaChartData = {
    labels: ["Jun 2024", "Aug 2024", "Oct 2024", "Dec 2024"],
    datasets: [
      {
        label: "SLA completed on time",
        data: [2, 5, 3, 2],
        backgroundColor: "rgba(153, 102, 255, 0.5)", // Purple
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const nextSlaChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
    },
    scales: {
      x: { title: { display: true, text: "Time to Next Response SLA Due Date" } },
      y: { title: { display: true, text: "Count of SLA Completed on Time" } },
    },
  };

  return (
    <div className="page-wrapper">
    <Container fluid className="py-4 bg-light">
      {/* Header Section */}
      <div className="  align-items-center mb-4">
        <h4 className="fw-bold">Analyze</h4>
        <div className="d-flex gap-2 justify-content-between">
         <div className="d-flex gap-5"> {["Team", "Support Rep", "Channel", "Pipeline", "Category"].map((filter) => (
            <Dropdown key={filter}>
              <Dropdown.Toggle variant="outline-primary">{filter}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>{filter} 1</Dropdown.Item>
                <Dropdown.Item>{filter} 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ))}
          <Button variant="outline-primary">
          <MdOutlineDashboard /> Dashboard filters
          </Button></div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">More</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Option 1</Dropdown.Item>
              <Dropdown.Item>Option 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Cards Section */}
      <Row className="g-4">
        {/* Tickets Created Over Time */}
        <Col lg={6} md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                Tickets created over time
                <i className="bi bi-sliders"></i>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-3">IN THE LAST 365 DAYS | MONTHLY</Card.Subtitle>
              <Bar data={ticketsChartData} options={ticketsChartOptions} />
            </Card.Body>
          </Card>
        </Col>

        {/* SLA Completion Status */}
        <Col lg={6} md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                First response SLA completion status over time
                <i className="bi bi-sliders"></i>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-3">IN THE LAST 365 DAYS | MONTHLY | FILTERS (1)</Card.Subtitle>
              <Bar data={slaChartData} options={slaChartOptions} />
            </Card.Body>
          </Card>
        </Col>

        {/* Messages Received Over Time */}
        <Col lg={6} md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                Messages received over time
                <i className="bi bi-sliders"></i>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-3">IN THE LAST 365 DAYS | MONTHLY</Card.Subtitle>
              <Bar data={messagesChartData} options={messagesChartOptions} />
            </Card.Body>
          </Card>
        </Col>

        {/* Next SLA Completion Status */}
        <Col lg={6} md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                Next response SLA completion status over time
                <i className="bi bi-sliders"></i>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-3">IN THE LAST 365 DAYS | MONTHLY | FILTERS (1)</Card.Subtitle>
              <Bar data={nextSlaChartData} options={nextSlaChartOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default SupportAnalytics;

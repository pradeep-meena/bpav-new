import React from 'react';

const TicketTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockData = [
      { id: 1, channel: 'Email', ticketName: 'You have a new message', contact: 'Brayden Blessed', company: '--' },
      { id: 2, channel: 'Email', ticketName: 'Your Message 02039610359', contact: 'noreply@answerconnect.com', company: 'AnswerConnect' },
      { id: 3, channel: 'Email', ticketName: 'Test', contact: 'Ben Price', company: 'Bpav' },
      { id: 4, channel: 'Email', ticketName: 'Are you looking for "Highly Skilled and Experienced" ...', contact: 'Mohammed Hamid', company: 'Y-Axis Overseas' },
    ];

    setProducts(mockData);
  }, []);

  return (
    <div className="flex-grow-1 p-3">
      <div className="d-flex justify-content-between align-items-center border border-dark-300 bg-gray-200 px-2">
        <h4 className="p-2 text-muted">86 tickets</h4>
        <button className="text-info border border-dark-700 bg-white rounded">Edit Columns</button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th style={{ width: '3rem' }}>
                <input type="checkbox" />
              </th>
              <th style={{ width: '10%' }}>Channel</th>
              <th style={{ width: '35%' }}>Ticket Name</th>
              <th style={{ width: '25%' }}>Ticket → Contacts</th>
              <th style={{ width: '30%' }}>Ticket → Company (Primary)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td><input type="checkbox" /></td>
                <td>{product.channel}</td>
                <td>{product.ticketName}</td>
                <td>{product.contact}</td>
                <td>{product.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

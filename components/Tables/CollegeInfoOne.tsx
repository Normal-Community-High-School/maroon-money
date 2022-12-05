import { Table } from '@mantine/core';

const elements = [
    {
      "State": "California",
      "College": "Stanford University",
      "Net price": "$17,271"
    },
    {
      "State": "Connecticut",
      "College": "Yale University",
      "Net price": "$18,748"
    },
    {
      "State": "Illinois",
      "College": "Northwestern University",
      "Net price": "$27,540"
    },
    {
      "State": "Iowa",
      "College": "Grinnell College",
      "Net price": "$30,808"
    },
    {
      "State": "Michigan",
      "College": "University of Michigan",
      "Net price": "$16,856"
    },
    {
      "State": "Tennessee",
      "College": "Vandrbilt University",
      "Net price": "$23,596"
    }
  ];

export function CollegeInfoOne() {

    const rows = elements.map((element) => (
        <tr key={element["State"]}>
            <td>{element["State"]}</td>
            <td>{element["College"]}</td>
            <td>{element["Net price"]}</td>
        </tr>
    ));

    return (
        <Table highlightOnHover>
        <thead>
        <tr>
          <th>State</th>
          <th>College</th>
          <th>Net Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
        </Table>
    );
}
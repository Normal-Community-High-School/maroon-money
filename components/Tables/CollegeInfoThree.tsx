import { Table } from '@mantine/core';

const elements = [
    {
      "College": "University of Missouri",
      "Tuition(out of state)": "$33,900.00",
      "Housing and Dining(out of state)": "$10,940",
      "Total": "$44,840.00"
    },
    {
      "College": "Illinois State University",
      "Tuition(out of state)": "$26,940",
      "Housing and Dining(out of state)": "$10,602",
      "Total": "$37,542"
    },
    {
      "College": "Harvard",
      "Tuition(out of state)": "$49,653",
      "Housing and Dining(out of state)": "$18,389",
      "Total": "$68,042"
    },
    {
      "College": "University of Tennessee",
      "Tuition(out of state)": "$31,664",
      "Housing and Dining(out of state)": "$12,150",
      "Total": "$43,814"
    },
    {
      "College": "Iowa State",
      "Tuition(out of state)": "$26,617",
      "Housing and Dining(out of state)": "$9,358",
      "Total": "$35,975"
    },
    {
      "College": "Standford",
      "Tuition(out of state)": "$57,693",
      "Housing and Dining(out of state)": "$18,619",
      "Total": "$76,312"
    },
    {
      "College": "Massachusetts Insitute of Technology",
      "Tuition(out of state)": "$57,590",
      "Housing and Dining(out of state)": "$18,790",
      "Total": "$76,380"
    },
    {
      "College": "University of Chicago",
      "Tuition(out of state)": "$61,179.00",
      "Housing and Dining(out of state)": "$18,396.00",
      "Total": "$79,575.00"
    }
  ];

export function CollegeInfoTwo() {

    const rows = elements.map((element) => (
        <tr key={element["College"]}>
            <td>{element["College"]}</td>
            <td>{element["Tuition(out of state)"]}</td>
            <td>{element["Housing and Dining(out of state)"]}</td>
            <td>{element["Total"]}</td>
        </tr>
    ));

    return (
        <Table highlightOnHover>
        <thead>
        <tr>
          <th>College</th>
          <th>Tuition(out of state)</th>
          <th>Housing and Dining(out of state)</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
        </Table>
    );
}
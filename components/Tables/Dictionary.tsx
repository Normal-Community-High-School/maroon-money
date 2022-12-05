import { Table } from '@mantine/core';

const elements = [
    {
      "State": "Illinois",
      "In-State Tuition": "$10,304",
      "Out-of-State Tuition": "$13,378",
      "On Campus Living Costs": "$14,273"
    },
    {
      "State": "Indiana",
      "In-State Tuition": "$6,709",
      "Out-of-State Tuition": "$15,277",
      "On Campus Living Costs": "$13,595"
    },
    {
      "State": "Wisconsin",
      "In-State Tuition": "$6,308",
      "Out-of-State Tuition": "$11,426",
      "On Campus Living Costs": "$12,518"
    },
    {
      "State": "Iowa",
      "In-State Tuition": "$6,259",
      "Out-of-State Tuition": "$9,812",
      "On Campus Living Costs": "$12,264"
    },
    {
      "State": "Missouri",
      "In-State Tuition": "$7,551",
      "Out-of-State Tuition": "$13,196",
      "On Campus Living Costs": "$13,128"
    },
    {
      "State": "Kentucky",
      "In-State Tuition": "$6,496",
      "Out-of-State Tuition": "$17,391",
      "On Campus Living Costs": "$12,950"
    },
    {
      "State": "Michigan",
      "In-State Tuition": "$8,964",
      "Out-of-State Tuition": "$13,403",
      "On Campus Living Costs": "$12,405"
    },
    {
      "State": "California",
      "In-State Tuition": "$3,161",
      "Out-of-State Tuition": "$12,587",
      "On Campus Living Costs": "$16,946"
    },
    {
      "State": "Florida",
      "In-State Tuition": "$3,795",
      "Out-of-State Tuition": "$13,715",
      "On Campus Living Costs": "$15,045"
    },
    {
      "State": "Tennessee",
      "In-State Tuition": "$6,825",
      "Out-of-State Tuition": "$18,810",
      "On Campus Living Costs": "$13,862"
    },
    {
      "State": "Ohio",
      "In-State Tuition": "$7,152",
      "Out-of-State Tuition": "$14,531",
      "On Campus Living Costs": "$14,057"
    },
    {
      "State": "Average:",
      "In-State Tuition": "$6,684",
      "Out-of-State Tuition": "$13,957",
      "On Campus Living Costs": "$13,731"
    }
  ];

export function Dictionary() {

    const rows = elements.map((element) => (
        <tr key={element["State"]}>
            <td>{element["State"]}</td>
            <td>{element["In-State Tuition"]}</td>
            <td>{element["Out-of-State Tuition"]}</td>
            <td>{element["On Campus Living Costs"]}</td>
        </tr>
    ));

    return (
        <Table highlightOnHover>
        <thead>
        <tr>
          <th>State</th>
          <th>In-State Tuition</th>
          <th>Out-of-State Tuition</th>
          <th>On Campus Living Costs</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
        </Table>
    );
}
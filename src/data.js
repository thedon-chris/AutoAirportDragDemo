export default {
  columnDefs: [
    { rowDrag: true },
    {
      headerName: "Customer",
      field: "customer"
    },
    { rowDrag: true },
    {
      headerName: "AirportNumber",
      field: "airport"
    },
    {
      headerName: "Family",
      field: "family",
      rowGroup: true,
      hide: false
    },
    {
      headerName: "Item",
      field: "item"
    },
    {
      headerName: "Lot",
      field: "lot"
    },
    {
      headerName: "Qty",
      field: "qty",
      aggFunc: "sum"
    }
  ],
  rowData: [
    {
      airport: 50001,
      customer: "Al Hilal Drug Store",
      family: "	G",
      item: "G1080240B1P	",
      lot: "S342-19",
      qty: 50
    },
    {
      customer: "Al Hilal Drug Store",
      family: "	G",
      item: "G1080240B1P	",
      lot: "S343-19",
      qty: 50,
      airport: 50001
    },
    {
      customer: "Al Hilal Drug Store",
      family: "	G",
      item: "G1080240B1P	",
      lot: "S341-19",
      qty: 50,
      airport: 50001
    },
    {
      customer: "Adivet",
      family: "PX",
      item: "G1080240B1P	",
      lot: "S331-19",
      qty: 150,
      airport: 50001
    },
    {
      customer: "Adivet",
      family: "PX",
      item: "G1080240B1P	",
      lot: "S332-19",
      qty: 150,
      airport: 50001
    },
    {
      customer: "Adivet",
      family: "PX",
      item: "G1080240B1P	",
      lot: "S349-19",
      qty: 150,
      airport: 50001
    },
    {
      customer: "Demetech",
      family: "G",
      item: "G1080240B1P	",
      lot: "S349-19",
      qty: 150,
      airport: 50001
    },
    {
      customer: "Demetech",
      family: "G",
      item: "G1080240B1P	",
      lot: "S349-19",
      qty: 150,
      airport: 50001
    },
    {
      customer: "Demetech",
      family: "G",
      item: "G1080240B1P	",
      lot: "S349-19",
      qty: 150,
      airport: 50001
    },
    {
      customer: "Demetech",
      family: "G",
      item: "G1080240B1P	",
      lot: "S349-19",
      qty: 150,
      airport: 50001
    },
    {
      customer: "Adivet",
      family: "NL",
      item: "G1080240B1P	",
      lot: "S332-19",
      qty: 150,
      airport: 50001
    },
    {
      customer: "Adivet",
      family: "NL",
      item: "G1080240B1P	",
      lot: "S349-19",
      qty: 150,
      airport: 50001
    }
  ]
};

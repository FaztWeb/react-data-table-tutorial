import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

function App() {
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.apellido,
      sortable: true,
    },
    {
      name: "Edad",
      selector: (row) => row.edad,
      sortable: true,
    },
  ];

  const data = [
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Carlos",
      apellido: "Gonzalez",
      edad: 40,
    },
    {
      nombre: "Ana",
      apellido: "Gomez",
      edad: 20,
    },
    {
      nombre: "Pedro",
      apellido: "Rodriguez",
      edad: 35,
    },
    {
      nombre: "Lucia",
      apellido: "Diaz",
      edad: 28,
    },
    {
      nombre: "Fernando",
      apellido: "Sanchez",
      edad: 50,
    },
    {
      nombre: "Daniela",
      apellido: "Torres",
      edad: 22,
    },
  ];

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRecords(data);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e) => {
    const filteredRecords = data.filter((record) => {
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filteredRecords);
  };

  function Loader() {
    return <div>
      <h1>Cargando</h1>
      <h3>Spinner</h3>
    </div>
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <DataTable
        title="Datos de Usuario"
        columns={columns}
        data={records}
        selectableRows
        pagination
        // paginationPerPage={4}
        onSelectedRowsChange={(data) => console.log(data)}
        fixedHeader
        progressPending={loading}
        progressComponent={<Loader />}
      />
    </div>
  );
}

export default App;

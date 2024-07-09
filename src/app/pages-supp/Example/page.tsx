import { Button } from 'app/app/_components/ui/button';
import { Table, TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow, } from 'app/app/_components/ui/table';
import React from 'react';;



export default function Page () {
    return (
      <div className='p-0'>
        <h1 className='text-center text-5xl'>Tickets</h1>
        <ButtonGroup />
        <DataTable />
      </div>
    );
  };
  
const DataTable = () => {
  const data = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];

  return (
    <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
        </TableBody>
    </Table>
  );
};




const ButtonGroup = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <Button className='m-10 min-h-24 w-48'>Crear tickets</Button>
        <Button className='m-10 min-h-24 w-48'>Tickets finalizados</Button>
        <Button className='m-10 min-h-24 w-48'>Todos los tickets</Button>   {/* solo para admin */}
    </div>
);
};






import React from 'react';
import styled from 'styled-components';
import { useTable, useExpanded } from 'react-table';
import namor from 'namor';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns: userColumns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded },
  } = useTable(
    {
      columns: userColumns,
      data,
    },
    useExpanded // Use the useExpanded plugin hook
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
      <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
    </>
  );
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}
            </span>
          ) : null,
      },
      {
        Header: 'Main',
        columns: [
          {
            Header: 'Coin Name',
            accessor: 'coinName',
          },
          {
            Header: 'Bought For',
            accessor: 'BoughtFor',
          },
          {
            Header: 'Sold For',
            accessor: 'soldFor',
          },
          {
            Header: 'Profit',
            accessor: 'profit',
          },
        ],
      },
      {
        Header: 'Meta Details',
        columns: [
          {
            Header: 'Coin Price (B)',
            accessor: 'coinPriceWhenBought',
          },
          {
            Header: 'Coin Price (S)',
            accessor: 'coinPriceWhenSold',
          },

          {
            Header: 'Selling Date',
            accessor: 'sellingDate',
          },
          {
            Header: 'Plat Form',
            accessor: 'platForm',
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(2, 2), []);
  let modifiedData = data.map(items => {
    const subRow = items.subRows;
    const boughtForTotal = subRow.reduce((accumulator, current) => {
      return accumulator + parseInt(current.BoughtFor);
    }, 0);
    const soldForTotal = subRow.reduce((accumulator, current) => {
      return accumulator + parseInt(current.soldFor);
    }, 0);
    const profit = soldForTotal - boughtForTotal;
    const profitToShow = profit < 0 ? 0 : profit;
    return {
      ...items,
      BoughtFor : boughtForTotal,
      soldFor : soldForTotal,
      subRows : subRow,
      profit : profitToShow
    };
  });

  return (
    <Styles>
      <Table
        columns={columns}
        data={modifiedData}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(modifiedData, null, 2)}</pre>
    </Styles>
  );
}

export default App;

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    coinName: namor.generate({ words: 1, numbers: 0 }),
    BoughtFor: namor.generate({ words: 0, numbers: 3 }),
    soldFor: namor.generate({ words: 0, numbers: 4 }),
    SellingPrice:  namor.generate({ words: 0, numbers: 3 }),
    profit:  namor.generate({ words: 0, numbers: 2 }),
    platForm : 'WazirX',
    coinPrice: namor.generate({ words: 0, numbers: 3 }),
  };
};

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

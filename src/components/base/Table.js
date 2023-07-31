function TableHeader({ children, ...restProps }) {
  return <th {...restProps}>{children}</th>;
}

function TableRow({ children, ...restProps }) {
  return <tr {...restProps}>{children}</tr>;
}

function TableCell({ children, ...restProps }) {
  return <td {...restProps}>{children}</td>;
}

export { TableHeader, TableRow, TableCell };

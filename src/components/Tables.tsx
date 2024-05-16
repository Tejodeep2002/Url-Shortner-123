"use client"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Tooltip,
  Button,
} from "@nextui-org/react";
import { Clipboard } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Tables = ({ analytics }: { analytics: TablesProps[] }) => {
  const [page, setPage] = useState(1);

  const rowsPerPage = 6;

  const pages = Math.ceil(analytics.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return analytics.slice(start, end);
  }, [page, analytics, rowsPerPage]);

  const renderCell = useCallback((data: any, columnKey: string | number) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
      case "shortLink":
        return (
          <span className="flex items-center gap-2 justify-between">
            {`${window.location.href}${data.shortId}`}

            <CopyToClipboard text={`${window.location.href}${data.shortId}`}>
              
                <Button
                  title="copy link"
                  className={`border p-2 rounded-3xl  text-center bg-[#f7c00ae8] cursor-pointer `}
                >
                  <Clipboard size={16} />
                </Button>
        
            </CopyToClipboard>
          </span>
        );
      case "visitNumber":
        return <span>{data.visitHistory.length}</span>;
      case "url":
        return <span>{data.redirectUrl}</span>;
      default:
        return cellValue;
    }
  }, []);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [page, pages]);

  return (
    <Table
      isStriped
      isHeaderSticky
      fullWidth
      aria-label="Example static collection "
      bottomContent={bottomContent}
    >
      <TableHeader>
        <TableColumn key={"visitNumber"}>Visited</TableColumn>
        <TableColumn key={"shortLink"}>Short link</TableColumn>
        <TableColumn key={"url"}>Url</TableColumn>
        {/* <TableColumn>Date</TableColumn> */}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell className="h-10 w-full">
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Tables;

interface TablesProps {
  id: string;
  shortId: string;
  redirectUrl: string;
  visitHistory: [
    {
      id: string;
      createdAt: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
}

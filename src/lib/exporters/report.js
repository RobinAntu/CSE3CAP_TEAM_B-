export function downloadCSV(filename, rows) {
  const csv = rows.map(r => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

export function printReport(node) {
  const w = window.open("", "report");
  w.document.write(node.outerHTML);
  w.document.close();
  w.focus();
  w.print();
  w.close();
}

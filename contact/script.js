function doPost(e) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([data.name, data.email, data.message, new Date()]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
